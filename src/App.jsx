import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTitle } from './API/useTings';
import Home from './routes/Home';
import About from './routes/About';
import Resume from './routes/Resume';
import Navbar from './components/navbar/navbar';
import { failAlert, loginAlert } from '../src/common/alert';
import Test from './routes/Test';
import ResumeDetail from './routes/ResumeDetail';
import UserDB from './service/user_db_service';
import './components/style.css';
import './components/notion-styles.css';
import './components/notion/notion_style_by_lucia.css';
import './routes/Silence.css';
import style from './app.module.css';
import SilenceCatDog from './routes/SilenceCatDog';
import SilenceWrite from './routes/SilenceWrite';
import Modal from 'react-modal';
import axios from 'axios';
import { Response } from './service/response_servise';
import Login from './components/login/login';
import Maker from './components/tarot/maker/maker';
import Home2 from './components/home/home2';
export default function App({ authService }) {
  const titleUpdater = useTitle('Hello!');
  Modal.setAppElement('body');
  const [user, setUser] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const httpClient = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
  });

  const userDB = new UserDB(httpClient);
  const onLogin = async (textContent) => {
    await authService
      .login(textContent)
      .then((authUser) =>
        authUser.result === '성공'
          ? userDB.signUp(authUser.data)
          : loginErr(authUser)
      )
      .then((result) =>
        result.result === '성공'
          ? saveUser(result)
          : result.data.reason === 'secession'
          ? secessionUserAlert(result.data.data)
          : loginErr(result)
      )
      .catch((err) => {
        console.log('err!', err);
        err.statusCode === 500
          ? failAlert(err.act, err.data.reason)
          : err.statusCode === 403
          ? failAlert(err.act, err.data.message)
          : failAlert(err.act, err.data.reason);
        onLogOut();
      });
  };
  const loginErr = (Data) => {
    throw Data;
  };
  const saveUser = async (result) => {
    console.log('saveUser', result);
    setUser(result.data);
    controlModal();
    loginAlert(result);
  };

  const secessionUserAlert = async (userData) => {
    console.log('secessionUserAlert:', userData);
    if (window.confirm(`탈퇴한 유저입니다. 다시 회원가입 하시겠습니까?`)) {
      await userDB
        .reSignUp(userData)
        .then((res) => (res.result === '성공' ? saveUser(res) : loginErr(res)))
        .catch((err) =>
          err ? loginErr(err) : loginErr(Response.clientError({ message: err }))
        );
    } else authService.secession();
  };

  const onLogOut = () => {
    authService.onCurrentUser() && authService.logOut();
    setUser();
    controlModal();
  };

  const onSecession = async () => {
    await userDB
      .secesstion(user)
      .then(authService.secession())
      .then(() => {
        setUser();
        controlModal();
        alert(`탈퇴완료!`);
      })
      .catch((e) => (e ? alert(`탈퇴 실패 ㅠㅜ 다시 시도해 주세요`) : ''));
  };
  const controlModal = () => {
    setIsOpen((prv) => !prv);
  };
  useEffect(() => {
    authService.onAuthChange(userDB, setUser);
  }, [authService]);
  console.log('user', user);

  return (
    <Router>
      <div className={style.page}>
        <Modal
          className={style.modal}
          isOpen={isOpen}
          onRequestClose={controlModal}
        >
          <Login
            user={user}
            logIn={onLogin}
            logOut={onLogOut}
            secession={onSecession}
            authService={authService}
          />
        </Modal>
        <Navbar openModal={controlModal} user={user ? user : false} />
        <main className={style.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/silence" element={<SilenceCatDog />} />
            <Route path="/silence/write" element={<SilenceWrite />} />
            <Route path="/home2" element={<Home2 />} />
            <Route path="/tarot" element={<Maker user={user} />} />
            <Route
              path="/resume/detail/:notion_id"
              element={<ResumeDetail />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

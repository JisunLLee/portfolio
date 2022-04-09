import { deleteUser, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, onIdTokenChanged, signInWithPopup, signOut } from '@firebase/auth'
import firebaseApp from '../common/firebase'
import { Response } from './response_servise';
class AuthService {
    constructor(){
        this.firebase_app = firebaseApp;
        this.auth = getAuth();
        this.Response = Response();
    }
    login(providerName){
        console.log("providerName", providerName)
        const authProvider = providerName === "Google" ? new GoogleAuthProvider(this.firebase_app) : new GithubAuthProvider(this.firebase_app) 
        const result = signInWithPopup(this.auth, authProvider)
        .then(res => {console.log("RES:", res); return res})
            .then(res => this.userForm({...res.user, platform:providerName, ...res.user.reloadUserInfo,...res._tokenResponse}))
            .then(res => this.Response.success(201, res, providerName+" 로그인"))
            .catch((error) => {
                console.log("signInGoogle error:",error)
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                if(errorCode === 'auth/account-exists-with-different-credential'){
                    return this.Response.fail(403,{message: `이미 다른 플랫폼으로 가입하셨습니다. \n ${providerName === "Google" ? "GitHub" : "Google"} 로 로그인 해 주세요`,reason : "exists-with-different-credentia"},"로그인")
                } else {
                    console.log("errorCode",errorCode)
                    console.log("errorMessage",errorMessage);
                    console.log("email",email);
                    return  this.Response.serverError({act : "로그인/회원가입",message:errorCode ,reason : "FiREBASE SERVER ERROR"})
                }
            });
        return result;
    }

    logOut () {
        signOut(this.auth);
    }

    //회원 탈퇴
    secession () {
        const user = this.auth.currentUser;
        deleteUser(user).then(() => {
            console.log("deleteUser complete");
           return this.Response.success(200, {email : user.email}, "회원탈퇴")
        }).catch((error) => {
          console.log("deleteUser error", error);
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("errorCode",errorCode)
          console.log("errorMessage",errorMessage);
          return  this.Response.serverError({message:"FiREBASE SERVER ERROR" ,reason : "FiREBASE SERVER ERROR", act:"회원탈퇴"})
        });
    }

   async onAuthChange(userDB, setUser){
        onAuthStateChanged(this.auth, (user) => {
            console.log("onAuthStateChanged user", user)
            user &&  userDB.signUp(this.userForm(user.reloadUserInfo)).then(res => setUser(res.data))
          });
    }

    onCurrentUser(){
        return this.auth.currentUser;
    }
    //회원정보 포맷
    userForm (user) {
        console.log("userForm! ", user)
        return {
            username : user.displayName,
            email : user.email,
            platformId : user.localId,
            firebaseToken : user.oauthAccessToken,
            platformToken : user.accessToken,
            platformAuthToken : user.oauthIdToken,
            profilePoto : user.photoUrl,
            platform : user.platform, 
            firebaseId : user.uid
        }
    }
}

export default AuthService;
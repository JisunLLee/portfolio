import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthService from './service/auth_service';

const authService = new AuthService();
ReactDOM.render(
  <App authService={authService} />,
  document.getElementById('root')
);

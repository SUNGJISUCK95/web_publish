import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App.js'; // <App />이 import App이다.
// import App from './AppAvatar.js'; 
// import App from './AppButton.js'; 
import App from './AppCounter.js'; 
//파일 경로(./AppAvatar.js)의 이름은 다르게 넣어도 함수명(import App)은 App으로 고정해서 사용한다.
import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

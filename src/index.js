import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAU_X30tLhRFAietNbM8r6WW-4FwZvXcsM",
  authDomain: "visuali-305b8.firebaseapp.com",
  projectId: "visuali-305b8",
  storageBucket: "visuali-305b8.appspot.com",
  messagingSenderId: "618348826127",
  appId: "1:618348826127:web:50e7b1bdcf37d7226d5d7a",
  measurementId: "G-Y8YFLYSG2H"
};

const app = initializeApp(firebaseConfig);
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

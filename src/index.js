import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_ePSEujYxWdFaS4OpeSsIfOsUtpcVD_c",
  authDomain: "proyectofinal-23be0.firebaseapp.com",
  projectId: "proyectofinal-23be0",
  storageBucket: "proyectofinal-23be0.appspot.com",
  messagingSenderId: "902011508194",
  appId: "1:902011508194:web:3c196374ed294d7aebd5bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <App />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

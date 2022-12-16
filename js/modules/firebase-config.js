  //Här hämtade jag alla mina firebase configer
  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, where, query} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCLNp5NUKtyz-QX7YI2RL4O0mahpj3NCTA",
    authDomain: "devede-fce40.firebaseapp.com",
    projectId: "devede-fce40",
    storageBucket: "devede-fce40.appspot.com",
    messagingSenderId: "888059645792",
    appId: "1:888059645792:web:ebf592d98aa6af455ed805"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db= getFirestore(app)

  export { db, collection, addDoc, getDocs, query, 
    where, doc, deleteDoc }
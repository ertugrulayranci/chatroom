// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzZ50PAjDRXtanpFgNPhuLewMB5v65EVw",
  authDomain: "chatrooms-c21e3.firebaseapp.com",
  projectId: "chatrooms-c21e3",
  storageBucket: "chatrooms-c21e3.appspot.com",
  messagingSenderId: "763510976",
  appId: "1:763510976:web:cdc5b6d67bc1e8351d6d25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
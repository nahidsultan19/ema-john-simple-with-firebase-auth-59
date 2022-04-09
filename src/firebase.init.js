// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCy-pcePlKVk-DgTnTWnr7XuNLyeaL6w_U",
    authDomain: "ema-john-simple-2a324.firebaseapp.com",
    projectId: "ema-john-simple-2a324",
    storageBucket: "ema-john-simple-2a324.appspot.com",
    messagingSenderId: "763615554966",
    appId: "1:763615554966:web:1e27b07620a0537cb281b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth , signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2b-GSSXXYtCLrmJCe9ONvRm-IxU-rRVM",
  authDomain: "react-blog-website-39529.firebaseapp.com",
  projectId: "react-blog-website-39529",
  storageBucket: "react-blog-website-39529.appspot.com",
  messagingSenderId: "233378941481",
  appId: "1:233378941481:web:a618d40aa1fe9617a92a38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

 export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then ((result) => {
        user = result.user;
    })
    .catch((err) => {
        console.log(err)
    })

    return user;
}
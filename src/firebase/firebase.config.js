// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLt0OwWJurXXBsRen9rx_rp-fCHIVKAnk",
  authDomain: "tourista-81113.firebaseapp.com",
  projectId: "tourista-81113",
  storageBucket: "tourista-81113.appspot.com",
  messagingSenderId: "236102105766",
  appId: "1:236102105766:web:189bfdf381d3b6c32bd267"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
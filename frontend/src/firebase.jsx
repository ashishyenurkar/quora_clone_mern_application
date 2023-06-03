// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeRv8Px3JWBEf45_tBpjWfGjwq-bCdLAE",
  authDomain: "quora-clone-mern-6f83c.firebaseapp.com",
  projectId: "quora-clone-mern-6f83c",
  storageBucket: "quora-clone-mern-6f83c.appspot.com",
  messagingSenderId: "1032872816601",
  appId: "1:1032872816601:web:9b217c2442dd32cc0db3c8",
  measurementId: "G-XKVG25PP0Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
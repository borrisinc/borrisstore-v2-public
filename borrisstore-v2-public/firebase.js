// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOipfOxBznFwmOqCGImrpYTiV6XinCyLw",
  authDomain: "borris-store.firebaseapp.com",
  projectId: "borris-store",
  storageBucket: "borris-store.appspot.com",
  messagingSenderId: "845244285365",
  appId: "1:845244285365:web:fe583c64c2450f92a759fc",
  measurementId: "G-B1QCBPLX0Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const database = getDatabase(app);
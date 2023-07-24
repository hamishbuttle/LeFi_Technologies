// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD--wjTjePwN4svQbbX8UooXysc_xtOiNI",
  authDomain: "lefi-ae588.firebaseapp.com",
  projectId: "lefi-ae588",
  storageBucket: "lefi-ae588.appspot.com",
  messagingSenderId: "159989159982",
  appId: "1:159989159982:web:8af427e92334a337d027bf",
  measurementId: "G-7567RK505Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZ41nrrt8vGU5tVb3l_C-yy2rphRIn_AQ",
  authDomain: "fir-56221.firebaseapp.com",
  projectId: "fir-56221",
  storageBucket: "fir-56221.appspot.com",
  messagingSenderId: "734936064524",
  appId: "1:734936064524:web:cdf7a607949376e9b18429",
  measurementId: "G-G5X6HHRT8N"
};

initializeApp(firebaseConfig);
const db = getFirestore();
export default db;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARjEQg228Phia6h2agZkRzFitgem7RWkw",
  authDomain: "photofolio-6396a.firebaseapp.com",
  projectId: "photofolio-6396a",
  storageBucket: "photofolio-6396a.appspot.com",
  messagingSenderId: "500270578948",
  appId: "1:500270578948:web:e35852c639cb1209086451"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
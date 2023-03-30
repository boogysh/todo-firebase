// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG67bTsWP4fMRbdyKgUvzN94k7VnhqP1U",
  authDomain: "todo-44aa7.firebaseapp.com",
  projectId: "todo-44aa7",
  storageBucket: "todo-44aa7.appspot.com",
  messagingSenderId: "740641516904",
  appId: "1:740641516904:web:905df2d82172ccefd87add",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

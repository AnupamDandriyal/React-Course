// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvK327PWIW4LonNokD78XscxvMZroFhWY",
  authDomain: "vite-contacts-108d7.firebaseapp.com",
  projectId: "vite-contacts-108d7",
  storageBucket: "vite-contacts-108d7.appspot.com",
  messagingSenderId: "1094339927565",
  appId: "1:1094339927565:web:363cf6a616704f5976ff44"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
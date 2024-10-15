// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMHlzS70hno5GleYBuJx_yruTEbVG5hz0",
  authDomain: "projecttv-vue.firebaseapp.com",
  projectId: "projecttv-vue",
  storageBucket: "projecttv-vue.appspot.com",
  messagingSenderId: "712676607373",
  appId: "1:712676607373:web:6a21ad1a3fecd81900e9c4",
  measurementId: "G-L9GY2E7609",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

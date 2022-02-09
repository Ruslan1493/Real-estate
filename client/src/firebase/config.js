// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcP11DCd1SQt-ozDotLyVqnvTcN8htipI",
  authDomain: "real-estate-3d395.firebaseapp.com",
  projectId: "real-estate-3d395",
  storageBucket: "real-estate-3d395.appspot.com",
  messagingSenderId: "192176157411",
  appId: "1:192176157411:web:4c9d6a51bb727d5ca28bd6",
  measurementId: "G-4V566PNP3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
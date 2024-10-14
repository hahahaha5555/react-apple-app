// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjccZ_83h-7oFCQr_oW37peI4S5LIK1B4",
  authDomain: "apple-crud-app.firebaseapp.com",
  projectId: "apple-crud-app",
  storageBucket: "apple-crud-app.appspot.com",
  messagingSenderId: "1070041931932",
  appId: "1:1070041931932:web:8e9f5b24659dcb9fa48d59",
  //measurementId: "G-VDZSLZR3MT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app;
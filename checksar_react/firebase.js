// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsrsGNfplyxLCwyV8hkffHV8FwAitXGw8",
  authDomain: "checksar-8ceab.firebaseapp.com",
  projectId: "checksar-8ceab",
  storageBucket: "checksar-8ceab.appspot.com",
  messagingSenderId: "437752192197",
  appId: "1:437752192197:web:b5657c7fc840d0b9ada4ac",
  measurementId: "G-CW56CN53EL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
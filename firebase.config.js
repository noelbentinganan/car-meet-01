import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLR4R66b0UL9KAa9V3Dtn3g-lZzAmhsvQ",
  authDomain: "car-meet-effc2.firebaseapp.com",
  projectId: "car-meet-effc2",
  storageBucket: "car-meet-effc2.firebasestorage.app",
  messagingSenderId: "469003873377",
  appId: "1:469003873377:web:e699beb6627e3851cc4e20",
  measurementId: "G-79HNNGFZ2C",
};

// Initialize Firebase only if no app instance exists
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// initializeApp(firebaseConfig);
export const db = getFirestore();
// const analytics = getAnalytics(app);

export default app;

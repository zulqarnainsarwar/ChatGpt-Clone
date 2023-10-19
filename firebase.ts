import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApQ8i_evHgWt-hTMkJYFzhWoMuK8v6jAs",
  authDomain: "chatgpt-messanger-2a932.firebaseapp.com",
  projectId: "chatgpt-messanger-2a932",
  storageBucket: "chatgpt-messanger-2a932.appspot.com",
  messagingSenderId: "877694629885",
  appId: "1:877694629885:web:d32e4a24085947d1da4b94",
  measurementId: "G-M836MM4224",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

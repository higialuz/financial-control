import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDisIWs6aTvwD1v647eKV9IK9ECwfOR49g",
  authDomain: "expenses-d53e9.firebaseapp.com",
  projectId: "expenses-d53e9",
  storageBucket: "expenses-d53e9.appspot.com",
  messagingSenderId: "153316849096",
  appId: "1:153316849096:web:72150d1cae1066980c3cfd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy

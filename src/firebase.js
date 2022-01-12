import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBvsnu7ZeRJFTJ2I2Fn_LmiCvkTT1yJXIw",
  authDomain: "todo-app-ddeb5.firebaseapp.com",
  projectId: "todo-app-ddeb5",
  storageBucket: "todo-app-ddeb5.appspot.com",
  messagingSenderId: "711265238682",
  appId: "1:711265238682:web:e4801fb5e9450d138a6923",
  measurementId: "G-Z9ND74RD5N"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db } 
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAzfhSsI6X-8lESwTo86aKchGqJVJ_mK84",

  authDomain: "todo-app-c2c96.firebaseapp.com",

  projectId: "todo-app-c2c96",

  storageBucket: "todo-app-c2c96.appspot.com",

  messagingSenderId: "481166649550",

  appId: "1:481166649550:web:93edde3a54eeec3040c89f",

};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db } 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBfVNg-mELoISoDBbjsxpQUhvS7ZJFDww",
  authDomain: "tasksapp-firebase-react.firebaseapp.com",
  projectId: "tasksapp-firebase-react",
  storageBucket: "tasksapp-firebase-react.appspot.com",
  messagingSenderId: "567802422068",
  appId: "1:567802422068:web:ef8854ca863e3e1067bb61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
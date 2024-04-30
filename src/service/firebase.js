// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGveX3FAi5feSytE4dxujY67n3aJMDH6U",
  authDomain: "juanreads-coderapp.firebaseapp.com",
  projectId: "juanreads-coderapp",
  storageBucket: "juanreads-coderapp.appspot.com",
  messagingSenderId: "689618834733",
  appId: "1:689618834733:web:f9ab28f53eab0d957cafa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app);
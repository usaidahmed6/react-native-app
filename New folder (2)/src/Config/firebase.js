import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


import { addDoc, collection, getFirestore, setDoc, getDoc, deleteDoc, doc, onSnapshot, getDocs } from 'firebase/firestore';
// import { getStorage, ref, uploadBytes, getDownloadURL  } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD8OfAS9QfrhwVwrvD_qbWynf1AQdlouLA",
  authDomain: "contact-27889.firebaseapp.com",
  databaseURL: "https://contact-27889-default-rtdb.firebaseio.com",
  projectId: "contact-27889",
  storageBucket: "contact-27889.appspot.com",
  messagingSenderId: "330400002855",
  appId: "1:330400002855:web:90b568e37bdb4f93646f02",
  measurementId: "G-5VGJKWCMK8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

const db = getFirestore();
const userData = collection(db, 'userData')

// const storage = getStorage()
export {
  auth,
  app,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  userData,
  db,
  setDoc,
  getDoc,
  deleteDoc,
  doc,
  onSnapshot,
  getDocs,
  addDoc
}
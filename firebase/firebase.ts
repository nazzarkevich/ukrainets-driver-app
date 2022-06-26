// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyARroj9OmENqN0eU6Fcb3mn3zrwGjjN4PQ',
  authDomain: 'royal-nova.firebaseapp.com',
  databaseURL:
    'https://royal-nova-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'royal-nova',
  storageBucket: 'royal-nova.appspot.com',
  messagingSenderId: '524168098556',
  appId: '1:524168098556:web:c45140fe54aa3b72bfdd79',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

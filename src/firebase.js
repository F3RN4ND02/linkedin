import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAew9ZHRPIy_m9loexx1zzbgCvgfkBXmjU",
    authDomain: "fernlinkedinclone.firebaseapp.com",
    projectId: "fernlinkedinclone",
    storageBucket: "fernlinkedinclone.appspot.com",
    messagingSenderId: "899687344483",
    appId: "1:899687344483:web:2b836547bd39448b2b0b56"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
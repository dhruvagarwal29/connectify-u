import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  
    apiKey: "AIzaSyAJ045h_Sy_oaU7cI3Op7rs5B5mYIYkoCQ",
    authDomain: "connectify-u.firebaseapp.com",
    projectId: "connectify-u",
    storageBucket: "connectify-u.appspot.com",
    messagingSenderId: "825439506735",
    appId: "1:825439506735:web:1b6eeb1c6a03202c4291da"
  
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export {db, auth};
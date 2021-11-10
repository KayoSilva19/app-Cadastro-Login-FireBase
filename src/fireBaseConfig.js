import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBwUveUbCxE_u5l9XrSBF_dDQuhwoSnJZM",
    authDomain: "meuapp-c9f3d.firebaseapp.com",
    projectId: "meuapp-c9f3d",
    storageBucket: "meuapp-c9f3d.appspot.com",
    messagingSenderId: "125280902009",
    appId: "1:125280902009:web:20650263c07d53c5086da8",
    measurementId: "G-ELVC4ENHJY"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
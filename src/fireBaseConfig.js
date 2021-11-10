import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA7-mrOoMTPheYJ6SsjS2UjNIvagLngiXI",
    authDomain: "meuapp-cec4c.firebaseapp.com",
    databaseURL: "https://meuapp-cec4c-default-rtdb.firebaseio.com",
    projectId: "meuapp-cec4c",
    storageBucket: "meuapp-cec4c.appspot.com",
    messagingSenderId: "706571188441",
    appId: "1:706571188441:web:bad5cb01d9bb23c1ac66c8",
    measurementId: "G-T3HSH3L99T"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
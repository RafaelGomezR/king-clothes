import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDnWxqbIfdIa4jDBa1X4rP-EzGnJaHhvIk",
    authDomain: "king-db-dc6f4.firebaseapp.com",
    projectId: "king-db-dc6f4",
    storageBucket: "king-db-dc6f4.appspot.com",
    messagingSenderId: "836450380777",
    appId: "1:836450380777:web:7ebe03404497ddf51e3978",
    measurementId: "G-6J9F7FHLMF"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDoXhBQJNWHFgVWQpsO-i7vBv3sOz00104",

  authDomain: "crwn-db-3bff2.firebaseapp.com",

  projectId: "crwn-db-3bff2",

  storageBucket: "crwn-db-3bff2.appspot.com",

  messagingSenderId: "415715965360",

  appId: "1:415715965360:web:af3fbcc132a2ceda493e75",

  measurementId: "G-9S5MRSE6MZ",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
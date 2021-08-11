import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC_JuKsG-xJlytFO9PBMxGpHpR6ZII3Ibc",
  authDomain: "clone-bfa78.firebaseapp.com",
  projectId: "clone-bfa78",
  storageBucket: "clone-bfa78.appspot.com",
  messagingSenderId: "408710966085",
  appId: "1:408710966085:web:58694dbe47d15ef15aac2c",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();

export default db;

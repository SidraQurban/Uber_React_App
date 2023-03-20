import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBL6asHdATMe7geM-ylVpPOOPW5S13544k",
  authDomain: "rn-uber-clone-6826e.firebaseapp.com",
  projectId: "rn-uber-clone-6826e",
  storageBucket: "rn-uber-clone-6826e.appspot.com",
  messagingSenderId: "55708096016",
  appId: "1:55708096016:web:482c8ae23940a0d53c1c95"
};
  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
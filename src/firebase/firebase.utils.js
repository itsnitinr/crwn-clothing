import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCyadhK5s9hZqcid1OMv1oxHwl4h6oAnUw",
  authDomain: "crwn-db-db245.firebaseapp.com",
  databaseURL: "https://crwn-db-db245.firebaseio.com",
  projectId: "crwn-db-db245",
  storageBucket: "crwn-db-db245.appspot.com",
  messagingSenderId: "933115675003",
  appId: "1:933115675003:web:be71e288b78f86d1527dde",
  measurementId: "G-H7F7VLR5LF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
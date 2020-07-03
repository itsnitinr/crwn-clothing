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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);
  const batch = firestore.batch();
  objectsToAdd.forEach((object) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, object);
  });
  return await batch.commit();
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

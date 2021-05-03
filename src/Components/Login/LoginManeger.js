import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

// Initialize Firebase
export const initializeFramework = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};

// Goggle Sign In Function
export const googleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      const signInUser = result.user;
      return signInUser;
    })
    .catch((error) => {
      return error;
    });
};

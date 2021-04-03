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
      //   const { displayName, email } = result.user;
      //   const signInUser = {
      //     name: displayName,
      //     email: email,
      //   };
      const signInUser = result.user;
      return signInUser;
    })
    .catch((error) => {
      //   const { errorCode, errorMessage, email } = error;
      //   const signInUserError = {
      //     code: errorCode,
      //     message: errorMessage,
      //     email: email,
      //   };
      //   const signInUserError = error;
      return error;
    });
};

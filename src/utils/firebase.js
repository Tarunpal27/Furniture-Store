import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJHlaq0w7Tpk0SMkPXYXNg5iStEZEwtFU",
  authDomain: "furniture-store-f89aa.firebaseapp.com",
  projectId: "furniture-store-f89aa",
  storageBucket: "furniture-store-f89aa.appspot.com",
  messagingSenderId: "651742806763",
  appId: "1:651742806763:web:3cc594f67091dbb9c0f4ae",
  measurementId: "G-WVHGQJRF5S",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;

export default firebase;

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB3kHbtaM5Kc1Zp3KG_pO0WWAnTetNngSA",
  authDomain: "linkedin-clone-eb7f3.firebaseapp.com",
  projectId: "linkedin-clone-eb7f3",
  storageBucket: "linkedin-clone-eb7f3.appspot.com",
  messagingSenderId: "606038877481",
  appId: "1:606038877481:web:fb1f6795a4ad4b91a0c338",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

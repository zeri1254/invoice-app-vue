import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAATmp6gWDAADW2BjOLLj5nfO16d65j4Rs",
  authDomain: "invoice-app-efa05.firebaseapp.com",
  projectId: "invoice-app-efa05",
  storageBucket: "invoice-app-efa05.appspot.com",
  messagingSenderId: "7028123457",
  appId: "1:7028123457:web:9a44c9aad49cd8262463c0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCQNo4YD_nes4laU0kUcjS-s8bdHUc7Exc",
    authDomain: "healthcare-55aca.firebaseapp.com",
    projectId: "healthcare-55aca",
    storageBucket: "healthcare-55aca.appspot.com",
    messagingSenderId: "205840330432",
    appId: "1:205840330432:web:bb7d9de5fba8791f358725",
    measurementId: "G-JBFDKNE1JE"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

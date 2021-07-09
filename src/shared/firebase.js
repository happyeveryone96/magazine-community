import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';


const firebaseConfig = {
    // apiKey: "AIzaSyDugLw9tO53yLJNWSltsiPVOWqax811YV4",
    // authDomain: "magazine-community.firebaseapp.com",
    // projectId: "magazine-community",
    // storageBucket: "magazine-community.appspot.com",
    // messagingSenderId: "195171590041",
    // appId: "1:195171590041:web:e679dfda41e558b1d57d08",
    // measurementId: "G-BYJ0VCD0J2"
    apiKey: "AIzaSyBpVuT1PW7a3UyRw3XPPDtJiFDu572Ddtc",
    authDomain: "image-community-f14de.firebaseapp.com",
    projectId: "image-community-f14de",
    storageBucket: "image-community-f14de.appspot.com",
    messagingSenderId: "643035620791",
    appId: "1:643035620791:web:7fc687166f9e615f51f432",
    measurementId: "G-YHRMGPBKQP"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
const realtime = firebase.database();

export{auth, apiKey, firestore, storage, realtime};
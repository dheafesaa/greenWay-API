import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB_xvghEMuo9Fiecnr-8NrgcB3_Nd3J4Fc",
    authDomain: "greenway-04.firebaseapp.com",
    projectId: "greenway-04",
    storageBucket: "greenway-04.firebasestorage.app",
    messagingSenderId: "187826706281",
    appId: "1:187826706281:web:4367697ad07bde88ef4ff8",
    measurementId: "G-64ZCWGYK2Z"
};

const fireInit = initializeApp(firebaseConfig);
const db = getFirestore(fireInit);
const auth = getAuth(fireInit);

export { db, auth};

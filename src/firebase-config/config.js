
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAgpkN8I6KhH0G2qwTPT9wuQb_6YrYRrh8",
    authDomain: "newzcast-d7b92.firebaseapp.com",
    projectId: "newzcast-d7b92",
    storageBucket: "newzcast-d7b92.appspot.com",
    messagingSenderId: "865150005122",
    appId: "1:865150005122:web:de70c8d6d602cda67be99b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)



export default db
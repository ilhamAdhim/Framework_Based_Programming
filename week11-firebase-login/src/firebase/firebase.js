import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBlzF86rAXo-OLn8_zomQQbS3IR3Axq2Gg",
    authDomain: "week-10-pbf-firebase.firebaseapp.com",
    projectId: "week-10-pbf-firebase",
    storageBucket: "week-10-pbf-firebase.appspot.com",
    messagingSenderId: "390892349866",
    appId: "1:390892349866:web:438b3ec5401e78b9a6e3d3"
};

export const myFirebase = firebase.initializeApp(firebaseConfig)
const baseDb = myFirebase.firestore()
export const db = baseDb
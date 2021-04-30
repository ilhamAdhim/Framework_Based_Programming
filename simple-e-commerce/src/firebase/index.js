import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAwvszWtHZU_fvp8bGnggQ3eTSw2djDV34",
    authDomain: "simple-ecommerce-7dcff.firebaseapp.com",
    projectId: "simple-ecommerce-7dcff",
    storageBucket: "simple-ecommerce-7dcff.appspot.com",
    messagingSenderId: "909458835959",
    appId: "1:909458835959:web:47767ec49f879f151e06f2",
    measurementId: "G-357TRKJGYD"
};

export const myFirebase = firebase.initializeApp(firebaseConfig)
const baseDb = myFirebase.firestore()
export const db = baseDb
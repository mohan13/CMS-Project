
import { initializeApp } from "firebase/app"
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDRQEVb9_D0EZ8cPYQFll0CXIbMvGt-cVo",
  authDomain: "fir-upload-732a6.firebaseapp.com",
  projectId: "fir-upload-732a6",
  storageBucket: "fir-upload-732a6.appspot.com",
  messagingSenderId: "725714967685",
  appId: "1:725714967685:web:bbc352617e402b7e939dec",
  measurementId: "G-80EXLY7CL4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

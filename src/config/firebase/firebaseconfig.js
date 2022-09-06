// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvDuoQgbvH6OBMbLGgB3cUUD3mI5PF8tU",
  authDomain: "peakgo-authentication.firebaseapp.com",
  projectId: "peakgo-authentication",
  storageBucket: "peakgo-authentication.appspot.com",
  messagingSenderId: "833702330188",
  appId: "1:833702330188:web:46be21a559db713555d9e9",
  measurementId: "G-BGET4PYNYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)


export default auth
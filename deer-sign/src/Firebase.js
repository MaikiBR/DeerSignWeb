// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbpvemLyWFdNVPwYjD4wdxi1yvYihl2yQ",
  authDomain: "webdata-f6952.firebaseapp.com",
  databaseURL: "https://webdata-f6952-default-rtdb.firebaseio.com",
  projectId: "webdata-f6952",
  storageBucket: "webdata-f6952.appspot.com",
  messagingSenderId: "129696012214",
  appId: "1:129696012214:web:1c6a927ad99d36e0999317",
  measurementId: "G-JKEXHXYJXG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app};
export {auth};
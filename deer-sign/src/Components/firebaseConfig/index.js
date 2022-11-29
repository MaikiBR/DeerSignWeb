import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import { getAnalytics } from "firebase/analytics";

function StartFirebase(){
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
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);

      return getDatabase(app);
}

export default StartFirebase;

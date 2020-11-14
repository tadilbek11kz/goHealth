import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCEatRTDOR6GT1sduO5UT0oDK2gT75RI0g",
    authDomain: "gohealth-7da5c.firebaseapp.com",
    databaseURL: "https://gohealth-7da5c.firebaseio.com",
    projectId: "gohealth-7da5c",
    storageBucket: "gohealth-7da5c.appspot.com",
    messagingSenderId: "193083994989",
    appId: "1:193083994989:web:065abceafe6e263c162064",
    measurementId: "G-ZMX0PFR408"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
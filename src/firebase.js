import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCU865-LD96B56zOXs9boBk7lmOsKbtsZw",
    authDomain: "facebook-clone-mess.firebaseapp.com",
    databaseURL: "https://facebook-clone-mess.firebaseio.com",
    projectId: "facebook-clone-mess",
    storageBucket: "facebook-clone-mess.appspot.com",
    messagingSenderId: "751304743388",
    appId: "1:751304743388:web:d34507b177e24db5e21719",
    measurementId: "G-GCCBZ0ZJHX"
});
const db = firebaseApp.firestore();
export default db;
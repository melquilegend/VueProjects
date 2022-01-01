import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAt-Xm2kO2YI0nRHnx9-zYxpPjknjI_AIY",
  authDomain: "invoice-app-29bf3.firebaseapp.com",
  projectId: "invoice-app-29bf3",
  storageBucket: "invoice-app-29bf3.appspot.com",
  messagingSenderId: "791289841896",
  appId: "1:791289841896:web:36b485e84048ca216be15d"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
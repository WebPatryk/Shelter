import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDFMV7CCAP0FGKqosgCxgcUvlZnqNHSUIc',
  authDomain: 'shelter-60062.firebaseapp.com',
  projectId: 'shelter-60062',
  storageBucket: 'shelter-60062.appspot.com',
  messagingSenderId: '801067659238',
  appId: '1:801067659238:web:5e78e48127963d2cd43027',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };

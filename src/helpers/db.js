import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARPfPL0qNyuradRv-mYcCCD73OL6pbCb4",
  authDomain: "reactjswithfirebase-38ed7.firebaseapp.com",
  projectId: "reactjswithfirebase-38ed7",
  storageBucket: "reactjswithfirebase-38ed7.appspot.com",
  messagingSenderId: "757905683716",
  appId: "1:757905683716:web:e3c4561a5b5e85c648cc51"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
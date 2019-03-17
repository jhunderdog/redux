import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBSCfSJaZeVl1U1NffaH2PrdAGCbSpDDy0",
  authDomain: "nyan-forum-1048b.firebaseapp.com",
  databaseURL: "https://nyan-forum-1048b.firebaseio.com",
  projectId: "nyan-forum-1048b",
  storageBucket: "nyan-forum-1048b.appspot.com",
  messagingSenderId: "16629018222"
};
firebase.initializeApp(config);

const db = firebase.firestore();

export {
  db
};
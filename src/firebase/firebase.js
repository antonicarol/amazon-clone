import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDT_PcwWYzH2v5hp8IIjOcUU1nvboz5ehw",
    authDomain: "clone-1e517.firebaseapp.com",
    databaseURL: "https://clone-1e517.firebaseio.com",
    projectId: "clone-1e517",
    storageBucket: "clone-1e517.appspot.com",
    messagingSenderId: "954885941279",
    appId: "1:954885941279:web:bb63c5d1aa5c4033a8cd2a"
  });

  export const auth = firebase.auth()


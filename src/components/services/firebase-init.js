import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyCLkhAUJxyLIzOh2KtSwXedymDJ2IeD4cU",
  authDomain: "stellantis-hack.firebaseapp.com",
  projectId: "stellantis-hack",
  storageBucket: "stellantis-hack.appspot.com",
  messagingSenderId: "510807148235",
  appId: "1:510807148235:web:bd176e03eb1f938871fd4e",
  measurementId: "G-WWW9B8L20Q",
});

export const db = firebase.firestore();
export default firebase;

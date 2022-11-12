const { initializeApp } = require("firebase/compat/app");
const { getFirestore, collection } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBAUmZtylTmztcyegO-zUQJwZZuTdnAZqM",
  authDomain: "chat-app-mahfuz.firebaseapp.com",
  databaseURL: "https://chat-app-mahfuz-default-rtdb.firebaseio.com",
  projectId: "chat-app-mahfuz",
  storageBucket: "chat-app-mahfuz.appspot.com",
  messagingSenderId: "321103549997",
  appId: "1:321103549997:web:d34659faa5be7b2c20caa4",
  measurementId: "G-439HX5ZSEB",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const collectionRef = collection(db, "users");

module.exports = {
  db,
  collectionRef,
};

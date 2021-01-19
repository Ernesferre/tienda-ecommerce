import firebase from 'firebase/app';
import '@firebase/firestore'; 

const app = firebase.initializeApp({
  apiKey: "AIzaSyDVEhomvsznxis-qLFjlllxpt3Iq087ImQ",
  authDomain: "tiendamusikal.firebaseapp.com",
  projectId: "tiendamusikal",
  storageBucket: "tiendamusikal.appspot.com",
  messagingSenderId: "595989645383",
  appId: "1:595989645383:web:5f374c791f16141c154962"
})

export function getFirebase(){
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
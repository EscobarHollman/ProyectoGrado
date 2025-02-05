
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB8td07EK5REvHsCWeRqRK-6hEIqKnsnlA",
  authDomain: "pinterestmcg.firebaseapp.com",
  projectId: "pinterestmcg",
  storageBucket: "pinterestmcg.firebasestorage.app",
  messagingSenderId: "184255114625",
  appId: "1:184255114625:web:0d0202b864b4effb5e8c80"
};


const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const imageDB = getStorage(firebase);
const firestore = getFirestore(firebase);
export { auth, imageDB, firestore, firebase };

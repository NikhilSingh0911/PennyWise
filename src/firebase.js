import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDIm6goCza9B4GC9eIkbiQgol02vDoaWRQ",
//   authDomain: "pennywise-app-74635.firebaseapp.com",
//   projectId: "pennywise-app-74635",
//   storageBucket: "pennywise-app-74635.appspot.com",
//   messagingSenderId: "653429144046",
//   appId: "1:653429144046:web:775db26b1fe2d3d6d576ff",
//   measurementId: "G-L85VQ0X53F"
// };
const firebaseConfig = {
  apiKey: "AIzaSyAA5ROAR-izq_-gBjVzSAHmRalQJ78mSFM",
  authDomain: "pennywise-8ab7a.firebaseapp.com",
  projectId: "pennywise-8ab7a",
  storageBucket: "pennywise-8ab7a.firebasestorage.app",
  messagingSenderId: "635793753817",
  appId: "1:635793753817:web:2ec81983065fe98d61e0c8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
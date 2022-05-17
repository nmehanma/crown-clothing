import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVBiyDK0gA7XorlAkzKEP8-zrUSiE18YI",
  authDomain: "crwn-clothing-db-c5ab4.firebaseapp.com",
  projectId: "crwn-clothing-db-c5ab4",
  storageBucket: "crwn-clothing-db-c5ab4.appspot.com",
  messagingSenderId: "675576989251",
  appId: "1:675576989251:web:f3419f7cab610ca5c3f6f6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

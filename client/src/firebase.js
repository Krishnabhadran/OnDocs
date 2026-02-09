import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAcAobh0-KWzHW-dgmzVC4oy9zhaGAqhCs",
  authDomain: "suryaoffice-b7cd5.firebaseapp.com",
  projectId: "suryaoffice-b7cd5",
  storageBucket: "suryaoffice-b7cd5.firebasestorage.app",
  messagingSenderId: "677892932823",
  appId: "1:677892932823:web:e999d32c538a1161a1dc92"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

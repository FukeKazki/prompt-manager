import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3MMybRdMFpdCWk68ndI1Z4326ed4eFaA",
  authDomain: "prompt-manager-d269a.firebaseapp.com",
  projectId: "prompt-manager-d269a",
  storageBucket: "prompt-manager-d269a.appspot.com",
  messagingSenderId: "27414987984",
  appId: "1:27414987984:web:70cf3c14c0c7343aaa0ad5",
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

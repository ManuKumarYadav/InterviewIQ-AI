import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {

  apiKey: "AIzaSyBUvozuWC8nYwNJLzkjnchNNLeVLGzy-J8",

  authDomain: "interviewiq-ai-6d642.firebaseapp.com",

  projectId: "interviewiq-ai-6d642",

  storageBucket: "interviewiq-ai-6d642.firebasestorage.app",

  messagingSenderId: "158603422196",

  appId: "1:158603422196:web:c3b7e8defb173853b5f1a1",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider =
  new GoogleAuthProvider();
  
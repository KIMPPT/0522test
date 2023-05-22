// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYFMwz4VMiaQhI_eVWtskg5pa-CJlVwAk",
  authDomain: "test-915c3.firebaseapp.com",
  projectId: "test-915c3",
  storageBucket: "test-915c3.appspot.com",
  messagingSenderId: "897146956238",
  appId: "1:897146956238:web:26fea21fa745e96155239f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

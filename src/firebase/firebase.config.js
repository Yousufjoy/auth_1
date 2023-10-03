// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9z91OGqDPK-etc-wsbQC-ig62NRDAGm0",
  authDomain: "user-email-password-auth-7451f.firebaseapp.com",
  projectId: "user-email-password-auth-7451f",
  storageBucket: "user-email-password-auth-7451f.appspot.com",
  messagingSenderId: "906766159746",
  appId: "1:906766159746:web:715d1ca7a1ccbe8acb499b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;

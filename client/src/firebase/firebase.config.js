// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCnmLBQ9vVMs9Q3ejNDGI1TvbiuE6tXoSA",
  authDomain: "ph-assaignment-11-renting-cars.firebaseapp.com",
  projectId: "ph-assaignment-11-renting-cars",
  storageBucket: "ph-assaignment-11-renting-cars.firebasestorage.app",
  messagingSenderId: "575545961107",
  appId: "1:575545961107:web:048fb6b2be208d41ba7b66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
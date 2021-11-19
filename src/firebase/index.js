import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCOmMOvbr1cZ0GEgNmE1B46OVoq0X1AOsU",
    authDomain: "agu-ecommerce-mma.firebaseapp.com",
    projectId: "agu-ecommerce-mma",
    storageBucket: "agu-ecommerce-mma.appspot.com",
    messagingSenderId: "348326036379",
    appId: "1:348326036379:web:25fa333567395fb8a2573e"
  };

    const app = initializeApp(firebaseConfig);
    export const getFirebase = () => app;
    export { getFirestore }
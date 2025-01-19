// Importation des fonctions nécessaires depuis Firebase v9+
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Votre configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDgkXffpz6QMCkFuD3o5vjt84PprgWX_N4",
    authDomain: "clone-3ae96.firebaseapp.com",
    projectId: "clone-3ae96",
    storageBucket: "clone-3ae96.appspot.com",
    messagingSenderId: "594238345456",
    appId: "1:594238345456:web:bc77be91c20a68674e3235",
    measurementId: "G-8MVPJMYH12"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// Initialisation de l'authentification et de la base de données
const auth = getAuth(app);
const db = getFirestore(app);

// Exportation des fonctions nécessaires
export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword };

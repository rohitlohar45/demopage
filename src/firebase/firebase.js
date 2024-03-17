import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBF13AjXXsjSERMPOqB-e8G9wfgPIrUpSA",
	authDomain: "peace-interiors.firebaseapp.com",
	projectId: "peace-interiors",
	storageBucket: "peace-interiors.appspot.com",
	messagingSenderId: "556421056070",
	appId: "1:556421056070:web:570728cf050cc709ee2c47",
	measurementId: "G-KQWMC9KMZ8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const projectStorage = getStorage(app);

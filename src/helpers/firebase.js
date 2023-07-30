// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBF13AjXXsjSERMPOqB-e8G9wfgPIrUpSA",
	authDomain: "peace-interiors.firebaseapp.com",
	projectId: "peace-interiors",
	storageBucket: "peace-interiors.appspot.com",
	messagingSenderId: "556421056070",
	appId: "1:556421056070:web:570728cf050cc709ee2c47",
	measurementId: "G-KQWMC9KMZ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export default app;

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCJMLAEUUekTOOTfY5BMPs5Y8egUPmx7MU",
	authDomain: "cosinuts-11841.firebaseapp.com",
	projectId: "cosinuts-11841",
	storageBucket: "cosinuts-11841.appspot.com",
	messagingSenderId: "75369149243",
	appId: "1:75369149243:web:8fbd82b645b272ceff7d1e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

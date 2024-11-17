// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCYYYnRcw0T7ZYt7adJHg419c4wZ3CMfn8',
  authDomain: 'riset-air-quality-kalipaten.firebaseapp.com',
  projectId: 'riset-air-quality-kalipaten',
  storageBucket: 'riset-air-quality-kalipaten.appspot.com',
  messagingSenderId: '474661596383',
  appId: '1:474661596383:web:2da586b8c4fee52b048d6a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

import * as firebase from 'firebase';
import flamelink from 'flamelink';

console.log('Database url: ', process.env.FIREBASE_DATABASE)

const config = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: process.env.FIREBASE_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_SENDER_ID
};

const firebaseApp = firebase.initializeApp(config);
const app = flamelink({ firebaseApp });


export default app;
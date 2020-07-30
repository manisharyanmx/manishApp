import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCOsW_kTYHJuezTIPnZkSwpXrvd5h7Uyec",
    authDomain: "manishapp-682c9.firebaseapp.com",
    databaseURL: "https://manishapp-682c9.firebaseio.com",
    projectId: "manishapp-682c9",
    storageBucket: "manishapp-682c9.appspot.com",
    messagingSenderId: "560264529642",
    appId: "1:560264529642:web:e07b62a16455f2fdef7993",
    measurementId: "G-8SLNDXQGNY"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzM5WYZMZGCjN8V68OIPc3AzEEf5RS2es",
    authDomain: "chatapp-fa4b1.firebaseapp.com",
    projectId: "chatapp-fa4b1",
    storageBucket: "chatapp-fa4b1.appspot.com",
    messagingSenderId: "543459917363",
    appId: "1:543459917363:web:5161b304dcd815fae52d46",
    measurementId: "G-1SBNCEN0K6"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage().ref();

  export { auth,provider,storage };
  export default db;

import firebase from "firebase";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCxpc4xJrj0ZU9z2bs5TQviIgGG4rLIpY4",
    authDomain: "react-tinymce.firebaseapp.com",
    projectId: "react-tinymce",
    storageBucket: "react-tinymce.appspot.com",
    messagingSenderId: "689986131799",
    appId: "1:689986131799:web:b5126df3cb39f1eb97d012"
  };

  
  firebase.initializeApp(firebaseConfig)

  export default firebase;
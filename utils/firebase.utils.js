import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYgNsyjttBY57bDjI1ZMx4x8oksZHXCHI",
  authDomain: "portfolio-web2.firebaseapp.com",
  databaseURL:
    "https://portfolio-web2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-web2",
  storageBucket: "portfolio-web2.appspot.com",
  messagingSenderId: "621338947378",
  appId: "1:621338947378:web:c1c8bd8f775c833ab3312b",
};

export default firebase.initializeApp(firebaseConfig);

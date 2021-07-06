import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCj50M_NzuxSEIC748ylQyfjqAzRc9DaNA",
  authDomain: "vueproject-4d7e4.firebaseapp.com",
  projectId: "vueproject-4d7e4",
  storageBucket: "vueproject-4d7e4.appspot.com",
  messagingSenderId: "809736953091",
  appId: "1:809736953091:web:179bec92e0e93ec0a51d36",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();

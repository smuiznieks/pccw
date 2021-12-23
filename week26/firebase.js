// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, onValue, ref, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlMCIpNNL4LBY1OlU5PlVtgIq35dkmNgs",
  authDomain: "pccw-45be6.firebaseapp.com",
  projectId: "pccw-45be6",
  storageBucket: "pccw-45be6.appspot.com",
  messagingSenderId: "344033834715",
  appId: "1:344033834715:web:92f1f838fed173c3047efe",
  measurementId: "G-K9P4KCXKBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// console.log(analytics);

const database = getDatabase();
// console.log(database);

// Write data
function writeUserData(userId, name, email, imageUrl) {
  set(ref(database, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

// writeUserData(1, 'Selga', 'selga@email.com', 'https://babushkadeli.uk/images/thumbs/0000185_biscuits-selga-with-condensed-milk-taste-180g_550.jpeg')

// Read data
const userRef = ref(database, 'users/1');
onValue(userRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

const anotherUserRef = ref(database, 'users/2');
onValue(anotherUserRef, (snapshot) => {
  const data = snapshot;
  console.log(data);
});


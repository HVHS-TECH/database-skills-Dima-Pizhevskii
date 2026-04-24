/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/
const firebaseConfig = {
  apiKey: "AIzaSyCYVv0uVzV8OfDs36G4Whw1irInHK9y1rI",
  authDomain: "golf-game-by-dima.firebaseapp.com",
  databaseURL: "https://golf-game-by-dima-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "golf-game-by-dima",
  storageBucket: "golf-game-by-dima.firebasestorage.app",
  messagingSenderId: "522102856582",
  appId: "1:522102856582:web:396b62b349e56b5e646a07",
  measurementId: "G-P6ENDMD5QC"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);

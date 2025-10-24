**Bookify - Online Book Marketplace**
Bookify is a web application for listing, browsing, and purchasing books online. Users can register, log in with email/password or Google authentication, list their books for sale, and view book details including owner information.
Built with React, React Bootstrap, and Firebase (Firestore, Authentication).


**Technologies Used**
Frontend: React, React Router, React Bootstrap
Backend: Firebase Firestore & Firebase Authentication
Hosting: Firebase / any static hosting service

**Firebase Setup**
1. Create a Firebase project at https://console.firebase.google.com/
2. nable Firestore Database and Authentication (Email & Google).
3. Replace the Firebase config in src/Context/Firebase.js:
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
4. Start the project with npm start.

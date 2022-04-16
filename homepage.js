// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC5SeiRS8sEYpi_l_ZBzoIw10WaFPZCslY",
     authDomain: "find-teammate-3fec4.firebaseapp.com",
     projectId: "find-teammate-3fec4",
     storageBucket: "find-teammate-3fec4.appspot.com",
     messagingSenderId: "217046551354",
     appId: "1:217046551354:web:001dca64bb89806655de03",
     measurementId: "G-SX11QVQ326"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()


function logout(){
    firebase.auth().signOut();
    window.location.href = "../loginpage.html";
  }
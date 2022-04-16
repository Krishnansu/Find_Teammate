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
    window.location.href = "loginpage.html";
  }




  var firestore = firebase.firestore()

  //Variable to access database collection
  const db = firestore.collection("ProfileData")
  
  
  //Get Submit Form
  let submitButton = document.getElementById('formbutton')
  
  //Create Event Listener To Allow Form Submission
  submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
  
    //Get Form Values
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let ema = document.getElementById('ema').value
    let dob = document.getElementById('dob').value
    let clg = document.getElementById('clg').value
    let yr = document.getElementById('yr').value
    let skl = document.getElementById('skl').value
    let tsk = document.getElementById('tsk').value
    let gtu = document.getElementById('gtu').value
  
    //Save Form Data To Firebase
   

// Add a new document in collection 

   db.doc().set({
      fname: fname,
      lname:lname,
      ema:ema,
      dob:dob,
      clg:clg,
      yr:yr,
      skl:skl,
      tsk:tsk,
      gtu:gtu
    }).then( () => {
      console.log("Data saved")
      document.getElementById('profileform').reset();
      
      window.location.href="../HomePage/index.html";
    }).catch((error) => {
      console.log(error)
    })
  
    //alert
    alert("Profile Created Successfully")
    
    
  })

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
  
  // Set up our register function
  function register () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Invalid!!')
      return
      // Don't continue running the code
    }
    if (validate_field(full_name) == false ) {
      alert('One or More Extra Fields is Invalid!!')
      return
    }
   
    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        email : email,
        full_name : full_name,
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data)
  
      // DOne
      alert('User Created!!')
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  // Set up our login function
  function login () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return
      // Don't continue running the code
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data)
  
      // DOne
      alert('User Logged In!!')
  
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  
  
  
  // Validate Functions
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }

  firebase.auth().onAuthStateChanged(function(user){
    if (user) {
      // User is signed in.
  
      document.getElementById("user_div").style.display ="block";
      document.getElementById("content_container").style.display = "none";
      document.getElementById("profcreate").style.display = "none";
  
      var user = firebase.auth().currentUser;
  
      if(user != null){
  
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
  
      }
  
    } else {
      // No user is signed in.
  
      document.getElementById("user_div").style.display = "none";
      document.getElementById("content_container").style.display = "block";
      document.getElementById("profcreate").style.display = "none";
    }
});

function logout(){
    firebase.auth().signOut();
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
    let dob = document.getElementById('dob').value
    let clg = document.getElementById('clg').value
    let yr = document.getElementById('yr').value
    let skl = document.getElementById('skl').value
    let tsk = document.getElementById('tsk').value
  
    //Save Form Data To Firebase
   

// Add a new document in collection 

   db.doc().set({
      fname: fname,
      lname:lname,
      dob:dob,
      clg:clg,
      yr:yr,
      skl:skl,
      tsk:tsk
    }).then( () => {
      console.log("Data saved")
      document.getElementById('profileform').reset();
      document.getElementById("formf").style.display = "none";
      document.getElementById("profcreate").style.display = "block";
    }).catch((error) => {
      console.log(error)
    })
  
    //alert
    alert("Profile Created Successfully")
    
  })

  
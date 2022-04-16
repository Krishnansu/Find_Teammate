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

    console.log("REGISTER");
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
      window.location.replace("Create Profile/createProf.html")
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }

  function show(){
    document.getElementById("reg_container").style.display ="block";
      document.getElementById("log_container").style.display = "none";
  }

  function dontshow(){
    document.getElementById("reg_container").style.display ="none";
      document.getElementById("log_container").style.display = "block";
  }

  // function toggle(){
  //   document.getElementById("password").style.display="block";
  // }
  
  // Set up our login function
  function login () {
    console.log("LOGIN");
    // Get all our input fields
    email = document.getElementById('email1').value
    password = document.getElementById('password1').value
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Invalid!!')
      return
      // Don't continue running the code
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      window.location.replace("Create Profile/createProf.html")
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
      // alert('User Logged In!!')
  
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

  function logout(){
    firebase.auth().signOut();
    window.location.href = "loginpage.html";
  }
  


  
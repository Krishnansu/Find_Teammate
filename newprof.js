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


let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('body').appendChild(table);

// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "First Name";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Last Name";
let heading_9 = document.createElement('th');
heading_9.innerHTML = "Email";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "DOB";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "College";
let heading_5 = document.createElement('th');
heading_5.innerHTML = "Year of Study";
let heading_6 = document.createElement('th');
heading_6.innerHTML = "Skills";
let heading_7 = document.createElement('th');
heading_7.innerHTML = "Tech Stack";
let heading_8 = document.createElement('th');
heading_8.innerHTML = "GitHub Profile";


row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_9);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
row_1.appendChild(heading_6);
row_1.appendChild(heading_7);
row_1.appendChild(heading_8);
thead.appendChild(row_1);



firebase.firestore().collection("ProfileData").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = doc.data().fname;
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = doc.data().lname;
let row_2_data_9 = document.createElement('td');
row_2_data_9.innerHTML = doc.data().ema;
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = doc.data().dob;
let row_2_data_4 = document.createElement('td');
row_2_data_4.innerHTML = doc.data().clg;
let row_2_data_5 = document.createElement('td');
row_2_data_5.innerHTML = doc.data().yr;
let row_2_data_6 = document.createElement('td');
row_2_data_6.innerHTML = doc.data().skl;
let row_2_data_7 = document.createElement('td');
row_2_data_7.innerHTML = doc.data().tsk;
let row_2_data_8 = document.createElement('td');

fetch("https://api.github.com/users/"+doc.data().gtu)
.then((result) => result.json())
.then((data) => {
    console.log(data)
    str=doc.data().gtu.toString()

    row_2_data_8.innerHTML =` <a style="color: white; text-decoration: none; font-size: medium; font-family: cursive; background-color: #008979;box-sizing: border-box; border-radius: 5px;" target="_blank" href="https://www.github.com/${str}">Click Here</a>`

        
    });


row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_9);
row_2.appendChild(row_2_data_3);
row_2.appendChild(row_2_data_4);
row_2.appendChild(row_2_data_5);
row_2.appendChild(row_2_data_6);
row_2.appendChild(row_2_data_7);
row_2.appendChild(row_2_data_8);
tbody.appendChild(row_2);


});
})


function logout(){
    firebase.auth().signOut();
    window.location.href = "loginpage.html";
  }
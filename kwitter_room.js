var firebaseConfig = {
      apiKey: "AIzaSyB-e525mnF-csGZI9hfBCLjJswduR26DnE",
      authDomain: "kwitter-380ae.firebaseapp.com",
      databaseURL: "https://kwitter-380ae-default-rtdb.firebaseio.com",
      projectId: "kwitter-380ae",
      storageBucket: "kwitter-380ae.appspot.com",
      messagingSenderId: "825613596349",
      appId: "1:825613596349:web:51e16ff34b2afe73b4e9d4",
      measurementId: "G-32GD7GR729"
    };
firebase.initializeApp(firebaseConfig)   
    // Initialize Firebase
username=localStorage.getItem("username")
document.getElementById("username").innerHTML="Welcome"+username

function addroom(){
room_name=document.getElementById("roomname").value 
firebase.database().ref("/").child(room_name).update({
      purpose:"addingroomname"
})
localStorage.setItem("room_name", room_name)
window.location="kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML +=row
      //End code
      });});}
getData();
function redirecttoroomname(name){
localStorage.setItem("room_name", name)
 window.location="kwitter_page.html" 
}
function logout(){
      window.location="index.html"
      localStorage.removeItem("username")
      localStorage.removeItem("room_name")
     }
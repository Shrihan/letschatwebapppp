//YOUR FIREBASE LINKS
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
room_name=localStorage.getItem("room_name")
function send(){
      msg=document.getElementById("message").value
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            like:0
      })
      document.getElementById("message").value=""
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
      name=message_data["name"]
      message=message_data["message"]
      like=message_data["like"]
      namewithtag="<h4>"+name+"<img src= 'tick.png' class='user_tick'> </h4>"
      messagewithtag="<h4 class='message_h4'>"+message+" </h4>"
likebutton= "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>"
spanwithtag="<span class='glyphicon glyphicon-thumbs-up'> like: "+like+"</span></button><hr>"
row=namewithtag+messagewithtag+likebutton+spanwithtag
document.getElementById("output").innerHTML+=row
   } });  }); }
getData();
function updatelike(message_id){
button_id=message_id;
likes=document.getElementById(button_id).value;
updatedlike=Number(likes) +1;
firebase.database().ref(room_name).child(message_id).update({
      like:updatedlike
})
}
function logout(){
 window.location="index.html"
 localStorage.removeItem("username")
 localStorage.removeItem("room_name")
}
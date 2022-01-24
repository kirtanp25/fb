const firebaseConfig = {
    apiKey: "AIzaSyDo2nGhOGDGBO6bsC38skQeMPd1pAxssOA",
    authDomain: "kwitter-a07e1.firebaseapp.com",
    databaseURL: "https://kwitter-a07e1-default-rtdb.firebaseio.com",
    projectId: "kwitter-a07e1",
    storageBucket: "kwitter-a07e1.appspot.com",
    messagingSenderId: "403085686442",
    appId: "1:403085686442:web:68a9d42ffbe992e0adc2d3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        kirtan : "smartboy"
    });
}
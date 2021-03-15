var firebaseConfig = {
  apiKey: "AIzaSyAAjiFvlyfJjrQWfz6fErKVh6pOmdWIf2Y",
  authDomain: "hociot-30d4a.firebaseapp.com",
  databaseURL: "https://hociot-30d4a-default-rtdb.firebaseio.com",
  projectId: "hociot-30d4a",
  storageBucket: "hociot-30d4a.appspot.com",
  messagingSenderId: "386642949061",
  appId: "1:386642949061:web:135f0b869d71bbaa0751ac",
  measurementId: "G-NZJLD0XN8W"
};
// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 var rootRef = firebase.database().ref();
  const auth = firebase.auth();
  
  function  signIn(){
    var gmail= document.getElementById("user");
    var pass = document.getElementById("pass");
    const login =auth.signInWithEmailAndPassword(gmail.value, pass.value);
     
    // login.catch(e => alert(e.message))
    login.catch(e=> document.getElementById('qmk').innerHTML = e.message)
    
   login.then(function (_result) {
     window.location.replace('home.html');
   })
 
  }


  
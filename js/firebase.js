// <!-- The core Firebase JS SDK is always required and must be listed first -->
{/* <script src="https://www.gstatic.com/firebasejs/7.5.2/firebase-app.js"></script> */}

// TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries 

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBonzlfyNmyVArSKjsAdiz0dHhemKmH3u0",
    authDomain: "instalaciones-b4c4a.firebaseapp.com",
    databaseURL: "https://instalaciones-b4c4a.firebaseio.com",
    projectId: "instalaciones-b4c4a",
    storageBucket: "instalaciones-b4c4a.appspot.com",
    messagingSenderId: "1027320715774",
    appId: "1:1027320715774:web:d7630ca679c9f5e034c8af"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();


  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log(user)
      if(location.pathname == '/views/view1.html'){
        location.pathname = '/views/proximos.html'
      }
    } else {
      // No user is signed in.
      if(location.pathname != '/views/view1.html'){
        location.pathname = '/views/view1.html'
      }
    }
  });

const signup = document.getElementById('salir')

signup.addEventListener('click', () =>{
  firebase.auth().signOut().then(function() {
    console.log('usuario borrado')
  }).catch(function(error) {
    console.log(error)
  });
})

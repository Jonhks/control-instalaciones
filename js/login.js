const btnLogin = document.getElementById('btn-login')



btnLogin.addEventListener('click', () => {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
      alert('correo o contraseña invalidos, reintente! ')
      // ...
  });
})



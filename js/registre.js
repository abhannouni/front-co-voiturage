// var login = document.getElementById('login');
// var signUp = document.getElementById('sign-up');


// function showLogin() {
//     login.style.display = "block";
//     signUp.style.display = "none";

// }

// function showsignUp() {
//     login.style.display = "none";
//     signUp.style.display = "block";


// }


var login = document.getElementById('login');
var signUp = document.getElementById('sign-up');

function animateLogin() {
  var opacity = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (opacity >= 1) {
      clearInterval(id);
    } else {
      opacity += 0.1;
      login.style.opacity = opacity;
      signUp.style.opacity = 1 - opacity;
    }
  }
}

function animateSignUp() {
  var opacity = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (opacity >= 1) {
      clearInterval(id);
    } else {
      opacity += 0.1;
      signUp.style.opacity = opacity;
      login.style.opacity = 1 - opacity;
    }
  }
}

function showLogin() {
    animateLogin();
    setTimeout(function(){login.style.display = "block";
    signUp.style.display = "none"; }, 150);
    
}

function showsignUp() {
    animateSignUp();
    setTimeout(function(){login.style.display = "none";
    signUp.style.display = "block"; }, 150);
}



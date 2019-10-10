// Declarations

let passwordText
let passwordToggle;

// Change Markup

const changeType = function() {
  if(passwordToggle.checked == true){
    passwordText.type = "password";
  }
  else {
    passwordText.type = "text";
  }
}

// Eventlisteners

const listenToCheckbox = function() {
  passwordToggle.addEventListener('input', function() {
    passwordToggle = document.querySelector('.js-password-toggle');
    changeType();
  });
};

// Start function

const init = function() {
  passwordText = document.querySelector('.js-password-text');
  passwordToggle = document.querySelector('.js-password-toggle');
  listenToCheckbox();
};

// Execute when the page is fully loaded

document.addEventListener('DOMContentLoaded', function() {
  console.info('DOM geladen');
  init();
});

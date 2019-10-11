// Declarations

let passwordText;
let passwordToggle;

let email = {};
let password = {};
let signInButton;

// DOM Elements

const getDOMElements = function(){

  passwordText = document.querySelector('.js-password');
  passwordToggle = document.querySelector('.js-password-toggle');
  email = document.querySelector('.js-email');
  password = document.querySelector('.js-password');
  signInButton = document.querySelector('.js-sign-in-button');

}

// Change Markup

const changeType = function() {
  if (passwordToggle.checked == true) {
    passwordText.type = 'password';
  } else {
    passwordText.type = 'text';
  }
};

// Eventlisteners

const listenToCheckbox = function() {
  passwordToggle.addEventListener('input', function() {
    passwordToggle = document.querySelector('.js-password-toggle');
    changeType();
  });
};

// Validation

const validate = function() {
  isValidEmail();
  isValidPassword();
  return false;
}

const isValidEmail = function(){
  // Basis manier om e-mailadres te checken.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
}

const isValidPassword = function() {

}

// Start function

const init = function() {
  getDOMElements();
  listenToCheckbox();
};

// Execute when the page is fully loaded

document.addEventListener('DOMContentLoaded', function() {
  console.info('DOM geladen');
  init();
});

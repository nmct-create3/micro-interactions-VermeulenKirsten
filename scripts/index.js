let labelType;
let passwordToggle;

// Show items

const changeType = function() {
  if (labelType.type == 'password') {
    labelType.type = 'text';
  } else {
    labelType.type = 'password';
  }
};

// Eventlisteners

const listenToCheckbox = function() {
  passwordToggle.addEventListener('input', function() {
    labelType = document.querySelector('.js-password');
    changeType();
  });
};

const init = function() {
  passwordToggle = document.querySelector('.js-password-label');
  listenToCheckbox();
};

document.addEventListener('DOMContentLoaded', function() {
  console.info('DOM geladen');
  init();
});

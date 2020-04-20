const SIGNUP_BUTTON = document.getElementById('signUp');
const SIGNIN_BUTTON = document.getElementById('signIn');
const RIGHT = document.getElementById('right');

SIGNUP_BUTTON.addEventListener('click', () => {
    RIGHT.classList.add('right-panel-active');
});

SIGNIN_BUTTON.addEventListener('click', () => {
    RIGHT.classList.remove('right-panel-active');
});

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const right = document.getElementById('right');

signUpButton.addEventListener('click', () => {
    right.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    right.classList.remove('right-panel-active');
});

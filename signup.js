document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');
    const errorMessage = document.getElementById('error-message');

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const number = document.getElementById('number').value;
        const username = document.getElementById('username').value;
        const confirmation = document.getElementById('confirm password').value;
        if(password === confirmation){
            errorMessage.textContent = 'Signup successful!';
            errorMessage.style.color = 'green';
        }
        else{
            errorMessage.textContent = 'check password'
            errorMessage.style.color = 'red'
        }
    });
});

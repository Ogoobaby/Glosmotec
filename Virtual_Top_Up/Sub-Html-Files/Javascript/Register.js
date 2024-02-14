document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values from the form fields
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    // Perform registration authentication
    if (username === 'Gloria' && email === 'gloria@gmail.com' && password === 'Gloria' && confirmPassword === 'Gloria') {
        alert('Registration successful! Welcome, Gloria.');
        // Redirect the user to another page if needed
        window.location.href = 'Purchase.html';
    } else {
        alert('Invalid registration details. Please make sure you enter the correct information.');
    }
});

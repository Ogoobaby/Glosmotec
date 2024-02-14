document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values from the form fields
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform login authentication
    if (username === 'Gloria' && password === 'Gloria') {
        alert('Login successful! Welcome, Gloria.');
        // Redirect the user to another page if needed
        {
        // Redirect to the specified link
        window.location.href = 'Purchase.html';
    }
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
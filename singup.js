document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Basic validation logic
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        alert('Account created successfully!');
        // Here you would typically send data to the server
    } else {
        alert('Please fill out all fields.');
    }
});

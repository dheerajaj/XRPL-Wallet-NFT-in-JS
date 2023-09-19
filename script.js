// Add an event listener to the login form
document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    try {
        const response = await fetch('/login', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            // Redirect to the dashboard page on successful login
            window.location.href = 'Dashboard.html';
        } else {
            alert('Login failed. Please check your credentials.');
        }
    } catch (error) {
        console.error('An error occurred:', error);
        alert('An error occurred. Please try again later.');
    }
});

function logout() {
    fetch('/logout')
        .then(response => {
            if (response.ok) {
                window.location.href = 'login.html';
            } else {
                console.log('Logout failed.');
            }
        })
        .catch(error => {
            console.error('An error occurred during logout:', error);
            alert('An error occurred during logout. Please try again.');
        });
}

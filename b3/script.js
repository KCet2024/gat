// function validateLogin() {
//     // Fetching data from JSON file (replace with your actual JSON file path)
//     fetch('users.json')
//         .then(response => response.json())
//         .then(users => {
//             const username = document.getElementById('username').value;
//             const password = document.getElementById('password').value;

//             // Check if user credentials are valid
//             const isValidUser = users.some(user => user.username === username && user.password === password);

//             if (isValidUser) {
//                 // Redirect to dashboard (replace 'dashboard.html' with your actual dashboard page)
//                 window.location.href = 'dashboard.html';
//             } else {
//                 alert('Invalid username or password');
//             }
//         })
//         .catch(error => console.error('Error fetching data:', error));
//         document.getElementById('loginButton').click();
// }
// document.getElementById('password').addEventListener('keyup', function(event) {
//     if (event.key === 'Enter') {
//         validateLogin();
//     }
// });

function validateLogin() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Fetch user data from JSON file (replace with your actual JSON file path)
    fetch('users.json')
        .then(response => response.json())
        .then(users => {
            // Check if the entered credentials match any user in the data
            const loggedInUser = users.find(user => user.username === usernameInput && user.password === passwordInput);

            if (loggedInUser) {
                // Redirect to the dashboard page with the user's ID as a query parameter
                window.location.href = `dashboard.html?userId=${loggedInUser.id}`;
            } else {
                alert('Invalid username or password');
            }
        })
        .catch(error => console.error('Error fetching user data:', error));
}

// Handle Enter key press to trigger login
document.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        validateLogin();
    }
});

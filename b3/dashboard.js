// Fetching data from JSON file (replace with your actual JSON file path)
fetch('users.json')
.then(response => response.json())
.then(users => {
    // Extract user parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const loggedInUserId = urlParams.get('userId');

    // Find the logged-in user based on the extracted userId
    const loggedInUser = users.find(user => user.id === loggedInUserId);

    // If there is a logged-in user, display their details
    if (loggedInUser) {
        const userDataContainer = document.getElementById('userData');
        userDataContainer.innerHTML = `
            <h2> ${loggedInUser.name}, Welcome to Your Dashboard</h2>
            <p><strong>USN:</strong> ${loggedInUser.username}</p>
            <p><strong>Department:</strong> ${loggedInUser.dept}</p>
            <p><strong>Email:</strong> ${loggedInUser.email}</p>
            <p class="card-text"><strong>FeedBack Form Link: </strong>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScKxwGKh6_nFnkQFqsHJD4hK1kL3JtjPztMAIO0bFbAo3hvNw/viewform?usp=pp_url&entry.1646666979=${loggedInUser.username}&entry.35432092=${loggedInUser.name}&entry.402664451=${loggedInUser.email}" class="text-cc1" target="_Blank">Click Here To Fill the FeedBack Form</a>
            </p>
            <p><a href="events.html" class="text-cc1">Click Here To See Upcoming Events</a></p>
            <br><br><br><br><br><br><br><br><br><br>
        `;
    } else {
        // If there is no logged-in user or invalid userId, redirect to the login page
        window.location.href = 'index.html';
    }
})
.catch(error => console.error('Error fetching data:', error));

function logout() {
    // Implement your logout logic here
    // For simplicity, we'll just redirect to the login page
    window.location.href = 'index.html';
}

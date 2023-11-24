// Fetching data from JSON file (replace with your actual JSON file path)
fetch('users.json')
    .then(response => response.json())
    .then(users => {
        // Display user details in the admin dashboard
        const userListContainer = document.getElementById('userList');
        userListContainer.innerHTML = '<h3>User List:</h3>';

        users.forEach(user => {
            userListContainer.innerHTML += `
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${user.name}</h5>
                        <p class="card-text"><strong>Email:</strong> ${user.email}</p>
                    </div>
                </div>
            `;
        });
    })
    .catch(error => console.error('Error fetching data:', error));

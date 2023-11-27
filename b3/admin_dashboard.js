// Fetching data from JSON file (replace with your actual JSON file path)
fetch('users.json')
    .then(response => response.json())
    .then(users => {
        // Display user details in the admin dashboard
        const userListContainer = document.getElementById('userList');
        userListContainer.innerHTML = '<h3><b>Enrolled Students:</b></h3><br>';

        users.forEach(user => {
            userListContainer.innerHTML += `
                <div class="card mb-1">
                    <div class="card-body">
                        <p class="card-title">${user.name} (${user.id})</p>
                    </div>
                </div>
            `;
        });
    })
    .catch(error => console.error('Error fetching data:', error));

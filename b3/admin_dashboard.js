// admin_dashboard.js - Admin Dashboard script

// Fetch user data from JSON file (replace with your actual JSON file path)
fetch('users.json')
    .then(response => response.json())
    .then(users => {
        // Populate the User Table
        const userTableBody = document.getElementById('userTableBody');
        users.forEach(user => {
            userTableBody.innerHTML += `
                <tr>
                    <td>${user.username}</td>
                    <td>${user.name}</td>
                    <td>${user.dept}</td>
                </tr>
            `;
        });
    })
    .catch(error => console.error('Error fetching user data:', error));

fetch('users.json')
    .then(response => response.json())
    .then(users => {
        // Populate the User Table
        const clubMembers = document.getElementById('clubMembers');
        users.forEach(user => {
            clubMembers.innerHTML += `
                <tr>
                    <td scope="row">${user.name}</td>
                    <td scope="row">${user.dept}</td>
                </tr>
            `;
        });
    })
    .catch(error => console.error('Error fetching user data:', error));

// Fetch events data from JSON file (replace with your actual JSON file path)
fetch('events.json')
    .then(response => response.json())
    .then(events => {
        // Populate the Event Table
        const eventTableBody = document.getElementById('eventTableBody');
        events.forEach(event => {
            eventTableBody.innerHTML += `
                <tr>
                    <td>${event.code}</td>
                    <td>${event.title}</td>
                    <td>${event.date}</td>
                    <td><a href="${event.brocher}" target="_Blank">Click Here To See</a></td>
                    <td><a href="${event.ppt}" target="_Blank">Click Here To See</a></td>
                </tr>
            `;
        });
    })
    .catch(error => console.error('Error fetching events data:', error));


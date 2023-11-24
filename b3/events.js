// Fetching data from JSON file (replace with your actual JSON file path)
fetch('users.json')
    .then(response => response.json())
    .then(users => {
        // Assuming the first user is the logged-in user (replace with your authentication logic)
        const loggedInUser = users[0];

        // Display user details in the dashboard
        const userDataContainer = document.getElementById('eventsData');
        userDataContainer.innerHTML = `
            <br>
            <div id="eventList"></div>
        `;
    })
    .catch(error => console.error('Error fetching data:', error));

    function logout() {
        // Implement your logout logic here
        // For simplicity, we'll just redirect to the login page
        window.location.href = 'index.html';
    }

// Fetching events data from a hypothetical events.json file (replace with your actual events data path)
fetch('events.json')
    .then(response => response.json())
    .then(events => {
        // Display events in the Events page
        const eventListContainer = document.getElementById('eventList');
        
        if (events.length === 0) {
            eventListContainer.innerHTML = '<p>No events available.</p>';
        } else {
            eventListContainer.innerHTML = '<h2>Upcoming Event</h2>';
            
            events.forEach(event => {
                eventListContainer.innerHTML += `
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">${event.title}</h5><br>
                            <p class="card-text"><strong>Session Code:</strong> ${event.code}</p>
                            <p class="card-text"><strong>Date:</strong> ${event.date}</p>
                            <p class="card-text"><strong>Google Meet Link: </strong><a id="conditionalLink" href="#" onclick="checkDateTime()">Click Here To Join For Google Meet</a></p>
                            <p class="card-text"><strong>OverView Of The Session: </strong><a href="${event.brocher}" target="_Blank">Click Here To See</a></p>
                            <p class="card-text"><strong>PPT Of The Session: </strong><a href="${event.ppt}" target="_Blank">Click Here To See</a></p>
                            </div>
                    </div>
                `;
            });
        }
    })
    .catch(error => console.error('Error fetching events data:', error));
    
    function checkDateTime() {
        const currentDate = new Date();
        const startDate = new Date("2023-11-29T13:45:00"); // December 1, 2023, 8:00 AM
        const endDate = new Date("2023-11-29T16:45:00");   // December 10, 2023, 6:00 PM

        if (currentDate >= startDate && currentDate <= endDate) {
            // Allow the link to be opened
            window.open("https://meet.google.com/", "_blank"); // Replace with your actual link
        } else {
            alert("The link is only available between 29 Nov, 2023, 1:45 PM to 4:45 PM.");
        }
    }
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
            eventListContainer.innerHTML = '<h2 class="text-white"><b>Upcoming Event</b></h2>';
            
            events.forEach(event => {
                eventListContainer.innerHTML += `
                    <div class="card mb-3">
                        <div class="card-body">
                            <h6 class="card-title">${event.title}</h6><br>
                            <p class="card-text"><strong>Session Code:</strong> ${event.code}</p>
                            <p class="card-text"><strong>Date:</strong> ${event.date}</p>
                            <p class="card-text"><strong>Session Lead By: ${event.host}</strong></p>
                            <p class="card-text"><strong>Google Meet Link: </strong><a id="conditionalLink" href="" onclick="checkDateTime()">Click Here To Join For Google Meet</a></p>
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
        const startDate = new Date("2023-12-23T18:15:00");
        const endDate = new Date("2023-12-23T20:45:00");   

        if (currentDate >= startDate && currentDate <= endDate) {
            window.open("https://meet.google.com/uuf-xufw-cnx", "_blank");
        } else {
            alert("The link is only available on 23/Dec/2023 (Saturday) between 06:15 PM to 08:45 PM.");
        }
    }
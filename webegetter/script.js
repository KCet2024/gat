function validateLogin() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    fetch('users.json')
        .then(response => response.json())
        .then(users => {
            const loggedInUser = users.find(user => user.username === usernameInput  && user.password === passwordInput);
            if (loggedInUser) {
                window.location.href = `dashboard.html?userId=${loggedInUser.id}`;
            } else {
                alert('Invalid username or password');
            }
        })
        .catch(error => console.error('Error fetching user data:', error));
}
document.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        validateLogin();
    }
});

fetch('users.json')
    .then(response => response.json())
    .then(users => {
        const urlParams = new URLSearchParams(window.location.search);
        const loggedInUserId = urlParams.get('userId');
        const loggedInUser = users.find(user => user.id === loggedInUserId);
        if (loggedInUser) {
            const userDataContainer = document.getElementById('userData');
            userDataContainer.innerHTML = `
            <br><br>
            <h3> ${loggedInUser.name}, Welcome to Your Dashboard</h3><br>
           
            <p><strong>USN:</strong> ${loggedInUser.username}</p>
            <p><strong>Department:</strong> ${loggedInUser.dept}</p>
            <p><strong>Email:</strong> ${loggedInUser.email}</p>
            <p><strong>Great Learning Website Link :</strong>
                <a href="https://gat.openinapp.co/GreatLearning" class="text-cc1" target="_blank">Click Here To Great Learning Website Link</a>
            </p>
            <p><strong>Great Learning Course Link :</strong>
                <a href="https://gat.openinapp.link/GreatLearningCertificate" class="text-cc1" target="_blank">Click Here To Great Learning Course Link</a>
            </p>
            <p class="card-text"><strong>FeedBack Form Link: </strong>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScnmYw4hxpmrONFg7KI0bXKNiqWBgpvoc4PJdHiy4_1S0USZg/viewform?usp=pp_url&entry.1646666979=${loggedInUser.username}&entry.35432092=${loggedInUser.name}&entry.402664451=${loggedInUser.email}" class="text-cc1" target="_Blank">Click Here To Fill the FeedBack Form</a>
            </p>
            <p class="card-text"><strong>Google Meet Link: </strong>
                <a class="text-cc1" id="conditionalLink" href="" onclick="checkDateTime()">Click Here To Join For Google Meet</a>
            </p>
            <!--<p><a href="events.html" class="text-cc1">Click Here To See Upcoming Events</a></p>-->
            <br><br><br><br><br><br><br><br><br><br>

        `;
        } else {
            window.location.href = 'index.html';
        }
    })
    .catch(error => console.error('Error fetching data:', error));

function logout() {
    window.location.href = 'index.html';
}

function checkDateTime() {
    const currentDate = new Date();
    const startDate = new Date("2024-01-15T15:45:00");
    const endDate = new Date("2024-01-15T17:15:00");

    if (currentDate >= startDate && currentDate <= endDate) {
        window.open("https://meet.google.com/uuf-xufw-cnx", "_blank");
    } else {
        alert("The link is only available on 15/JAN/2024 (Monday) between 15:45 PM to 17:15 PM.");
    }
}
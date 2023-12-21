fetch('b3s1.json')
    .then(response => response.json())
    .then(events => {
        // Populate the Event Table
        const eventTableBody = document.getElementById('formTableBody');
        events.forEach(event => {
            eventTableBody.innerHTML += `
                <tr>
                    <td>${event.USN}</td>
                    <td>${event.Name}</td>
                    <td>${event.b3s1q1}</td>
                    <td>${event.b3s1q2}</td>
                    <td>${event.b3s1q3}</td>
                </tr>
            `;
        });
    })
    .catch(error => console.error('Error fetching events data:', error));


fetch('b3s2.json')
    .then(response => response.json())
    .then(events => {
        // Populate the Event Table
        const eventTableBody = document.getElementById('form2TableBody');
        events.forEach(event => {
            eventTableBody.innerHTML += `
                <tr>
                    <td>${event.USN}</td>
                    <td>${event.Name}</td>
                    <td>${event.b3s2q1}</td>
                    <td>${event.b3s2q2}</td>
                    <td>${event.b3s2q3}</td>
                </tr>
            `;
        });
    })
    .catch(error => console.error('Error fetching events data:', error));

fetch('ccs3.json')
    .then(response => response.json())
    .then(events => {
        // Populate the Event Table
        const eventTableBody = document.getElementById('form3TableBody');
        events.forEach(event => {
            eventTableBody.innerHTML += `
                <tr>
                    <td>${event.USN}</td>
                    <td>${event.Name}</td>
                    <td>${event.ccs3q1}</td>
                    <td>${event.ccs3q2}</td>
                    <td>${event.ccs3q3}</td>
                </tr>
            `;
        });
    })
    .catch(error => console.error('Error fetching events data:', error));

fetch('ccs4.json')
    .then(response => response.json())
    .then(events => {
        // Populate the Event Table
        const eventTableBody = document.getElementById('form4TableBody');
        events.forEach(event => {
            eventTableBody.innerHTML += `
                <tr>
                    <td>${event.usn}</td>
                    <td>${event.name}</td>
                    <td>${event.ccs4q1}</td>
                    <td>${event.ccs4q2}</td>
                    <td>${event.ccs4q3}</td>
                </tr>
            `;
        });
    })
    .catch(error => console.error('Error fetching events data:', error));
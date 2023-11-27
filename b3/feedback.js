// Function to fetch JSON data from the file
function fetchJSONData(callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET", "b3s1.json", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        callback(JSON.parse(xhr.responseText));
      }
    };
    xhr.send(null);
  }
  
  // Function to populate the table with JSON data
  function populateTable(data) {
    var tableBody = document.getElementById('table-body');
  
    // Clear existing table rows
    tableBody.innerHTML = '';
  
    // Loop through the JSON data and create table rows
    for (var i = 0; i < data.length; i++) {
      var row = `<tr>
                    <td>${data[i].USN}</td>
                    <td>${data[i].Name}</td>
                    <td>${data[i].b3s1q1}</td>
                    <td>${data[i].b3s1q2}</td>
                    <td>${data[i].b3s1q3}</td>
                </tr>`;
      tableBody.innerHTML += row;
    }
  }
  
  // Call the function to fetch JSON data and populate the table
  fetchJSONData(populateTable);
  
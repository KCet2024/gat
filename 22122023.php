<?php
// Connect to the database
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "login_sample_db";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch data from the database
$sql = "SELECT * FROM login_sample_db";
$result = $conn->query($sql);

// Close the connection
$conn->close();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Data Display</title>
</head>
<body>

<?php
// Display data in an HTML table
echo "<table border='1'>
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
</tr>";

while ($row = $result->fetch_assoc()) {
    echo "<tr>";
    echo "<td>" . $row['id'] . "</td>";
    echo "<td>" . $row['name'] . "</td>";
    echo "<td>" . $row['email'] . "</td>";
    echo "</tr>";
}

echo "</table>";
?>

</body>
</html>

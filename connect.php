<?php
$servername = "registration"; // or your database server
$username = "your_username"; // replace with your database username
$password = "your_password"; // replace with your database password
$dbname = "your_database"; // replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['firstName'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    // Validate input
    if (!empty($firstName) && !empty($email) && !empty($password)) {
        // Hash the password before saving it
        $passwordHash = password_hash($password, PASSWORD_BCRYPT);
        
        // Insert data into the registration table
        $sql = "INSERT INTO registration (firstName, email, password) VALUES ('$firstName', '$email', '$passwordHash')";
        
        if ($conn->query($sql) === TRUE) {
            echo json_encode(["status" => "success", "message" => "New record created successfully"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Error: " . $sql . "<br>" . $conn->error]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "All fields are required!"]);
    }
}

$conn->close();
?>

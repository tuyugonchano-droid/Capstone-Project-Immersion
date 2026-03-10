<?php

$conn = new mysqli("localhost", "root", "", "immersionhub");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $email = $_POST['email'];
    $password = $_POST['password'];
    $companyname = $_POST['companyname'];
    $companyloc = $_POST['companyloc'];
    $supervisorname = $_POST['supervisorname'];
    $contactnumber = $_POST['contactnumber'];
    $companyemail = $_POST['companyemail'];
    $course = $_POST['course'];

    $sql = "INSERT INTO companies 
    (email, password, companyname, companyloc, supervisorname, contactnumber, companyemail, course)
    VALUES ('$email', '$password', '$companyname', '$companyloc', '$supervisorname', '$contactnumber', '$companyemail', '$course')";

    if ($conn->query($sql) === TRUE) {
        echo "success";
    } else {
        echo "error: " . $conn->error;
    }
}

$conn->close();

?>
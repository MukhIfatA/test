<?php
// Include your database connection logic here
include "config.php";

// Assuming you have a table named 'your_table' with columns 'id', 'name', and 'email'
$sql = "SELECT * FROM userinfo";
$result = mysqli_query($con, $sql);

$data = array();

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

// Encode the data as JSON and send it to the front end
echo json_encode($data);
?>
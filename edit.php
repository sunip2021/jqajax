<?php
include 'dbconnection.php';
//when you click edit button below code get executed
$data = stripslashes(file_get_contents("php://input"));
$mydata = json_decode($data, true);
$id = $mydata['sid'];
//retrive specific student information
$sql="SELECT * FROM student WHERE id={$id}";
$result=$conn->query(($sql));
$row=$result->fetch_assoc();
//returning json format data as response to ajax call
echo json_encode($row);

?>
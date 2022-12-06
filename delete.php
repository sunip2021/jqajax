<?php
include('dbconnection.php');
$data=stripslashes(file_get_contents("php://input"));
$mydata=json_decode($data,true);
$id=$mydata['sid'];
//deleting student
if(!empty($id)){
    $sql="DELETE FROM student WHERE id={$id}";
    if($conn->query($sql)==TRUE)
    {
        echo "student delete successfully";
    }
    else{
        echo "Unable to delete students";
    }

}else{
    echo "Fill All Fields";
}


?>
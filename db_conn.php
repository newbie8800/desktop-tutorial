<?php  


// the purpose of this is to connect the form to database  -- basically this is the default of the xampp db
$sname = "localhost";
$uname = "root";
$password = "";

// $db_name = "myinfo"; // name of database
$db_name = "myinfo2";


$conn = mysqli_connect($sname, $uname, $password, $db_name);


// if connection failed 
if (!$conn) {
	// it will show this message
	echo "Connection failed!";
	exit();
}
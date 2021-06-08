<?php  


if (isset($_POST['fname']) && isset($_POST['lname'])) {
	include 'db_conn.php';

	function validate($data){
       $data = trim($data);
	   $data = stripslashes($data);
	   $data = htmlspecialchars($data);
	   return $data;
	}

	$fname = validate($_POST['fname']);
	$lname = validate($_POST['lname']);
    $add = validate($_POST['address']);
	$contact = validate($_POST['contact']);
// new
$textarea = validate($_POST['textarea']);


	if (empty($fname) || empty($lname)) {
		header("Location: index.html");
	}else {

		$sql = "INSERT INTO test(firstName, lastName, address, contact, textarea ) VALUES('$fname', '$lname', '$add', '$contact', '$textarea')";
		$res = mysqli_query($conn, $sql);

		if ($res) {
			
					echo "Your message was sent successfully!";
	
			echo "Your message was sent successfully!";
		}else {
			echo "Your message could not be sent!";
		}
	}

}else {
	header("Location: index.html");
}
<?php
$conn= mysqli_connect("localhost","root","");

if(mysqli_connect_error())
{
 die("connection failed:".mysqli_connect_error());
}
else
{
    $db_select = mysqli_select_db($conn,"urbanwish");
    if (!$db_select) 
    {
        die("Database selection failed: " . mysqli_error($connection));
    }

    $fname = $_POST['name'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $sql= "INSERT INTO laststep VALUES('$fname' , '$phone','$message')";

    if(mysqli_query($conn, $sql))
    {
        echo "Records inserted successfully.";
    } 
    else
    {
        echo "ERROR: Could not able to execute $sql. ";
    }
}
 mysqli_close($conn);

?>
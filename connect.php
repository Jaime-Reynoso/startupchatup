<?php
$dbhost = 'localhost';
$dbname = 'startup';
$dbuser = 'root';
$dbpass = 'secret';
 
try {
    $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
    echo "Connected to database"; // check for connection
    }
catch(PDOException $e)
    {
    echo $e->getMessage();
    }
?>
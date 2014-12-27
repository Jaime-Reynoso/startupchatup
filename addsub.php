<?php

public function addSubscriber($conn, $email)
{
	$query = "INSERT INTO subscribers (email) VALUES ($email)";
	$conn->query($query);
}
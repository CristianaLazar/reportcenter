<?php
// config
include_once '../config/core.php';

// database connection
include_once '../config/database_users.php';

// product object ( report )
include_once '../objects/user.php';

// class instance
$database = new Database_users();
$db = $database->getConnection();
$user = new User($db);

// read one user's credentials
$user->id = $_POST['member_id'];
$results = $user->readOne();

// output in json format
echo $results;
?>
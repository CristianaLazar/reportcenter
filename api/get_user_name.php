<?php

include_once '../includes/db_connect.php';
include_once '../includes/functions.php';

sec_session_start();

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

// get user's name by user_id
$results = $user->getUserName($_SESSION['user_id']);

// output in json format
echo $results;

?>
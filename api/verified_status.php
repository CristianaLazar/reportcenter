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

// get verified value ( 1 or 0 )
$results = $user->getVerifiedStatus($_SESSION['user_id']);

// output in json format
echo $results;

?>
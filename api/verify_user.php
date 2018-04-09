<?php
// checks if form was submitted
if ($_POST) {

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

    // id of the user we are to verify
    $ins = $_POST['del_ids'];

    // verify the user
    echo $user->verify($ins) ? "true" : "false";
}
?>
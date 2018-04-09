<?php
// checks if form was submitted
if ($_POST) {

    // config
    include_once '../config/core.php';

    // database connection
    include_once '../config/database.php';

    // product object ( report )
    include_once '../objects/product.php';

    // class instance
    $database = new Database();
    $db = $database->getConnection();
    $product = new Product($db);

    // we retrieve the id of the report we are going to update to visibility 0
    $ins = $_POST['del_ids'];

    // update the product's visibility to 0 meaning it can't be seen by regular users
    echo $product->delete($ins) ? "true" : "false";
}
?>
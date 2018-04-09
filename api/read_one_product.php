<?php
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

// read one product ( report )
$product->id = $_POST['prod_id'];
$results = $product->readOne();

// output in json format
echo $results;
?>
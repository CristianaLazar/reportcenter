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

    // set product property values ( report )
    $product->name = $_POST['name'];
    $product->description = $_POST['description'];
    $product->offenseid = $_POST['offenseid'];
    $product->date = $_POST['date'];
    $product->adress = $_POST['adress'];
    $product->cnp = $_POST['cnp'];
    $product->serie = $_POST['serie'];
    $product->number = $_POST['number'];

    // create the product ( report )
    echo $product->create() ? "true" : "false";
}
?>
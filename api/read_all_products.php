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

// read all products ( reports )

    $results = $product->readAll();

// output in json format
    echo $results;

?>
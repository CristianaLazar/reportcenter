<?php
// config
include_once '../config/core.php';

// database connection
include_once '../config/database.php';

// product object ( report )
include_once '../objects/category.php';

// class instance
$database = new Database();
$db = $database->getConnection();
$category = new Category($db);

// read all categories
$results = $category->readAll();

// output in json format
echo $results;
?>
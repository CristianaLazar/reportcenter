<?php

class Category
{

    // table name is offense
    private $conn;

    // category properties
    public $id;
    public $name;
    public $urgency;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function readAll()
    {
        $query = "SELECT id, name, urgency FROM offense ORDER BY id";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        $categories = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($categories);
    }

}

?>
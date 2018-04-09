<?php

// database class for retrieving verified status
class Database_users
{
    //set your database credentials
    private $host = "localhost";
    private $db_name = "empower_members_db";
    private $username = "root";
    private $password = "";
    public $conn;

    //connect to the database
    public function getConnection()
    {

        $this->conn = null;

        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
        } catch (PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }

        return $this->conn;
    }
}

?>

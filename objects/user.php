<?php

// class used to check if he is verified
// only verified users can see the reports
class User {
    private $conn;

    public $id;
    public $verified;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    // function used to retrieve the value of the field verified from the table members
    public function getVerifiedStatus($id) {
        $query = "SELECT m.verified FROM members m WHERE m.id=:id";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(':id', $id);

        $stmt->execute();

        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($results);
    }

    //function used to retrieve the name of the logged in user
    public function getUserName($id){
        $query = "SELECT m.name FROM members m WHERE m.id=:id";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(':id', $id);

        $stmt->execute();

        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($results);
    }

    // function used to retrieve the value of the field admin from the table members ( checks if you are admin or not )
    public function getAdminStatus($id) {
        $query = "SELECT m.admin FROM members m WHERE m.id=:id";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(':id', $id);

        $stmt->execute();

        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($results);
    }

    // function used to retrieve all users from the database that are unverified
    public function readAll(){
        $query = "SELECT m.id, m.username, m.email, m.name, m.cnp, m.serie, m.number, m.workplace_info, m.verified
                FROM members m WHERE m.verified = 0
                     ORDER BY id DESC ";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($results);
    }

    // function used to retrieve all the credentials of one user
    public function readOne(){
        $query = "SELECT m.id, m.username, m.email, m.name, m.cnp, m.serie, m.number, m.workplace_info
                FROM members m 
                WHERE m.id=:id";

        $stmt = $this->conn->prepare($query);

        $id = htmlspecialchars(strip_tags($this->id));
        $stmt->bindParam(':id', $id);
        $stmt->execute();

        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($results);
    }

    //function used to verify an user
    public function verify($ins){

        $query = "UPDATE members
                SET verified=:verified
                WHERE id=:ins";
        $stmt = $this->conn->prepare($query);

        // sanitize
        $ins = htmlspecialchars(strip_tags($ins));

        // bind the parameter
        $stmt->bindParam(':ins', $ins);

        $verified = 1;

        $stmt->bindParam(":verified",$verified);

        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }
}
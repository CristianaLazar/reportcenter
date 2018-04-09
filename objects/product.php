<?php

// class used to define reports
class Product
{
    private $conn;
    private $table_name = "reports";

    // product properties
    public $id;
    public $name;
    public $description;
    public $offenseid;
    public $date;
    public $adress;
    public $cnp;
    public $serie;
    public $number;
    public $visibility;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    //function used to create reports and add them to the database
    public function create()
    {
        try {
            $query = "INSERT INTO reports
                SET name=:name, description=:description, offenseid=:offenseid, date=:date, adress=:adress, cnp=:cnp, serie=:serie, number=:number, visibility=:visibility ";

            $stmt = $this->conn->prepare($query);

            $name = htmlspecialchars(strip_tags($this->name));
            $description = htmlspecialchars(strip_tags($this->description));
            $offenseid = htmlspecialchars(strip_tags($this->offenseid));
            $date = $this->date;
            $adress = htmlspecialchars(strip_tags($this->adress));
            $cnp = htmlspecialchars(strip_tags($this->cnp));
            $serie = htmlspecialchars(strip_tags($this->serie));
            $number = htmlspecialchars(strip_tags($this->number));
            $visibility = 1;

            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':description', $description);
            $stmt->bindParam(':offenseid', $offenseid);
            $stmt->bindParam(':date', $date);
            $stmt->bindParam(':adress', $adress);
            $stmt->bindParam(':cnp', $cnp);
            $stmt->bindParam(':serie', $serie);
            $stmt->bindParam(':number', $number);
            $stmt->bindParam(':visibility', $visibility);

            if ($stmt->execute()) {
                return true;
            } else {
                return false;
            }

        }
        catch (PDOException $exception) {
            die('ERROR: ' . $exception->getMessage());
        }
    }

    //function used to read all the reports from the database
    public function readAll()
    {
        $query = "SELECT r.id, r.name, r.description, r.offenseid, r.date, r.adress, r.cnp, r.serie, r.number, r.visibility, o.name AS offense_name
                FROM " . $this->table_name . " r LEFT JOIN offense o ON r.offenseid=o.id
                WHERE r.visibility = 1
                 ORDER BY id DESC ";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($results);
    }

    // function used to read one report and its details
    public function readOne()
    {

        $query = "SELECT r.id, r.name, r.description, r.offenseid, r.date, r.adress, r.cnp, r.serie, r.number, o.name AS offense_name
                FROM " . $this->table_name . " r LEFT JOIN offense o ON r.offenseid=o.id
                WHERE r.id=:id";

        $stmt = $this->conn->prepare($query);

        $id = htmlspecialchars(strip_tags($this->id));
        $stmt->bindParam(':id', $id);
        $stmt->execute();

        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($results);
    }

    // function used to set visibility to 0 to reports marked as SOLVED
    public function delete($ins)
    {

        $query = "UPDATE reports
                SET visibility=:visibility
                WHERE id=:ins";

        $stmt = $this->conn->prepare($query);

        // sanitize
        $ins = htmlspecialchars(strip_tags($ins));

        // bind the parameter
        $stmt->bindParam(':ins', $ins);

        $visibility = 0;

        $stmt->bindParam(":visibility",$visibility);

        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }
}


<?php
// variablen
class Model{
    private PDO $conn;
    public function __construct(Database $database)
    {
        $this->conn = $database->getConnection();
    }
    function showAll() {
        $sql = 'SELECT * FROM entry';
        $stmt = $this->conn->query($sql);
        $data = [];
        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $data[] = $row;
        }

        return ($data);

    }
    function write_entry() :object
    {
        if (isset($_POST['submit'])) {
            $book = new Entry();
            $book->title = $_POST['title'];
            $book->typ = $_POST['typ'];
            $book->amount = $_POST['amount'];
            $book->date = $_POST['date'];
        } else {
            echo "Fehler <br>";
        }
        // Database
        $data = [
            'title' => $book->title,
            'titletyp' => $book->typ,
            'amount' => $book->amount,
            'titledate' => $book->date
        ];
        $sql = 'INSERT INTO entry(title, titletyp, amount, titledate) VALUES(:title, :titletyp, :amount, :titledate)';
        $stmt = $this->conn->prepare($sql);
        $stmt->execute($data);
        return $book;
    }
}
?>
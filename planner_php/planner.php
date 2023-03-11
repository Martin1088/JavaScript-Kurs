<?php
// declare(strict_types=1); 
ini_set("display_errors", 1);
ini_set("display_startup_errors", 1);
error_reporting(E_ALL);
// autoloader 
spl_autoload_register(function($class){
    require __DIR__ . "/src/$class.php";
});

set_exception_handler("ErrorHandler::handleException");
// function check 
$database = new  Database("localhost", "3306", "book", "admin", "hRw1StRJyQTv");
$model = new Model($database);
if ($_POST['target'] == 'write_entry') {
    $book = $model->write_entry();
    echo json_encode($book);  
} elseif ($_POST['target'] == 'getAllEntry') {
    $all = $model->showAll();
    echo json_encode($all);
} elseif($_POST['target'] == 'balance') {
    $all = $model->showAll();
    $balance = 0;
    foreach ($all as $data) {
        
        if ($data["titletyp"] == "Einnahme") {
            $balance = $balance + $data["amount"];
        } elseif ($data["titletyp"] == "Ausgabe") {
            $balance = $balance - $data["amount"];
        }
        
        // echo json_encode($data["titletyp"]);
    }
    echo json_encode($balance);
}
/*
// Database
$database = new Database("localhost", "3306", "book", "admin", "hRw1StRJyQTv");
$conn = $database->getConnection();
$data = [
    'title' => $book->title,
    'titletyp' => $book->typ,
    'amount' => $book->amount,
    'titledate' => $book->date
];
$sql = 'INSERT INTO entry(title, titletyp, amount, titledate) VALUES(:title, :titletyp, :amount, :titledate)';
$stmt = $conn->prepare($sql);
$stmt->execute($data);
echo "Erfolg!";
*/
/* foreach($booking as $e) {
    $res= $e;
}
echo json_encode(array('data' =>$res));
exit; */

?>
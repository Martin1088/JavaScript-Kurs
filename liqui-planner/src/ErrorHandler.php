<?php

class ErrorHandler {
    public static function handleException(Throwable $e): void {
        http_response_code(500);
        
        echo json_encode([
            "code" => $e->getCode(),
            "message" => $e->getMessage(),
            "file" => $e->getFile(),
            "line" => $e->getLine()
        ]);


        // $error = new Error();
        // $error->code = $e->getCode();
        // $error->message = $e->getMessage();
        // $error->file = $e->getFile();
        // $error->line = $e->getLine();
        // echo json_encode($error);
    }
}

?>
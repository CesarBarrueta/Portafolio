<?php
class Conexion extends PDO{

    private $hostBD = 'db';
    private $nombreBD = 'favorite_pokemon';
    private $usuarioBD = 'cesar';
    private $passwordBD = '12345678';

    public function __construct(){
        try{
            parent::__construct('mysql:host=' . $this->hostBD . ';dbname=' . $this->nombreBD . 
            ';charset=utf8', $this->usuarioBD, $this->passwordBD, array(PDO::
            ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
        }catch(PDOException $e){
            echo "Error: " . $e->getMessage();
            exit;
        }
    }

}

?>
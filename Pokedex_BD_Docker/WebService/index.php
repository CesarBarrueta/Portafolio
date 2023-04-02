<?php
    include 'conexion.php';

    $pdo = new Conexion();

    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        $sql = $pdo->prepare("SELECT * FROM favoritos");
        $sql->execute();
        $sql->setFetchMode(PDO::FETCH_ASSOC);
        header("HTTP/1.1 200 OK");
        echo json_encode($sql->fetchAll());
        exit;
    }

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $sql = "INSERT INTO favoritos (id,nombre,sprite,hp,attack,defense,special_attack,special_defense,speed,tipo1,tipo2) VALUES 
        (:id,:nombre,:sprite,:hp,:attack,:defense,:special_attack,:special_defense,:speed,:tipo1,:tipo2)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':id',$_POST['id']);
        $stmt->bindValue(':nombre',$_POST['nombre']);
        $stmt->bindValue(':sprite',$_POST['sprite']);
        $stmt->bindValue(':hp',$_POST['hp']);
        $stmt->bindValue(':attack',$_POST['attack']);
        $stmt->bindValue(':defense',$_POST['defense']);
        $stmt->bindValue(':special_attack',$_POST['special_attack']);
        $stmt->bindValue(':special_defense',$_POST['special_defense']);
        $stmt->bindValue(':speed',$_POST['speed']);
        $stmt->bindValue(':tipo1',$_POST['tipo1']);
        $stmt->bindValue(':tipo2',$_POST['tipo2']);
        $stmt->execute();
        $idPost = $pdo->lastInsertId();
        header('Location: ../index.html');
        exit();
    }

?>
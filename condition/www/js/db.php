<?php

ini_set("display_errors", On);
error_reporting(E_ALL);


$dsn = 'mysql:dbname=condition;host=localhost';
$user = 'root';
$password = 'root';

    try{
        $dbh = new PDO($dsn, $user, $password);

        //echo "接続に成功しました";
        $sth = $dbh->prepare("SELECT * FROM user");
        $sth->execute();

        $userData = array(); 

        while($row = $sth->fetch(PDO::FETCH_ASSOC)){
            $userData[]=array(
            'id'=>$row['id'],
            'name'=>$row['name']
            );
        }

        //jsonとして出力
        header('Content-type: application/json');
        echo json_encode($userData);        
        /*
        header('Content-type: application/json');
        echo json_encode(connectDb()->query($sql)->fetchAll(PDO::FETCH_ASSOC));
        */
        /*
        header('Content-type: application/json');
        echo json_encode(array('result' => 'hogehoge'));
        */

    }catch (PDOException $e){
        print('Error:'.$e->getMessage());
        die();
    }

    $dbh = null;

?>
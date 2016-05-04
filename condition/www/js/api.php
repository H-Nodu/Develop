//api.php
<?php
header("Content-type: text/plain; charset=UTF-8");

    //if (isset($_POST['request']))
    if (isset($_POST["item"])) 
    {
        //ここに何かしらの処理を書く（DB登録やファイルへの書き込みなど）
        echo "OK";
    }
    else
    {
        echo "NG";
    }
?>
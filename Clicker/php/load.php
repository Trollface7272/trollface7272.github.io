<?php
    $token = $_POST["token"];
    $mysql = new mysqli("localhost", "root", "", "obamium");
    $sql = "SELECT * FROM `user_list` WHERE token='$token'";
    $res = mysqli_query($mysql, $sql);
    $res = $res->fetch_assoc();
    echo json_encode($res);
?>
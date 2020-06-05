<?php
    $token = $_POST["token"];
    $username = $_POST["username"];
    $mysql = new mysqli("localhost", "root", "", "obamium");
    $sql = "UPDATE `user_list` SET `username`='$username' WHERE `token`='$token'";
    mysqli_query($mysql, $sql);
?>
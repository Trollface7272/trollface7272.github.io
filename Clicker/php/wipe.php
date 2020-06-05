<?php
    $token = $_POST["token"];
    $mysql = new mysqli("localhost", "root", "", "obamium");
    $sql = "DELETE FROM `user_list` WHERE `token`='$token'";
    mysqli_query($mysql, $sql);
    $sql = "INSERT INTO `user_list` (`token`, `obamium`, `clicks`, `playtime`, `spheres`, `pills`, `plant`, `printer`, `ring`, `clock`, `ball`, `cat`, `ingot`, `cupcake`, `fedora`, `polyhedron`, `bomb`) VALUES ('$token', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)";
    mysqli_query($mysql, $sql);
?>
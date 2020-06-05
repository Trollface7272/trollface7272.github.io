<?php
    $mysql = new mysqli("localhost", "root", "", "obamium");
    if(empty($_POST)) {
        $sql = "SELECT `id`, `username`, `obamium`, `clicks`, `playtime` FROM `user_list` GROUP BY `id` ORDER BY `obamium` DESC";
    }else {
        $sql = "SELECT `id`, `username`, `obamium`, `clicks`, `playtime` FROM `user_list` GROUP BY `id` ORDER BY `$_POST[sort]` DESC";

    }
    $res = mysqli_query($mysql, $sql);
    $arr = array();
    while($row = mysqli_fetch_assoc($res)) {
        $arr[] = $row;
    }
    echo json_encode($arr);
?>
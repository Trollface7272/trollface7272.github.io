<?php
    $mysql = new mysqli("localhost", "root", "", "obamium");
    
    $data = $_POST["data"];
    $boosters = $data["boosters"];
    $upgrades = $data["upgrades"];

    $token = $data["token"];
    $obamium = $data["obamium"];
    $clicks = $data["clicks"];
    $playtime = $data["playtime"];
    
    $spheres = $boosters["Obama Sphere"];
    $pills = $boosters["Obama Pill"];
    $plant = $boosters["Obama Plant"];
    $printer = $boosters["Obama Printer"];
    $ring = $boosters["Obama Ring"];
    $clock = $boosters["Obama Clock"];
    $ball = $boosters["Obama Ball"];
    $cat = $boosters["Obama Cat"];
    $ingot = $boosters["Obama Ingot"];
    $cupcake = $boosters["Obama Cupcake"];
    $fedora = $boosters["Obama Fedora"];
    $polyhedron = $boosters["Obama Polyhedron"];
    $bomb = $boosters["Obama Bomb"];

    $house = $upgrades["White House"];
    $check = $upgrades["Vibe Check"];
    $bus = $upgrades["Obama Bus"];
    $tesseract = $upgrades["Tesseract"];


    $sql = "SELECT * FROM `user_list` WHERE token='$token'";
    $res = mysqli_query($mysql, $sql);
    $res = $res->fetch_assoc();
    if($res == "") {
        $sql = "INSERT INTO `user_list` (`token`, `obamium`, `clicks`, `playtime`, `spheres`, `pills`, `plant`, `printer`, `ring`, `clock`, `ball`, `cat`, `ingot`, `cupcake`, `fedora`, `polyhedron`, `bomb`, `house`, `check`, `bus`, `tesseract`) VALUES ('$token', $obamium, $clicks, $playtime, $spheres, $pills, $plant, $printer, $ring, $clock, $ball, $cat, $ingot, $cupcake, $fedora, $polyhedron, $bomb, $house, $check, $bus, $tesseract)";
        $res = mysqli_query($mysql, $sql);
        print_r($mysql->error);
    }else {
        $sql = "UPDATE `user_list` SET `obamium`=$obamium, `clicks`=$clicks, `playtime`=$playtime, `spheres`=$spheres, `pills`=$pills, `plant`=$plant, `printer`=$printer, `ring`=$ring, `clock`=$clock, `ball`=$ball, `cat`=$cat, `ingot`=$ingot, `cupcake`=$cupcake, `fedora`=$fedora, `polyhedron`=$polyhedron, `bomb`=$bomb, `house`=$house, `check`=$check, `bus`=$bus, `tesseract`=$tesseract WHERE token='$token'";
        $res = mysqli_query($mysql, $sql);
        print_r($mysql->error);
    }
?>
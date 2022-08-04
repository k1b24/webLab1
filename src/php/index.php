<?php

date_default_timezone_set('Europe/Novosibirsk');

function check_hit($x, $y, $r) {
    $first_quarter_hit = false;
    $third_quarter_hit = false;
    $fourth_quarter_hit = false;

    if ($x >= 0 && $x <= $r && $y >=0 && $y <= $r / 2) {
        $first_quarter_hit = true;
    }

    if ($x <= 0 && $y <= 0 && $x * $x + $y * $y <= $r * $r) {
        $third_quarter_hit = true;
    }

    if ($x >= 0 && $y <= 0 && $y >= $x - $r/2) {
        $fourth_quarter_hit = true;
    }

    return $first_quarter_hit || $third_quarter_hit || $fourth_quarter_hit;
}

$start = microtime(true);
$current_time = date("H:i:s");
    
if (isset($_POST["x"]) && isset($_POST["y"]) && isset($_POST["r"])) {
    $x = $_POST["x"];
    $y = $_POST["y"];
    $r = $_POST["r"];

    $checked_hit = check_hit($x, $y, $r) ? "TRUE" : "FALSE";

    $finish_time = number_format(microtime(true) - $start, 8, ".", "") * 1000000;

    exit("
        <tr>
            <th>$x</th>
            <th>$y</th>
            <th>$r</th>
            <th>$current_time</th>
            <th>$finish_time</th>
            <th>$checked_hit</th>
        </tr>");  
}
exit("Что-то пошло не так!");
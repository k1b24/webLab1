<?php
include 'validator.php';

date_default_timezone_set('UTC');
session_start();

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
$validator = new Validator;

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if(!isset($_SESSION['table'])) {
        $_SESSION['table'] = '';
    }
    $table_rows = $_SESSION['table'];
    exit($table_rows);
} else if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST["delete_argument"])) {
    if(!isset($_SESSION['table'])) {
        $_SESSION['table'] = '';
    }
    $_SESSION['table'] = '';
    $table_rows = $_SESSION['table'];
    exit($table_rows);
} else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST["x"]) && isset($_POST["y"]) && isset($_POST["r"])) {
        if ($validator->validate($_POST["x"], $_POST["y"], $_POST["r"])) {
            $x = intval($_POST["x"]);
            $y = floatval($_POST["y"]);
            $r = intval($_POST["r"]);
            $timezone = $_POST["timezone"];
            $current_time = date("H:i:s", time() - $timezone*60);
    
            $checked_hit = check_hit($x, $y, $r) ? "TRUE" : "FALSE";
    
            $finish_time = number_format(microtime(true) - $start, 8, ".", "") * 1000000;
            $answer_string = "<tr><th>$x</th><th>$y</th><th>$r</th><th>$current_time</th><th>$finish_time</th><th>$checked_hit</th></tr>";
            if(!isset($_SESSION['table'])) {
                $_SESSION['table'] = '';
            }
            $table_rows = $_SESSION['table'].$answer_string;
    
            $_SESSION['table'] = $table_rows;
            exit($answer_string);
        } else {
            exit("Сервер получил некорректные данные для проверки");
        }
    }
}
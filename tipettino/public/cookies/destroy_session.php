<?php
session_start();
$_SESSION = [];

//$uri = explode('/', $_SERVER["REQUEST_URI"]);
//
//header('Arr: ' . implode($uri));
//
//array_pop($uri);

header('Location: index.php');
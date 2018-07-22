<?php

$msg = $_GET["msg"];

exec("python3 Tweeter.py " . $msg);

echo "Tweeted";



 ?>

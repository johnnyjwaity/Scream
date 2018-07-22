<?php

$f = $_GET['f'];
$arg1 = $_GET['arg1'];
$arg2 = $_GET['arg2'];
$arg3 = $_GET['arg3'];



if($f === "addRequest"){
  echo(exec("/usr/bin/python /var/www/html/Scream/addRequest.py " . $arg1 . " " . $arg2));
}else if($f === "acceptRequest"){
  echo(exec("/usr/bin/python /var/www/html/Scream/acceptRequest.py " . $arg1));
}else if($f === "checkRequest"){
  echo(exec("/usr/bin/python /var/www/html/Scream/checkRequest.py " . $arg1));
}else if($f === "getRequests"){
  echo(exec("/usr/bin/python /var/www/html/Scream/getRequests.py"));
}



 ?>

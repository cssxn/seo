<?php

$URI = '/index.php?thread-213-321-123.html';
$url = substr($URI,strrpos($URI,'?')+1);

print_r($url);
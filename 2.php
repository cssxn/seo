<?php


$URI = 'www.a.com/thread-2131-1-1.html';

echo substr($URI,strrpos($URI,'/')+1);

demo();
function demo(){
    echo $URI;
}
<?php

function get_rand_file($path){
    if(!is_dir($path)) die($path.' 目录不存在');
    $handler = opendir($path);
    while(($filename = readdir($handler) !== false)){
        if($filename !== '.' || $filename !== '..' && is_file($path.$filename)){
            // $files[] = $path.$filename;
            echo $filename.'<br />';
        }
    }
    closedir($path);
    return $files;
}

// $files = get_rand_file('news/');


echo "<pre>";

$files = scandir('juzi/');
print_r($files[array_rand($files)]);
<?php

// 随机抽取一个网站标题
function get_web_keywords($filename)
{
    if ($fh = fopen($filename, "r")) {
        while (!feof($fh)) {
            $keys[] = fgets($fh, 9999);
        }
        fclose($fh);
    }

    $rand_key = $keys[array_rand($keys)];
    $encode = mb_detect_encoding($rand_key, array("ASCII",'UTF-8',"GB2312","GBK",'BIG5')); 
    return trim(mb_convert_encoding($rand_key,'UTF-8',$encode)); // 转码
}

// 从某个目录中随机一个文件中随机取词
function get_keywords_from_rand_dir($dir){
    $keywords_files = get_rand_file($dir);
    $title = get_web_keywords($keywords_files);
    return trim($title);
}

// 360模版链接
function get_rand_url_360($url)
{
    // 从指定文件中抽取一个关键字,作为链接的标题
    $keywords_files = get_rand_file('news/'); // 从news目录中挑选一个文件
    $title = get_web_keywords($keywords_files); // 新闻链接标题
    $therad_id = md5($_SERVER["REMOTE_ADDR"] . $url . time());
    return '<a href="http://' . $_SERVER['HTTP_HOST'] . '/thread-' . $therad_id . '-1-1.html">' . $title . '</a>';
}

// 百度模版替换链接
function get_rand_url_baidu($url)
{
    // 从指定文件中抽取一个关键字,作为链接的标题
    $title = get_web_keywords('url_keywords.txt');
    $href = get_web_keywords('domain.txt');
    return '<a href="http://www.' . $href . '">' . $title . '</a>';
}

// 重定向
function transferTo301($url)
{
    header('HTTP/1.1 301 Moved Permanently');
    header('Location:' . $url);
}


// 获取文件  news/  目录结尾必须带'/'
function get_rand_file($path){
    if(!is_dir($path)) die($path.' 目录不存在');
    $files = scandir($path);
    array_shift($files); // 删除.和..文件
    array_shift($files);
    $selected_file = $files[array_rand($files)];
        return $path.$selected_file;
}


echo get_keywords_from_rand_dir('web_title_files/');

// $files = scandir('web_title_files/');

// print_r($files);
// array_shift($files);
// array_shift($files);
// echo "<hr>";
// print_r($files);
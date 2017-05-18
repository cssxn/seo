<?php

$HOST = $_SERVER['HTTP_HOST'];
$URI = $_SERVER['REQUEST_URI'];
$UA = $_SERVER['HTTP_USER_AGENT'];

// 百度爬虫
if (strpos($UA, 'Baiduspider/2.0')) {
    if (strpos($UA, 'Mobile')) {
        if (strpos($HOST, 'm.') === 0) {
            // 直接输出mobile内容
            render('Mobile');
        } else {
            // 重定向到移动端域名
            transferTo301('m.' . $HOST);
        }
    } else {
        // '百度PC端爬虫,直接输出demo.com';
        render('PC');
    }
} elseif (strpos($UA, '360Spider') || strpos($UA, 'haosouspider') || strpos($UA, 'Sosospider')) {
    if (strpos($URI, 'thread-')) {
        // 输出360内页模版内容
        render('Secondary');
    } else {
        // 输出360主页模版内容
        render('Main');
    }

} else {
    // 百度蜘蛛无UA标识的
    if (strpos($UA, 'Mobile')) {
        if (strpos($HOST, 'm.') === 0) {
            // 直接输出mobile内容
            render('Mobile');
        } else {
            // 重定向到移动端域名
            transferTo301('m.' . $HOST);
        }
    } else {
        // '百度PC端爬虫,直接输出demo.com';
        render('PC');
    }
}

// 渲染模版
function render($page)
{

    // 模版目录
    $templateDir = 'templates';

    // 缓存目录
    $cacheDir = 'visited/' . $_SERVER['HTTP_HOST'];
    // 缓存文件
    switch ($page) {
        case 'Main':
            $cacheFile = $cacheDir . '/360_Main.html';
            $templateFile = $templateDir . '/360.html';
            break;
        case 'Secondary':
            $cacheFile = $cacheDir . '/360_Secondary.html';
            $templateFile = $templateDir . '/360_2.html';
            break;
        case 'Mobile':
            $cacheFile = $cacheDir . '/baidu_Mobile.html';
            $templateFile = $templateDir . '/baidu.html';
            break;
        case 'PC':
            $cacheFile = $cacheDir . '/baidu_PC.html';
            $templateFile = $templateDir . '/baidu.html';
            break;
    }

    // 根据域名创建一个目录,方便查找
    if (!file_exists($cacheDir)) {
        mkdir($cacheDir);
    }

    // 先去缓存目录找是否已经存在该域名的html
    if (file_exists($cacheFile)) {
        echo file_get_contents($cacheFile);
    } else {
        // 根据域名绑定关键词,生成暗链地址的ID随机数
        $contents = file_get_contents($templateFile);

        // 替换网站标题
        $new_website_title = get_web_keywords('web_keywords.txt'); // 新网站标题
        $contents = str_replace('网络社会征信网', $new_website_title, $contents);

        // 替换页面内的链接和链接标题
        preg_match_all('/<a .*?href="(.*?)".*?>/is', $contents, $res);
        foreach ($res[0] as $val) {
            if ($page === 'PC' || $page === 'Mobile') {
                $randomURL = get_rand_url_baidu($val); // 百度的链接
            } else {
                $randomURL = get_rand_url_360($val); // 360的链接
            }
            $contents = str_replace($val, $randomURL, $contents);
        }

        // 检测内容
        if (!$contents) {
            die('模版内容为空');
        }

        // 缓存当前html
        file_put_contents($cacheFile, $contents);

        // 输出结果
        echo $contents;
    }

}

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
    return $rand_key;
}

// 360模版链接
function get_rand_url_360($url)
{
    // 从指定文件中抽取一个关键字,作为链接的标题
    $title = get_web_keywords('url_keywords.txt');
    $therad_id = md5($_SERVER["REMOTE_ADDR"] . $url . time());
    return '<a href="http://www.' . $_SERVER['HTTP_HOST'] . '/thread-' . $therad_id . '-1-1.html">' . $title . '</a>';
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

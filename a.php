<?php

date_default_timezone_set('Europe/Samara');

if (!empty($_GET['message'])) {
    $oldText = file_get_contents('messages/file.txt');

    if (file_put_contents('messages/file.txt', $oldText."\n\n[".date('d.m.Y_H:i:s')."]\n".$_GET['message'])) {
        echo 1;
    } else {
        echo 0;
    }
} else {
    echo 0;
}

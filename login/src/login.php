<?php

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = htmlspecialchars($_POST['user']);
    $pass = htmlspecialchars($_POST['pass']);

    header('Location: /blog_pessoal/login/src/blog/');
    exit;
}
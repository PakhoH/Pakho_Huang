<?php
header("Content-type: application/json; charset=utf-8");
$link = mysqli_connect('localhost','root','12345678','baidunews',3306);
    
// mysqli_connect(host,username,password,dbname,port,socket);
// 参数	描述
// host	可选。规定主机名或 IP 地址。
// username	可选。规定 MySQL 用户名。
// password	可选。规定 MySQL 密码。
// dbname	可选。规定默认使用的数据库。
// port	可选。规定尝试连接到 MySQL 服务器的端口号。
// socket	可选。规定 socket 或要使用的已命名 pipe。
?>
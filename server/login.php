<?php
/*
 * @Date: 2020-01-22 17:23:19
 * @LastEditTime: 2020-01-22 18:05:34
 * @Author: 李芳芳
 * @Github: https://github.com/J-Fan-Fan/
 */

// 将基本文件导入进来
  include 'base.php';
$user=$_GET['user1'];
$pass=$_GET['pass1'];
// 查询数据库是否存在用户名和密码
$res=mysql_query("select * from user where name='$user' and pass='$pass'");
  // 如果存在则会返回ok
if(mysql_fetch_assoc($res)){
   	echo 'ok';
   }else{
  // 否则将会进行报错
   	echo 'error';
   }

<?php
//获取数据
	$Phone_Mobile = $_GET['Phone_Mobile'];
	//建立连接
	$con = mysql_connect("localhost","root","root");
	//选择数据库
	mysql_select_db("mydb01",$con);
	//执行sql语句
	$sqlstr = "select * from Phone where Phone_Mobile = '$Phone_Mobile'";
	$result = mysql_query($sqlstr,$con);
	//判断是否存在
	$rows = mysql_num_rows($result);
	if($rows>0){
		//说明数据存在，不能在被注册了
		echo "0";
	}else{
		echo "1";
	}
?>

<?php
	header("Content-type:text/html;charset=utf-8");
	
	//1、接收数据
	$Phone_Mobile = $_POST['Phone_Mobile'];
	$Phone_Password = $_POST['Phone_Password'];
	
	
	//2、处理（连接数据库，保存数据）
	//1)、建立连接（搭桥）
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		echo "连接数据库失败";
	}else{
		//2）、选择数据库（目的地）
		mysql_select_db("mydb01",$con);
		
		//3）、执行SQL数据（运输数据）
		$sqlstr="select * from Phone where Phone_Mobile='$Phone_Mobile'";
		$result = mysql_query($sqlstr,$con);
		$rows = mysql_num_rows($result);
		if($rows>0){				
			//4）、关闭数据库（过河拆桥）
			mysql_close($con);
			echo "-1";
		}else{
			$sqlstr="insert into Phone(Phone_Mobile,Phone_Password) values('$Phone_Mobile','$Phone_Password')";
			$result = mysql_query($sqlstr,$con);	
			//4）、关闭数据库（过河拆桥）
			mysql_close($con);
			
			//3、响应
//			echo $result."<br/>";
			if($result){
				echo "1";			
				//header("location:demo02login.html");
//				echo "<script>alert('亲，恭喜您，注册成功！');location.href='zhuye.html'</script>";
//				header("location:zhuye.html");
			}else{
//				echo "<script>alert('注册失败！');</script>";
				echo "0";
			}			
		}
	}
?>

//页面显示cookie
function getCookie(key){
	var str = unescape(document.cookie);
	
	//1、分割成数组
	var arr=str.split("; ");
	
	//2、循环数组，查找键，并得到对应的值
	for(var i in arr){
		if(arr[i].indexOf(key+"=")==0){
			return arr[i].substring((key+"=").length);
		}
	}
	return null;
}
	function getCookie2(){
	var str = unescape(document.cookie);
//	console.log(document.cookie);
	//1、分割成数组
	var arr=str.split("; ");
//	console.log(arr.length);
//	console.log(arr[0]);
//	console.log(typeof arr[0]);
	let arr2=arr[0].split("=");
	console.log(arr2[0]);
	return arr2[0];
	
}
	function removeCookie(key){

	var d = new Date();
	d.setDate(d.getDate()-1);
	document.cookie = key+"=bye;expires="+d.toGMTString();

//	addCookie(key,"bye",-1);
}
	$(function(){
		let username=getCookie2();
	    $(".huanying").html("欢迎<span style='color:red'>"+username+"</span>光临易果生鲜！");
//	    removeCookie(username);
	});
   
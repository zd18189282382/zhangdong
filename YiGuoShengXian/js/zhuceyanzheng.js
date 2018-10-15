 //表单验证
function biaodan(){
	console.log($("#Phone_Password"));
  $("#Phone_Password").keydown(function(){
  			console.log($("#Phone_Password").val());
       if(check("Phone_Password",$("#Phone_Password").val())){
           $(".pass-mm").html("输入正确");
        }
        else{
            $(".pass-mm").html("密码格式有误"); 
	}
});
    $("#Phone_VerifyCode").keydown(function(){
       if(check("Phone_VerifyCode",$("#Phone_VerifyCode").val())){
           $(".kong-yzm").html("输入正确");
       }else {
           $(".kong-yzm").html("格式有误(应为6位)");
       }
    });

    $("#Phone_Mobile").keydown(function(){
        if(check("Phone_Mobile", $("#Phone_Mobile").val())){
           $(".showvalue").html("输入正确");
        }else if($("#Phone_Mobile").val().length < 11){
            $(".showvalue").html("手机号码应该是11位数"); 
        }else {
            $(".showvalue").html("手机号码输入格式有误");
        }
    });

    // 封装正则表达式的判断函数
    function check(Cla,val){  //第一个形参为id通过id找不同的元素,第二个是要操作元素的值
        switch(Cla){
            // 用户名
            case "Phone_Password":
                var reg = /^\w{6,16}$/g;
           // var reg = /^[\u4E00-\u9FA5]{2,}$/  // 输入必须是两位以上中文
                break;
            case "Phone_VerifyCode":
                  var reg = /^[\w]{5}$/;
                break;
            // 11位手机号码
            case "Phone_Mobile":
                var reg = /^(13[0-9]|15[012356789]|18[0-9]|17[6789]|14[57])[0-9]{7}$/;   // 注意：前面可以不写中括号
                break;
            
        }
        return reg.test(val);
    }
}
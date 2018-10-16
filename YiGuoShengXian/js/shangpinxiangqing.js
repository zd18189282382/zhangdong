//商品详情页面
$(function(){
	adList();//商品联动
	cityshow();//城市联动
	clickOver();// 跳楼和回到顶部
	picshow();//图片转化
	buyqiang();//购买记录
})
// 跳楼和回到顶部
function clickOver(){
//回到顶部
$(".goTop").click(function(){
	 $('body,html').animate({ scrollTop: 0 }, 300);
	// document.body.scrollTop = 0;
	 return false;
	});
}
// 隐藏Top效果
window.onscroll=function(){
	var scroolLong=document.documentElement.scrollTop || document.body.scrollTop;
	// console.info(scroolLong);
	if(scroolLong<930){
		$(".goTop").css({
			"display":"none"
		});
	}
	if(scroolLong>=930){
		$(".goTop").css({
			"display":"block"
		});
	}
}

//划过小图淡出大图
function picshow(){
	for (let i=0;i<$(".pic-xiao li").length;i++) {
		$(".pic-xiao li").eq(i).hover(function(){
			$(".pic-xiao li").eq(i).css({"borderColor":"#008842"})
			$(".pic-big img").eq(i).css({"display":"block","transtion":"all 1s"});
//			$(".pic-big img").eq(i).animate({opacity:1},200);
//			$(".pic-big img").not($(".pic-big img").eq(i)).animate({opacity:0},200,function(){
				$(".pic-big img").not($(".pic-big img").eq(i)).css({"display":"none"});
//			});	
		},
		function(){
			$(".pic-xiao li").eq(i).css({"borderColor":"#bcbcbc"})
		})
	}
}
//点击+-增加数量
function buyqiang(){
			let tod =1;
			Cl();
		$(".increase").click(function() {
				tod =parseFloat($(".spinner").val());
				tod++;
//				console.log(tod);
				$(".spinner").val(tod);
				Cl();
		});
		$(".decrease").click(function() {
				tod =parseFloat($(".spinner").val());
				tod--;
				if(tod<=1){
					tod=1;
				}
//				console.log(tod);
				$(".spinner").val(tod);
				Cl();
		});
		
		//点击购买
		function Cl(){
			let sr=0;
		$(".carrent").click(function() {
				 sr+=tod
				$(".gouwuc b").html(sr);
				$(".cor-b").html((sr*25.90).toFixed(2));
		});
	}
}
	


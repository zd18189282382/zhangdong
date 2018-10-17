//商品详情页面
$(function(){
	adList();//商品联动
	cityshow();//城市联动
	clickOver();// 跳楼和回到顶部
	jia();//点击变数
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
//	 console.info(scroolLong);
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
	if(scroolLong>=1000){
		$(".rec-guide").addClass("rec-fixed");
	}
	if(scroolLong<=1000){
		$(".rec-guide").removeClass("rec-fixed");
	}
//	if(scroolLong>=300){
//		$(".rec-guide .book").addClass("currear");
//		$(".rec-guide .book").css({
//  		"background-position":"-26px 0"
//		})
//		$(".rec-guide a").eq(0).addClass("urlme");
//	}
}

//点击加价
function jia(){
	let a=0;
	$(".btn-red").click(function(){
		$(".tot-num").html("1");
		a = $(".p-pri strong").html();
		$(".tot-j").html(a);
	})
	if($(".prode-g input").is(":checked")==false){
		$(".tot-num").html("0");
		$(".tot-j").html("0.00");
	}
}

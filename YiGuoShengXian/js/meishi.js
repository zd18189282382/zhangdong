//商品详情页面
$(function(){
	adList();//商品联动
	cityshow();//城市联动
	clickOver();// 跳楼和回到顶部
	colBoder();//边框变色
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
//划过li边框变色
function colBoder(){
	for(let i=0;i<$(".rec-item").length;i++){
		$(".rec-item").eq(i).hover(function(){
			$(this).css({
				"borderColor":"#85b100"
			})
		},
		function(){
			$(this).css({
				"borderColor":"#fff"
			})
		})
	}
	
}

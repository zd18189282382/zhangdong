//楼层引导事件和侧边悬浮和头部横条
// function C(id){
// 	return document.getElementsByClassName(id);
// }
// var scroolLong=document.documentElement.scrollTop || document.body.scrollTop;
window.onscroll=function(){
	var scroolLong=document.documentElement.scrollTop || document.body.scrollTop;
	// console.info(scroolLong);
	//头部横条
	if(scroolLong<=100){
		$(".header-fix").css({
			"display":"none"
		})
	}
	if(scroolLong>100){
		headerFix();
	}
	//楼层引导
	if(scroolLong<930){
		$(".floor-guide").css({
			"display":"none"
		});
		$(".goTop").css({
			"display":"none"
		});
	}
	if(scroolLong>=930){
		$(".floor-guide").css({
			"display":"block"
		});
		$(".goTop").css({
			"display":"block"
		});
	}
	if(scroolLong>=930&&scroolLong<1455){
	$(".mui-nav").find("b").css({"display":"block"});
	$(".mui-nav").find("em").css({"display":"none"});
	$(".mui-01").css({"display":"none"});
	$(".mui-01").next().css({"display":"block"});
	}
	if(scroolLong>=1455&&scroolLong<1900){
	$(".mui-nav").find("b").css({"display":"block"});
	$(".mui-nav").find("em").css({"display":"none"});
	$(".mui-02").css({"display":"none"});
	$(".mui-02").next().css({"display":"block"});
	}
	if(scroolLong>=1900&&scroolLong<2500){
	$(".mui-nav").find("b").css({"display":"block"});
	$(".mui-nav").find("em").css({"display":"none"});
	$(".mui-03").css({"display":"none"});
	$(".mui-03").next().css({"display":"block"});
	}
	if(scroolLong>=2500&&scroolLong<3000){
	$(".mui-nav").find("b").css({"display":"block"});
	$(".mui-nav").find("em").css({"display":"none"});
	$(".mui-04").css({"display":"none"});
	$(".mui-04").next().css({"display":"block"});
	}
	if(scroolLong>=3000&&scroolLong<3500){
	$(".mui-nav").find("b").css({"display":"block"});
	$(".mui-nav").find("em").css({"display":"none"});
	$(".mui-05").css({"display":"none"});
	$(".mui-05").next().css({"display":"block"});
	}
	if(scroolLong>=3500&&scroolLong<4000){
	$(".mui-nav").find("b").css({"display":"block"});
	$(".mui-nav").find("em").css({"display":"none"});
	$(".mui-06").css({"display":"none"});
	$(".mui-06").next().css({"display":"block"});
	}
	if(scroolLong>=4000&&scroolLong<4500){
	$(".mui-nav").find("b").css({"display":"block"});
	$(".mui-nav").find("em").css({"display":"none"});
	$(".mui-07").css({"display":"none"});
	$(".mui-07").next().css({"display":"block"});
	}
	if(scroolLong>=4500&&scroolLong<5000){
	$(".mui-nav").find("b").css({"display":"block"});
	$(".mui-nav").find("em").css({"display":"none"});
	$(".mui-08").css({"display":"none"});
	$(".mui-08").next().css({"display":"block"});
	}
	if(scroolLong>=5000){
	$(".mui-nav").find("b").css({"display":"block"});
	$(".mui-nav").find("em").css({"display":"none"});
	$(".mui-09").css({"display":"none"});
	$(".mui-09").next().css({"display":"block"});
	}
}
function clickOver(){
	for(let i=0;i<$(".mui-nav a").length;i++){
		$(".mui-nav a").eq(i).on({
			click:function() {
				$('body,html').animate({ scrollTop:1000+i*500 }, 500);
			},
			mouseenter:function(){
				$(".mui-nav").find("b").eq(i).css({"display":"none"});
				$(".mui-nav").find("em").eq(i).css({"display":"block"});
			},
			mouseleave:function(){
				$(".mui-nav").find("b").eq(i).css({"display":"block"});
				$(".mui-nav").find("em").eq(i).css({"display":"none"});
			}
		});
	}
//回到顶部
$(".goTop").click(function(){
 $('body,html').animate({ scrollTop: 0 }, 300);
// document.body.scrollTop = 0;
 return false;
});
}
//头部固定
function headerFix(){
	$(".header-fix").css({
	"zIndex":" 100",
    "display": "block",
    "position": "fixed",
    "top": "0px",
    "left": "0px",
    "width": "100%",
    "height": "46px"
	});
	$(".header-fix .wrap").css({
	"height": "36px",
    "padding":" 5px 0"
	});
	$(".header-fix .logo").css({
	"width":"270px"
	});
	
	$(".header-fix .logo a").css({
	"height": "36px",
    "backgroundSize": "auto 100%"
	});
	$(".header-fix .search").css({
	"width": "770px",
    "marginTop": "3px"
	});
	$(".header-fix .search .search-list").css({
	"overflow": "hidden",
    "float": "left",
    "width": "230px",
    "height": "28px",
    "margin-left": "10px"
	});
	$(".header-fix .shapping-btn").css({
	"width": "140px",
    "padding": "2px 0",
    "fontSize": "20px"
	});
	 $(".header-fix .shapping-list").css({
	"top": "33px"
	});
}
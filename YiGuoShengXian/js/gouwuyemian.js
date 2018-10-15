//主购物页面
$(function(){
	adList();//商品联动
	cityshow();//城市联动
	clickOver();// 跳楼和回到顶部
	buyer();//购物特效
})
// 跳楼和回到顶部
function clickOver(){
	for(let i=0;i<$(".activity-side").find("a").length;i++){
		$(".activity-side").find("a").eq(i).on({
			click:function() {
				if(i==0){
					$('body,html').animate({ scrollTop:600}, 500);
				}
				else{
					$('body,html').animate({ scrollTop:900+(i*900 )}, 500);
				}
				
			},
			mouseenter:function(){
				$(this).css({
					"color":"#e8380d"
				})
			},
			mouseleave:function(){
				$(this).css({
					"color":"#fff"
				})
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



// 头部横条
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

//点击购买
function buyer(){
	let tod = 0;
	for(let j=0;j<$(".addCart").length;j++){
		$(".addCart").eq(j).click(function() {
			tod++;
			// console.info($(".img img").eq(i));
			//复制img到a的下面
			$($(".img img").eq(j)).clone().appendTo($(".img").eq(j).find("a"));
			$($(".img a").eq(j).find("img").eq(1)).animate({
				width: 40,
				height: 40},
				500, function() {
				$($(".img a").eq(j).find("img")).not($(".img a").eq(j).find("img").eq(0)).remove();
				$(".gouwuc b").html(tod);
				$(".cor-b").html((tod*58.0).toFixed(2));
			});
		});
	}
	
}



	
// // 2秒内不允许点击
//  		var checkClick = false;
//     	function checkClick() { 
// 		 
//  		if (checkClick == true) {   
//          return false;  
//         }  
//         checkClick = true;  
//     
//         setTimeout(function() {  
//             checkClick = false;  
//         }, 2000);  
//         return true;  	
// 	}

// function perice(){
	
// 	switch(i){
// 		case 0: per=58.0;return ;
// 		case 1: per=13.8;return ;
// 		case 2: per=78.0;return ;
// 		case 3: per=59.9;return ;
// 		case 4: per=71.8;return ;
// 	}	
// }






















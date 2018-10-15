
//城市联动
function cityshow(){
	for(let i=0;i<$(".city-tab span").length;i++){
		// console.info($(".city-tab span"));
		$(".city-tab span").eq(i).hover(function(){
			$(".city-tab span").not($(".city-tab span").eq(i)).removeClass('active');
			$(".city-last").not($(".city-last").eq(i)).removeClass('attive');
			$(".city-tab span").eq(i).addClass('active');
			$(".city-last").eq(i).addClass('attive');
			},
			function(){
			$(".city-tab span").not($(".city-tab span").eq(i)).removeClass('active');
			$(".city-last").not($(".city-last").eq(i)).removeClass('attive');	
			}
		);
		}
}

//商品分类联动
function adList(){
		$(".catalogs").on({
			click:function() {
				$(".item").toggle();
			},
			mouseenter:function(){
				$(".item").css({
					"display":"block"
				});
			},
			mouseleave:function(){
				$(".item").css({
					"display":"none"
				});
			}
	});
	adshow();
}
function adshow(){
	for(let i=0;i<$(".item").length;i++){
		// console.info($(".city-tab span"));
		$(".item").eq(i).hover(function(){
			$(".item h3").eq(i).addClass('current');
			// ({
			// 	"borderRight": "1px solid #fff",
			// 	"color":"#20985a",
			// 	"backgroundColor":" #fff" 
			// });
			$(".sub-item").eq(i).css({"display":"block"});
			},
			function(){
			$(".item h3").eq(i).removeClass('current');

			$(".sub-item").eq(i).css({"display":"none"});	
			}
		);
	}
}
// .catalogs-list .current{
// 	border-left-top-bottom:1px solid  #686868;
// 	border-right: 1px solid #fff;
// 	color:#20985a;
// 	background-color: #fff; 
// }
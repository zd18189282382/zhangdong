window.onload = function(){
		let s1 = new Slider($(".banner-slider"),100,100,["img/left2.png","img/left2.png"],["img/logo1.jpg","img/logo2.jpg","img/logo3.jpg","img/logo04.jpg"],
				12,"#b5b2a8","#5aaa16",
				true,-1,5000);
		clickOver();//引导栏
		cityshow();//城市联动
		adList();//商品动态
}

	//使用插件
$(function(){
	$(".chkAll").click(function(){
		$(".cart-btn :checkbox").check(this.checked);
		$(".chkAll").check(this.checked);
	})
	delect();
	removeCart();
})
	//全选按钮
	jQuery.fn.extend({
		check:function(isChecked){
		//this:调用check函数的对象（也就是jQuer对象）
		this.each(function(){
			//this每个Dom对象
			this.checked = isChecked;
			// 总价
			let total =parseFloat($(".fs14 span").html());
			// parseFloat($(".fs14 span").html(total));
			// 每个商品的总价的标签
			// let num=$(".cart-list .cart-total span");
			if(isChecked==false){
				total = 0.00;
				// console.info(total.toFixed(2));
				parseFloat($(".fs14 span").html(total.toFixed(2)));
				return;
			}
			if(total==0){

			// 每个商品的总价的标签
			let num=$(".cart-list .cart-total span");
			// let spans =parseFloat($(".cart-list .cart-total span").html());
			// console.log(spans);
			//合计
			let total =parseFloat($(".fs14 span").html());
			total=0;
			if(num.length==0){
				$(".fs14 span").html(0);
				$(".cart-table").remove();
				$(".cart-footer").remove();
				$(".cart-none").css({
					"display":"block"
				});
				$(".preferential-buy").css({
					"display":"none"
				});
			}
			for(let i=0;i<num.length;i++){
				total += parseFloat(num.eq(i).html());
				// console.info(total.toFixed(2));
				parseFloat($(".fs14 span").html(total.toFixed(2)));
			}

			}
		})
	},	
});
 function delect(){
		//删除
		//先获取所有的删除按钮
		let remove =$(".del-x");
		//循环这些按钮
		for(let i=0;i<remove.length;i++){
			remove[i].onclick = ()=>{
				let cc=window.confirm("是否确认删除");
				if(cc){
				//点击对应的删除按钮时，删除这个按钮的父元素的父元素，即删除这个input的父元素td的父元素tr,即点击对应删除按钮时，删除这一行
				let s= i-1;
				$(".cart-list .cart-table").eq(s).remove();
				total();
				}

			}
		}

		//价格
		//先获取所有的数量按钮
		// let num = $(".itxt");
		//循环这些数量按钮
		//减键的功能
		for(let i=0;i<$(".decrement").length;i++){
			$(".decrement")[i].onclick = function(){
				//点击数量按钮，获取它的值'
				// console.info(($(".itxt").val()-1));
				
				// console.info($(".itxt").eq(i).val()-1);
				let nums = parseFloat($(".itxt").eq(i).val())-1;
				// if(nums<=0){
				// 	nums=0;
				// }
				
				
				//单价
				//通过点击的那一个input标签的父元素td的上一个节点td的innerHTML取整可以得到单价
				let price = parseFloat($(".cart-list .cart-price").html().slice(1));
				// console.info(typeof(price));
				// console.info(price);


				//总价
				//找到总价那一列显示数据的span标签，通过点击的那一个input标签的父元素td的下一个节点td的第一个孩子节点找到span
				let span =parseFloat($(".cart-list .cart-total span").html());
				// console.info(span)
				
				//数量不能小于0'
				
				if(nums<=0){
					nums = 0;
					span = 0.00;
				}else{
					// console.info(price*nums);
					span =(price*nums).toFixed(2);

				}
				$(".cart-list .cart-total span").eq(i).html(span);
				$(".itxt").eq(i).val(nums);
				total();
			}
		}
		//加键的功能
		for(let i=0;i<$(".increment").length;i++){
			$(".increment")[i].onclick = function(){
				//点击数量按钮，获取它的值'
				// console.info(($(".itxt").val()-1));
				
				// console.info($(".itxt").eq(i).val()-1);
				let nums = parseFloat($(".itxt").eq(i).val())+1;
				// if(nums<=0){
				// 	nums=0;
				// }
				
				
				//单价
				//通过点击的那一个input标签的父元素td的上一个节点td的innerHTML取整可以得到单价
				let price = parseFloat($(".cart-list .cart-price").html().slice(1));
				// console.info(typeof(price));
				// console.info(price);


				//总价
				//找到总价那一列显示数据的span标签，通过点击的那一个input标签的父元素td的下一个节点td的第一个孩子节点找到span
				let span =parseFloat($(".cart-list .cart-total span").html());
				// console.info(span)
				
				//数量不能小于0
				if(nums<=0){
					nums = 0;
					span = 0;
				}else{
					// console.info(price*nums);
					span =(price*nums).toFixed(2);

				}
				$(".cart-list .cart-total span").eq(i).html(span);
				$(".itxt").eq(i).val(nums);
				total();
			}
		}
		// 合计函数
		function total(){
			// 每个商品的总价的标签
			let num=$(".cart-list .cart-total span");
			// let spans =parseFloat($(".cart-list .cart-total span").html());
			// console.log(spans);
			//合计
			let total =parseFloat($(".fs14 span").html());
			total=0;
			if(num.length==0){
				$(".fs14 span").html(0);
				$(".cart-table").remove();
				$(".cart-footer").remove();
				$(".cart-none").css({
					"display":"block"
				});
				$(".preferential-buy").css({
					"display":"none"
				});
			}
			for(let i=0;i<num.length;i++){
				total += parseFloat(num.eq(i).html());
				// console.info(total.toFixed(2));
				parseFloat($(".fs14 span").html(total.toFixed(2)));
			}
		}		
	}
	// 点击删除购物车，全不见
	function removeCart(){
		$(".cart-clear").click(
		function(){
			let bb = window.confirm("真的全部删除吗！删了就见不到我了！");
			if(bb){
			$(".cart-alert").remove();
			$(".cart-none").css({
					"display":"block"
				});
				$(".preferential-buy").css({
					"display":"none"
				});
			}
		})
	} 
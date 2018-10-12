	//使用插件
$(function(){
	$(".chkAll").click(function(){
		$(".cart-btn :checkbox").check(this.checked);
		$(".chkAll").check(this.checked);
	})
	delect();
})
	//全选按钮
	jQuery.fn.extend({
		check:function(isChecked){
		//this:调用check函数的对象（也就是jQuer对象）
		this.each(function(){
			//this每个Dom对象
			this.checked = isChecked;
		})
		},
	
		
	});

 function delect(){
		//删除
		//先获取所有的删除按钮
		let remove =$(".del-x");
		//循环这些按钮
		for(let i=0;i<remove.length;i++){
			remove[i].onclick = function(){
				//点击对应的删除按钮时，删除这个按钮的父元素的父元素，即删除这个input的父元素td的父元素tr,即点击对应删除按钮时，删除这一行
				this.parentNode.parentNode.remove();
				total();
			}
		}

		//价格
		//先获取所有的数量按钮
		// let num = $(".itxt");
		//循环这些数量按钮
		for(let i=0;i<$(".decrement").length;i++){
			$(".decrement").eq(i).onclick = function(){
				//点击数量按钮，获取它的值
				let nums = $(".itxt").eq(i).value-1;

				//单价
				//通过点击的那一个input标签的父元素td的上一个节点td的innerHTML取整可以得到单价
				let price = parseFloat($(".cart-price").innerHTML);

				//总价
				//找到总价那一列显示数据的span标签，通过点击的那一个input标签的父元素td的下一个节点td的第一个孩子节点找到span
				let span =$(".cart-total span");
				
				//数量不能小于0
				if(nums<=0){
					this.value = "0";
					span.innerHTML = 0;
				}else{
					span.innerHTML = price*nums;
				}
				total();
			}
		}
		// 合计函数
		function total(){
			let spans = $(".cart-total span");
			//合计
			let total = $(".fs14");
			total.innerHTML= 0;
			for(let i=0;i<spans.length-1;i++){
				total.innerHTML = parseFloat(total.innerHTML)+parseFloat(spans[i].innerHTML);
			}
		}
	}

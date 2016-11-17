function goods(goodsName,src,price,num){
			this.src=src;
			this.goodsName=goodsName;
			this.price=price;
			this.num=num;
			
		}

function noLike(obj){
			if($.cookie("market")){
				var cookies=JSON.parse($.cookie("market"));
			}else{
				var cookies=[];
			}
			var nameLife=true;
			var nameIndex=0;
			for(i in cookies){
				if(cookies[i].goodsName==obj.goodsName){
					nameLife=false;
					nameIndex=i;
				}
			}
			
			
			if(nameLife){
				cookies.push(obj);
			}else{
				cookies[nameIndex].num+=obj.num;
			}
			cstr=JSON.stringify(cookies);
			$.cookie("market",cstr,{expires:7});
}





			function delGoods(xx){
				xx.each(function(){
				$(this).parents("table").remove();
				if($(".cage_meeage").find(".template").length==0){
					$(".empty").show()
				}else{
					$(".empty").hide()
					$(".case2 input[type=checkbox]").prop('checked',false);
				}
				xy.pop($(this).parents("table").index());
				$.cookie("market",JSON.stringify(xy))
				})
			}

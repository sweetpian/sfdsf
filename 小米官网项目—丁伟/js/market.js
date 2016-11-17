$(function(){
	
	xy=JSON.parse($.cookie("market"));

			$(".sc").click(function(){
				delGoods($(this))
			})
			

			for(var i in xy){
				$(".empty").hide()
				clone_table=$(".template:first").clone(true);
				clone_table.find("td:last").append('')
				clone_table.addClass("content_ttb");
				$(".cage_meeage").append(clone_table);


				$(".content_ttb:last").find(".car_img").attr({src:xy[i].src});
				$(".content_ttb:last").find(".car_name").html(xy[i].goodsName);
				$(".content_ttb:last").find(".car_jg").html(xy[i].price);
				$(".content_ttb:last").find(".car_num").html(xy[i].num);
				$(".content_ttb:last").find(".car_all").html(xy[i].num*xy[i].price);
			}
			
			

			
			$(".case2 :checkbox").click(function(){
				if($(this).is(":checked")){
					$(':checkbox').prop('checked',true);
				}else{
					$(':checkbox').prop('checked',false);
				}
				
				
			})

			
			$(".ds").click(function(){
				xz=$(".cage_meeage :checked");
				delGoods(xz);
			})
	
	
	
	
	
	
})

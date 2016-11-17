$(function(){
		$('.log_img').hover(function(){
                $(this).animate({marginTop:"-50px"},500);
       	},function(){
                $(this).animate({"margin-top":"0px"},500);
                
        })
		
		$(window).scroll(function(event){
			var height=$(this).scrollTop();
			if(height>=880){
				$('.header_bar').show();
			}else{
				$('.header_bar').hide();
			}
		})
		
		var i=0;
		// 克隆第一张图片，加至第四张后面。
		var clone=$('.img li').first().clone();
		$('.img').append(clone);
		//克隆后 图片的个数
		var size=$('.img li').size();
		//页面初始化时，给第一个圆点加hover效果
		$('.num li').first().addClass('on').siblings().removeClass('on');
		// 向左滑动 按钮的点击事件
		$('.btn_l').click(function() {
			moveL();
		});
		// 向右滑动 按钮的点击事件
		$('.btn_r').click(function(){
			moveR();
		})
		function moveL(){
			i++;
			if(i==size){
				$('.img').css({'left':'0px'})
				i=1;
			}
			$('.img').stop().animate({left:-1260*i})
			if(i==size-1){
				$('.num li').eq(0).addClass('on').siblings().removeClass('on');
			}else{
				$('.num li').eq(i).addClass('on').siblings().removeClass('on');
			}
		}
		function moveR(){
			i--;
			if(i==-1){
				$('.img').css({'left':-(size-1)*1260});
				i=size-2;
			}
			$('.img').stop().animate({left:-1260*i})
			$('.num li').eq(i).addClass('on').siblings().removeClass('on');
		}	
		/*鼠标划入圆点*/
		$('.num li').hover(function(){
			i=$(this).index();
			$('.img').stop().animate({left:-1260*i},500);
			$(this).addClass('on').siblings().removeClass('on');
		})
		
		$('.a11').click(function(){
			$(this).hide()
			$('.a22').show()
			$('.parameter_more').show();
		})
		$('.a22').click(function(){
			$(this).hide()
			$('.a11').show()
			$('.parameter_more').hide();
		})
	
		$('.list_phone li').eq(0).addClass('active')
		$('.list_phone li').eq(0).click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.cellphone').eq(0).show().siblings().hide();
		})
		$('.list_phone li').eq(1).click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.cellphone').eq(1).show().siblings().hide();
		})
		$('.list_phone li').eq(2).click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.cellphone').eq(2).show().siblings().hide();
		})
		$('.list_phone li').eq(3).click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.cellphone').eq(3).show().siblings().hide();
		})
		$('.list_phone li').eq(4).click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.cellphone').eq(4).show().siblings().hide();
		})
		$('.list_phone li').eq(5).click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.cellphone').eq(5).show().siblings().hide();
		})
		$('.list_phone li').eq(6).click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.cellphone').eq(6).show().siblings().hide();
		})
		$('.list_phone li').eq(7).click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.cellphone').eq(7).show().siblings().hide();
		})
		$('.list_phone li').eq(8).click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.cellphone').eq(8).show().siblings().hide();
		})
		$('.list_phone li').eq(9).click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.cellphone').eq(9).show().siblings().hide();
		})
		//选择手机图片
		$('.detail_silvery').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul li').eq(1).show().siblings().hide();
		})
		$('.detail_gray').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul li').eq(2).show().siblings().hide();
		})
		$('.detail_gold').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul li').eq(3).show().siblings().hide();
		})
		$('.detail_rgold').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul li').eq(4).show().siblings().hide();
		})
		
		$('.detail_silvery2').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul2 li').eq(1).show().siblings().hide();
		})
		$('.detail_gray2').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul2 li').eq(2).show().siblings().hide();
		})
		$('.detail_gold2').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul2 li').eq(3).show().siblings().hide();
		})
		$('.detail_rgold2').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul2 li').eq(4).show().siblings().hide();
		})

		$('.detail_silvery3').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul3 li').eq(1).show().siblings().hide();
		})
		$('.detail_gray3').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul3 li').eq(2).show().siblings().hide();
		})
		$('.detail_gold3').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul3 li').eq(3).show().siblings().hide();
		})
		$('.detail_rgold3').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul3 li').eq(4).show().siblings().hide();
		})
		
		$('.detail_silvery4').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul4 li').eq(1).show().siblings().hide();
		})
		$('.detail_gray4').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul4 li').eq(2).show().siblings().hide();
		})
		$('.detail_gold4').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul4 li').eq(3).show().siblings().hide();
		})
		$('.detail_rgold4').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul4 li').eq(4).show().siblings().hide();
		})
		
		$('.detail_silvery5').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul5 li').eq(1).show().siblings().hide();
		})
		$('.detail_gray5').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul5 li').eq(2).show().siblings().hide();
		})
		$('.detail_gold5').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul5 li').eq(3).show().siblings().hide();
		})
		$('.detail_rgold5').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul5 li').eq(4).show().siblings().hide();
		})
		
		$('.detail_silvery6').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul6 li').eq(1).show().siblings().hide();
		})
		$('.detail_gray6').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul6 li').eq(2).show().siblings().hide();
		})
		$('.detail_gold6').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul6 li').eq(3).show().siblings().hide();
		})
		$('.detail_rgold6').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul6 li').eq(4).show().siblings().hide();
		})
		
		$('.detail_silvery7').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul7 li').eq(1).show().siblings().hide();
		})
		$('.detail_gray7').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul7 li').eq(2).show().siblings().hide();
		})
		$('.detail_gold7').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul7 li').eq(3).show().siblings().hide();
		})
		$('.detail_rgold7').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul7 li').eq(4).show().siblings().hide();
		})
		
		$('.detail_silvery8').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul8 li').eq(1).show().siblings().hide();
		})
		$('.detail_gray8').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul8 li').eq(2).show().siblings().hide();
		})
		$('.detail_gold8').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul8 li').eq(3).show().siblings().hide();
		})
		$('.detail_rgold8').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul8 li').eq(4).show().siblings().hide();
		})
		
		$('.detail_silvery9').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul9 li').eq(1).show().siblings().hide();
		})
		$('.detail_gray9').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul9 li').eq(2).show().siblings().hide();
		})
		$('.detail_gold9').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul9 li').eq(3).show().siblings().hide();
		})
		$('.detail_rgold9').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
			$('.phoneimg_ul9 li').eq(4).show().siblings().hide();
		})
		//选择手机类型
		$('.detail_choose div').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
		})
		$('.detail_choose2 div').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
		})
		$('.detail_choose3 div').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
		})
		$('.detail_choose4 div').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
		})
		$('.detail_choose5 div').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
		})
		$('.detail_choose6 div').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
		})
		$('.detail_choose7 div').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
		})
		$('.detail_choose8 div').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
		})
		$('.detail_choose9 div').click(function(){
			$(this).addClass('choose_all').siblings().removeClass('choose_all');
		})
		//获取价格
		$('.detail_choose div').eq(0).click(function(){
			$('.detail_price').text("");
			$('.detail_price').text("1999元");
			$('.detail_choose i').text("");
			$('.detail_choose i').text("骁龙821处理器 最高主频 2.15GHz，3GB内存，64GB容量，全网通3.0");
		})
		$('.detail_choose div').eq(1).click(function(){
			$('.detail_price').text("");
			$('.detail_price').text("2299元");
			$('.detail_choose i').text("");
			$('.detail_choose i').text("骁龙821处理器 最高主频 2.15GHz，4GB内存，128GB容量，全网通3.0");
		})
		
		$('.detail_next').click(function(e){
			var Ev = e || event;
			Ev.stopPropagation();
			var x = $(this).parents(".detail");
			var obj=new goods(x.find('.detail_con').text(),x.find('.detail_price').text())
			noLike(obj);
		})
		
		$('.detail_next').click(function(){
			alert("添加购物车成功")
			$(this).addClass('choose_all');
			
			
		})

})

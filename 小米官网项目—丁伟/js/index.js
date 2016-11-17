$(function(){
	$('.close').click(function(){
		$('.fixed').hide();
		$('.hidebag').hide();
	})
	
	$('.shop_car').hover(function(){
		$('.shop_kuang').show();
		$('.shop_kuang').css('height','100px');
	},function(){
		$('.shop_kuang').hide();
		$('.shop_kuang').css('height','0px');
	})
	
	$("#Select_Region_but").on("click", function(e) { //打开【地区选择】模块
			$("#body_mask").show();
			$("#region_box").animate({
				top: "100px",
				opacity: "1"
			}, 100, "linear");
			e.stopPropagation();
		});

		function close_region() { //设置【关闭地区选择】模块效果
			$("#body_mask").hide();
			$("#region_box").animate({
				top: "-480px",
				opacity: "0"
			}, 100, "linear");
		}
		$("#close_region_but").on("click", function() {
			close_region();
		})
		$(document).on("click", function(e) { //点击非自己即关闭
			if ($(e.target).closest("#region_box").length == 0) {
				close_region();
				$("#body_mask").hide();
			}
		})
	
	
	
	$('.li>a').hover(function(){
		$(this).next().show();
	},function(){
		$('.list_phone').hide();
	})
	
	$('#input').focus(function(){
		$('.input_list').fadeToggle();
		$('#input').addClass('active');
		$('.search').addClass('active');
		$('.span1').hide();
		$('.span2').hide();
	}).blur(function(){
		$('.input_list').fadeToggle();
		$('#input').removeClass('active');
		$('.search').removeClass('active');
		
	})
	
	$('.input_list li').click(function(){
		var ming=$(this).find('b').text();
		$('#input').val(ming);
	})
	//轮播图
	var i=0;
	var clone=$('.bg_tu li').first().clone();
	$('.bg_tu').append(clone);
	var size=$('.bg_tu li').size();
	$('.btn_list li').first().addClass('light').siblings().removeClass('light');
	$('.btn_left').click(function(){
		moveL()
	})
	$('.btn_right').click(function(){
		moveR()
	})
	function moveR(){
		i++;
		if(i==size){
			$('.bg_tu').css({'left':'0px'})
			i=1;
		}
		$('.bg_tu').stop().animate({left:-995*i})
		if(i==size-1){
		$('.btn_list li').eq(0).addClass('light').siblings().removeClass('light')
		}else{
		$('.btn_list li').eq(i).addClass('light').siblings().removeClass('light');
	}
	}	
	function moveL(){
			i--;
			if(i==-1){
				$('.bg_tu').css({'left':-(size-1)*995});
				i=size-2;
		}
			$('.bg_tu').stop().animate({left:-995*i})
			$('.btn_list li').eq(i).addClass('light').siblings().removeClass('light');
	}
		//鼠标划入按钮的时候 显示相应的图片
		$('.btn_list li').hover(function(){
			i=$(this).index();
			$('.bg_tu').stop().animate({left:i*-995})
			$(this).addClass('light').siblings().removeClass('light')
		})
	    t=setInterval(function(){
						moveR();
			},10000);
	//轮播图
	var i=0;
	var clone=$('.pro_li').first().clone();
	$('.pro_bg').append(clone);
	var size=$('.pro_ul').size();
	$('.pro_l').click(function(){
		productL();
		$(this).css({
						"color": "#E0E0E0",
						"cursor": "default"
					});
		
		$(".pro_r").css({
						"color": "#BEBEBE",
						"cursor": "pointer"
				});
	})
	$('.pro_r').click(function(){
		productR();
		$(this).css({
						"color": "#E0E0E0",
						"cursor": "default"
					});
					$(".pro_l").css({
						"color": "#BEBEBE",
						"cursor": "pointer"
					});
	})
	function productR(){
		i++;
		if(i==size){
			$('.pro_bg').css({'left':'0px'})
			i=1;
		}
		$('.pro_bg').stop().animate({left:-1230*i})
		
	}
	function productL(){
			i--;
			if(i==-1){
				$('.pro_bg').css({'left':-(size-1)*1230});
				i=size-2;
		}
			$('.pro_bg').stop().animate({left:-1230*i})
			
	}
//		
//////			setInterval(function(){
//////				productR();
//////			},4000);
//////			setInterval(function(){
//////				productL();
//////			},4000);
//	
		$('.access_img li').hover(function(){
			$(this).animate({top: "-=5px"})
			$(this).addClass('shdow')
		},function(){
			$(this).animate({top: "+=5px"})
			$(this).removeClass('shdow')
		})
		
		$('.ambitus_img li').hover(function(){
			$(this).animate({top: "-=5px"})
			$(this).addClass('shdow')
		},function(){
			$(this).animate({top: "+=5px"})
			$(this).removeClass('shdow')
		})
		
		$('.smart_img li').hover(function(){
			$(this).animate({top: "-=5px"})
			$(this).addClass('shdow')
		},function(){
			$(this).animate({top: "+=5px"})
			$(this).removeClass('shdow')
		})
		
		$('.hproducts_box li').hover(function(){
			$(this).animate({top: "-=5px"})
			$(this).addClass('shdow')
		},function(){
			$(this).animate({top: "+=5px"})
			$(this).removeClass('shdow')
		})
		
		$('.movie_ul li').hover(function(){
			$(this).animate({top: "-=5px"})
			$(this).addClass('shdow')
		},function(){
			$(this).animate({top: "+=5px"})
			$(this).removeClass('shdow')
		})
		
//菜单条
		var width=$('.match_ul li a.always').outerWidth();
            var left=$('.match_ul li a.always').position().left;
            $('.lin2').css({left:left,width:width});

            $('.match_ul li a').hover(function(){
                 var width=$(this).outerWidth();
                 var left=$(this).position().left;
                 
                $('.lin2').stop().animate({left:left,width:width});
            })
            
        var width=$('.access_ul li a.alway').outerWidth();
            var left=$('.access_ul li a.alway').position().left;
            $('.lin3').css({left:left,width:width});

            $('.access_ul li a').hover(function(){
                 var width=$(this).outerWidth();
                 var left=$(this).position().left;
                 
                $('.lin3').stop().animate({left:left,width:width});
            })
            
        var width=$('.ambitus_ul li a.alwayss').outerWidth();
            var left=$('.ambitus_ul li a.alwayss').position().left;
            $('.lin4').css({left:left,width:width});

            $('.ambitus_ul li a').hover(function(){
                 var width=$(this).outerWidth();
                 var left=$(this).position().left;
                 
                $('.lin4').stop().animate({left:left,width:width});
            })
//显示文字条
	
		$('.smart_img li').hover(function(){
			$(this).find('.comment').show().animate({'height':'70px'},200)
		},function(){
			$(this).find('.comment').animate({'height':'0px'},200)
		})
		
		$('.ambitus_scroll li').hover(function(){
			$(this).find('.comment').show().animate({'height':'70px'},200)
		},function(){
			$(this).find('.comment').animate({'height':'0px'},200)
		})
		
		$('.access_scroll li').hover(function(){
			$(this).find('.comment').show().animate({'height':'70px'},200)
		},function(){
			$(this).find('.comment').animate({'height':'0px'},200)
		})
//菜单显示图片
		
		$('.line_one').hover(function(){
			$('.smart_scroll').eq(0).show().animate(1000).siblings().hide()
		})
		$('.line_two').hover(function(){
			$('.smart_scroll').eq(1).show().animate(1000).siblings().hide()
		})
		$('.line_three').hover(function(){
			$('.smart_scroll').eq(2).show().animate(1000).siblings().hide()
		})
		$('.line_furo').hover(function(){
			$('.smart_scroll').eq(3).show().animate(1000).siblings().hide()
		})
		
		
		$('.access_one').hover(function(){
			$('.access_scroll').eq(0).show().animate(1000).siblings().hide()
		})
		$('.access_two').hover(function(){
			$('.access_scroll').eq(1).show().animate(1000).siblings().hide()
		})
		$('.access_three').hover(function(){
			$('.access_scroll').eq(2).show().animate(1000).siblings().hide()
		})
		$('.access_furo').hover(function(){
			$('.access_scroll').eq(3).show().animate(1000).siblings().hide()
		})
		
		
		$('.ambitus_one').hover(function(){
			$('.ambitus_scroll').eq(0).show().animate(1000).siblings().hide()
		})
		$('.ambitus_two').hover(function(){
			$('.ambitus_scroll').eq(1).show().animate(1000).siblings().hide()
		})
		$('.ambitus_three').hover(function(){
			$('.ambitus_scroll').eq(2).show().animate(1000).siblings().hide()
		})
		$('.ambitus_furo').hover(function(){
			$('.ambitus_scroll').eq(3).show().animate(1000).siblings().hide()
		})
		$('.ambitus_five').hover(function(){
			$('.ambitus_scroll').eq(4).show().animate(1000).siblings().hide()
		})
//为你推荐
		var i=0;
		var clone=$('.recommend_li').first().clone();
		$('.recommend_bg').append(clone);
		var size=$('.recommend_ul').size();
		$('.pro_ll').click(function(){
			recommendL()
		})
		$('.pro_rr').click(function(){
			recommendR()
		})
		function recommendR(){
			i++;
			if(i==size){
				$('.recommend_bg').css({'left':'0px'})
				i=1;
			}
			$('.recommend_bg').stop().animate({left:-1230*i})
			
		}
		function recommendL(){
				i--;
				if(i==-1){
					$('.pro_bg').css({'left':-(size-1)*1230});
					i=size-2;
			}
				$('.recommend_bg').stop().animate({left:-1230*i})
		}
//内容轮播图
		var i=0;
		var clone=$('.content_book li').first().clone();
		$('.content_book').append(clone);
		var size=$('.content_book li').size();

		$('.content_btn li').first().addClass('yizhi').siblings().removeClass('yizhi');
		$('.content_left').click(function(){
			contentL()
		})
		$('.content_right').click(function(){
			contentR()
		})
		function contentR(){
			i++;
			if(i==size){
				$('.content_book').css({'left':'0px'})
				i=1;
			}
			$('.content_book').stop().animate({left:-297*i})
			if(i==size-1){
			$('.content_btn li').eq(0).addClass('yizhi').siblings().removeClass('yizhi')
			}else{
			$('.content_btn li').eq(i).addClass('yizhi').siblings().removeClass('yizhi');
		}
		}	
		function contentL(){
				i--;
				if(i==-1){
					$('.content_book').css({'left':-(size-1)*297});
					i=size-2;
			}
				$('.content_book').stop().animate({left:-297*i})
				$('.content_btn li').eq(i).addClass('yizhi').siblings().removeClass('yizhi');
		}
			//鼠标划入按钮的时候 显示相应的图片
			$('.content_btn li').click(function(){
				i=$(this).index();
				$('.content_book').stop().animate({left:i*-297})
				$(this).addClass('yizhi').siblings().removeClass('yizhi')
			})

		$('.content_li').hover(function(){
			$(this).find('.content_left').show()
			$(this).find('.content_right').show();
		},function(){
			$(this).find('.content_left').hide()
			$(this).find('.content_right').hide();
		})


	$('.sex').hover(function(){
		$(this).children('.tree').show();
	},function(){
		$(this).children('.tree').hide();
	})









})

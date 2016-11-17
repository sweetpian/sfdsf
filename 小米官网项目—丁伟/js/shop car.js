$(function(){
	$('.safeguard a').click(function(){
		$('.hidebag').show();
		$('.tanchu').show();
	})
	$('.tanchu_close').hover(function(){
		$(this).hide();
		$('.tanchu_top img').show();
	})
	$('.tanchu_top img').click(function(){
		$('.hidebag').hide();
		$('.tanchu').hide();
	})
	
	$('.more_pict li').hover(function(){
		$(this).find('.more_kuang').show();
	},function(){
		$(this).find('.more_kuang').hide();
	})
	
	$('.kuang3 img').click(function(){
		if($('.kuang3 img').css('display')=='none'){
			$('.kuang3 img').sildeToggle();
		}else{
			$('.kuang3 img').sildeToggle();
		}
	})
	
	
	
	
	
	
	
	
	
})

$(function(){
	
	$('#input1').blur(function(){
		var value=$('#input1').val();
		if(value==""){
			$('.nonum').show();
			$('#input1').addClass('on')
		}else{
			$('.nonum').hide();
			$('#input1').removeClass('on')
		}
	})
	$('#input2').blur(function(){
		var yzm=$('#input2').val();
		if(yzm==""){
			$('.yanzheng').show();
			$('#input2').addClass('on')
		}else{
			$('.yanzheng').hide();
			$('#input2').removeClass('on')
	    }
	})
	
	$('.select li').hover(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	
	$('.span2').click(function(){
		if($('.select').css('display')=='none'){
			$('.select').show();
		}else{
			$('.select').hide();
		}
	})
	
	
	$('.select li').click(function(){
		$('.span1').text("")
		var name=$(this).find('b').text();
		var value=$(this).find('span').text();
		$('.span1').text(''+name+'('+value+')')
	})
	$('.select li').eq(0).click(function(){
		$('.span1').text('中国(+86)')
	})
	
	
	
	
	
})

$(document).ready(function() {


	$(document).ready(function(){
      $(".main").onepage_scroll({
        sectionContainer: "section",
        easing: "ease-in-out", 
        responsiveFallback: false,
        animationTime: 400,  
        pagination: true
      });
	});
	$('#linked').hover(function() {
		$("#linked").css("top","5");
  		},function(){
  		$("#linked").css("top","0");
	});
	$('#face').hover(function() {
		$("#face").css("top","5");
  		},function(){
  		$("#face").css("top","0");
	});
	$('#twit').hover(function() {
		$("#twit").css("top","5");
  		},function(){
  		$("#twit").css("top","0");
	});
	$('#sky').hover(function() {
		$("#sky").css("top","5");
  		},function(){
  		$("#sky").css("top","0");
	});
	$('#top').click(function() {
		$(".main").moveTo(1);
	});
	$('#button1').click(function() {
		$(".main").moveTo(4);
	});
	$('#down').click(function(){
		$(".main").moveDown();

	});
	$('#top').hover(function() {
		$('#message2').text("GO BEARS!");
		$('#background2').css('height', '200px');
		$('#cal-logo').fadeIn('fast');
		},function() {
		$('#message2').text("I STUDY COMPUTER SCIENCE AT UC BERKELEY");
		$('#cal-logo').fadeOut("fast");
	});

	var items = $('#carousel').children().length;
	var curr_item = 1;
	$('#carousel-next').click(function(){
		if (curr_item < items) {
			var width = $(window).width();
			var next_item = curr_item+1;
			var next = $('.carousel-item:nth-child('+next_item+')');
			var current = $('.carousel-item:nth-child('+curr_item+')');
			next.css('left', width).show();
			current.stop().animate({left: '-'+width+'px'}, 400, function() {
				$(this).hide();
			});
			next.stop().animate({left: '0px'}, 400);
			curr_item++;
		}
	});

	$('.carousel-item:nth-child(1)').show();
	$('#carousel-prev').click(function() {
		if (curr_item > 1) {
			var width = $(window).width();
			var next_item = curr_item-1;
			var next = $('.carousel-item:nth-child('+next_item+')');
			var current = $('.carousel-item:nth-child('+curr_item+')');
			next.css('left', '-'+width+'px').show();
			current.stop().animate({left: width+'px'}, 400, function() {
				$(this).hide();
			});
			next.stop().animate({left: '0px'}, 400);
			curr_item--;
		}
	});

	var proj_items = $('#proj1').children().length;
	var proj_curr_item = 1;
	$('#proj-next').click(function(){
		if (proj_curr_item < proj_items) {
			var width = $(window).width();
			var proj_next_item = proj_curr_item+1;
			var proj_next = $('.proj-item:nth-child('+proj_next_item+')');
			var proj_current = $('.proj-item:nth-child('+proj_curr_item+')');
			proj_next.css('left', width).show();
			proj_current.stop().animate({left: '-'+width+'px'}, 400, function() {
				$(this).hide();
			});
			proj_next.stop().animate({left: '0px'}, 400);
			proj_curr_item++;
		}
	});

	$('.proj-item:nth-child(1)').show();
	$('#proj-prev').click(function() {
		if (proj_curr_item > 1) {
			var width = $(window).width();
			var proj_next_item = proj_curr_item-1;
			var proj_next = $('.proj-item:nth-child('+proj_next_item+')');
			var proj_current = $('.proj-item:nth-child('+proj_curr_item+')');
			proj_next.css('left', '-'+width+'px').show();
			proj_current.stop().animate({left: width+'px'}, 400, function() {
				$(this).hide();
			});
			proj_next.stop().animate({left: '0px'}, 400);
			proj_curr_item--;
		}
	});

});
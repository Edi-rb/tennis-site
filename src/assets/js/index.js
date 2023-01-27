
(function($) { "use strict";
	// Slider UI
	var slideCount =  $(".rks-lider .var-rks-lider__list li").length;
	var slideWidth =  $(".rks-lider .var-rks-lider__list li").width();
	var slideHeight =  $(".rks-lider .var-rks-lider__list li").height();
	var slideUlWidth =  slideCount * slideWidth;

	var slideDotsCount = $('.dot-list li').length;

	$(".rks-lider .var-rks-lider__list li:last-child").prependTo($(".rks-lider .var-rks-lider__list"));

	function moveLeft() {
		$(".rks-lider .var-rks-lider__list").stop().animate({
		  left: + slideWidth
		},700, function() {
			var $activeItemsld = $(".rks-lider .var-rks-lider__list li:last-child");

			$activeItemsld.prependTo($(".rks-lider .var-rks-lider__list"));
			$(".rks-lider .var-rks-lider__list").css("left","");
			getDot();
		});
	}

	function moveRight() {
	    $(".rks-lider .var-rks-lider__list").stop().animate({
			left: - slideWidth
	    },700, function() {
			$(".rks-lider .var-rks-lider__list li:first-child").appendTo($(".rks-lider .var-rks-lider__list"));
			$(".rks-lider .var-rks-lider__list").css("left","");
			getDot();
	    });
	}

	function getDot() {
  		var $indice = $(".var-rks-lider__list li:nth-child(2)").attr('data-numindex'),
  		$dotList = $('.dot-list li');
		console.log($indice);
  		$dotList.removeClass('active');
		$dotList.eq($indice - 1).addClass('active');
	}

	$(".control__next").on("click",function(){
		moveRight();
	});

	$(".control__prev").on("click",function(){
		moveLeft();
	});

  	// Scroll Event header
	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});

	// Mobile menu
	$('#btn-mbmenu').on('click', function () {
		var $menuMobile = $('#mb-menu');
		console.log('dwde');

		if ($(this).hasClass('collapsed')){
			$(this).removeClass('collapsed');
			$menuMobile.removeClass('bg-whitemenu');
		} else {
			$(this).addClass('collapsed');
			$menuMobile.addClass('bg-whitemenu');
		}
	});

})(jQuery);


$(function () {
	$('.hero__inner').slick({
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		infinite: false,

	});

	$('.news__slider').slick({
		nextArrow: '<button type="button" class="slick-btn slick-next slider-news-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev slider-news-prev"></button>',
		infinite: false,

	});
	
	$('select').styler();

	$('.menu__burger').on('click', function(){
		$('.menu__list').slideToggle();
	});

}); 
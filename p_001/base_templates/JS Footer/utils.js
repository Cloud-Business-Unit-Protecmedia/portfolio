/* CARRUSELES */
$( document ).ready(function() {
	if(isMobileEnvironment){
		$(".bxslider .noticias").bxSlider({
		    mode:'horizontal',
		    speed: 1000,
		    controls:true,
		    pager:false,
		    auto:false,
		    pause: 8000,
		    autoControls: false,
		    infiniteLoop: false,
		    hideControlOnEnd: true,
		    slideWidth: 350,
		    slideMargin: 0,
		    moveSlides:1,
		    minSlides:1,
		    maxSlides:16,
		    nextText: '',
		    prevText: ''
		});
	}
	else{
		$(".bxslider .noticias").bxSlider({
		    mode:'horizontal',
		    speed: 1000,
		    controls:true,
		    pager:false,
		    auto:false,
		    pause: 8000,
		    autoControls: false,
		    infiniteLoop: false,
		    hideControlOnEnd: true,
		    slideWidth: 311,
		    slideMargin: 12,
		    moveSlides:4,
		    minSlides:4,
		    maxSlides:16,
		    nextText: '',
		    prevText: ''
		});
	}
});
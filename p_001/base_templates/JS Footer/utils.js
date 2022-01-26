/* CARRUSELES */
/* CARRUSEL OPINION Y SENADO*/
$(document).ready(function() {
    if (isMobileEnvironment) {
        $(".r05 .bxslider .noticias, .r10 .bxslider .noticias").bxSlider({
            mode: 'horizontal',
            speed: 1000,
            controls: true,
            pager: false,
            auto: false,
            pause: 8000,
            autoControls: false,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 350,
            slideMargin: 0,
            moveSlides: 1,
            minSlides: 1,
            maxSlides: 16,
            nextText: '',
            prevText: ''
        });
    } else {
        $(".r05 .bxslider .noticias, .r10 .bxslider .noticias").bxSlider({
            mode: 'horizontal',
            speed: 1000,
            controls: true,
            pager: false,
            auto: false,
            pause: 8000,
            autoControls: false,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 311,
            slideMargin: 12,
            moveSlides: 4,
            minSlides: 4,
            maxSlides: 16,
            nextText: '',
            prevText: ''
        });
    }
});


/* CARRUSEL MULTIMEDIA */


$(document).ready(function() {
    if (isMobileEnvironment) {
        $(".r08 .bxslider .noticias").bxSlider({
            mode: 'horizontal',
            speed: 1000,
            controls: true,
            pager: false,
            auto: false,
            pause: 8000,
            autoControls: false,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 350,
            slideMargin: 0,
            moveSlides: 1,
            minSlides: 1,
            maxSlides: 9,
            nextText: '',
            prevText: ''
        });
    } else {
        $(".r08 .bxslider .noticias").bxSlider({
            mode: 'horizontal',
            speed: 1000,
            controls: true,
            pager: false,
            auto: false,
            pause: 8000,
            autoControls: false,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 311,
            slideMargin: 12,
            moveSlides: 3,
            minSlides: 1,
            maxSlides: 9,
            nextText: '',
            prevText: '',
        });
    }
});


/*
 responsive: true,
          hideControlOnEnd: true,
adaptiveHeight: true,
          shrinkItems: true,

		onSlideBefore: function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
 	$('.active-slide').removeClass('active-slide');
     $('.r08 .bxslider .noticias>article').eq(currentSlideHtmlObject+2).addClass('active-slide') 
let currentSlideHtmlObject =+ 2;
      console.log("currentSlideHtmlObject"+currentSlideHtmlObject);
      console.log("totalSlideQty"+totalSlideQty);
	console.log("currentSlideNumber"+currentSlideNumber);
    },

		 onSliderLoad: function() {
			$('.active-slide').removeClass('active-slide');
		      $('.r08 .bxslider .noticias>article').eq(0).addClass('active-slide')
		    },


		onSlideAfter: function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
		      console.log(currentSlideHtmlObject);
		$('.active-slide').removeClass('active-slide');
		      $('.r08 .bxslider .noticias>article').eq(currentSlideHtmlObject +2).addClass('active-slide')
		    },


*/


/*
$( document ).ready(function() {
	if(isMobileEnvironment){
		$(".r08 .bxslider .noticias").bxSlider({
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
		$(".r08 .bxslider .noticias").bxSlider({
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
		    prevText: '',
useCSS: true,


		 onSlideAfter: function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
		      console.log(currentSlideHtmlObject);
		      $('.active-slide').removeClass('active-slide');
		      $('.r08 .bxslider .noticias>article').eq(currentSlideHtmlObject + 4).addClass('active-slide')
		    },
		 onSliderLoad: function() {
		      $('.r08 .bxslider .noticias>article').eq(1).addClass('active-slide')
		    },



		});
	}
});

*/
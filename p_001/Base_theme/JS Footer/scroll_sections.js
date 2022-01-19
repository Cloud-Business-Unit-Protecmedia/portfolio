/*----scroll_sections----*/
function infinityScroll () {
	var articlesFinish = $("footer#iter-footer-wrapper").offset().top;
	var triggerHeight = (articlesFinish);
	var bottomScrollNext = $(document).scrollTop() + $(window).height();
setTimeout(function (){
	if(triggerHeight < bottomScrollNext && $(".loading-animation").length == 0 && $(".more-button.disable-button").length == 0) {  
		//pedimos los siguientes contenidos
		$('.more-button').trigger('click');
	}
}, 2000);
}

jQuery(document).ready(function() {
/* setTimeout(function (){ */
	if($(".more-button").length > 0){
		jQuery(window).scroll(infinityScroll);	
	}
/* }, 1000); */
});
/*----utils----*/
jQuery(".c_001_001.carrusel .noticias").bxSlider({
        mode:'horizontal',
            speed: 1000,
            controls:true,
            pager:false,
            auto:false,
            pause: 8000,
            autoControls: false,
            infiniteLoop: false,
            hideControlOnEnd: true,
            slideWidth: 375,
            moveSlides:1,
            minSlides:1,
            maxSlides:40,
            nextText: '',
            prevText: ''
    });

function abrir_cerrar_masvideos(){
	
	if(jQuery(".c_001_001.noticias_masvideos2.column4").hasClass( "close" )){
		jQuery(".c_001_001.noticias_masvideos2.column4").removeClass("close");
		jQuery(".c_001_001.noticias_masvideos2.column4").addClass("open");
	}
	else{
		jQuery(".c_001_001.noticias_masvideos2.column4").removeClass("open");
		jQuery(".c_001_001.noticias_masvideos2.column4").addClass("close");
	}


 

}
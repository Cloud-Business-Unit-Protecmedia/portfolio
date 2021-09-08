/*----utils----*/

function popUpImages() {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementsByClassName("caption");
    var images = document.querySelectorAll(".art-img img")
    images.forEach(function(element) {
        element.onclick = showModal;
       
    });
    
    modalImg.onclick = showModal;
    function showModal() {
      modal.style.display = "block";
      modalImg.src = this.src;
      modalImg.srcset = this.srcset;
      captionText.innerHTML = this.alt;
    }
    
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    }
    
}
/*----sharethis----*/
function sharethisButtons(){
	var obj = document.createElement('script');
	obj.type = 'text/javascript';
	obj.async = true;
	obj.src = 'https://platform-api.sharethis.com/js/sharethis.js#property=5e660ac319a1e200129b20d6&product=inline-share-buttons'
	document.getElementsByTagName('head')[0].appendChild(obj);
}
/*----google Analytics----*/
function googleAnalytics(){
	var obj = document.createElement('script');
	obj.async = true;
	obj.src = 'https://www.googletagmanager.com/gtag/js?id=UA-23981916-1'
	document.getElementsByTagName('head')[0].appendChild(obj);
}
/*----scrollTo----*/
function scrollTo(){
	console.log("scrollTo")
	$('.next-button').click(function(){
		$("html,body").animate({scrollTop:$('.pagSection').offset().top-150},500);
	});
	$('.prev-button').click(function(){
		$("html,body").animate({scrollTop:$('.pagSection').offset().top-150},500);
	});
}

function init(){
	sharethisButtons();
	console.log("buttons");
	googleAnalytics();
	console.log("GA");
	scrollTo();
	console.log("scroll");
	popUpImages();
	console.log("popUp");
}
window.onload = init;
  

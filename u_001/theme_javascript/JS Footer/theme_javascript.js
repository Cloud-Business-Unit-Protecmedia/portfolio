/*----theme_javascript----*/
function startTheme () {
	jQuery(window).scroll(switchHeader);
	mobileMenuInit();
	initCalculateDate();
	template136();
}

var headerHeight = "auto";
var calculateTime = true;

function switchHeader () {
	var theScroll=$(window).scrollTop();
	var startScrollHeight= jQuery(".container-header").offset().top + jQuery(".container-header").height();
	
	if(!jQuery(".container-header .floating-header").hasClass("scroll")){
		headerHeight = jQuery(".container-header").height() + "px";
	}
		
	jQuery(".container-header").css("height",headerHeight);

	if (theScroll>startScrollHeight){
		jQuery(".container-floating-header .floating-header").addClass("scroll");
	}else{
		jQuery(".container-floating-header .floating-header").removeClass("scroll");
		jQuery(".container-header").css("height","auto");
	}
	
	/* ADD CLASS float-with-header to the selected element */
	if(jQuery(".float-with-header").size() > 0){
		var startCompanionScrollHeight= jQuery(".float-with-header").offset().top - 46 ;
		if(!jQuery(".float-with-header").hasClass("scroll")){
			companionHeight = jQuery(".float-with-header").height() + "px";
		}
		
		jQuery(".float-with-header").css("height",companionHeight);
		
		if (theScroll>startCompanionScrollHeight){
			jQuery(".float-with-header").addClass("scroll");
			
		}else{
			jQuery(".float-with-header").removeClass("scroll");
			jQuery(".float-with-header").css("height","auto");
		}
	
	}
	
}

function mobileMenuInit(){
	jQuery(".container-header .search-icon").bind("click",function(){
		jQuery(".container-menu").addClass("active");
	});
	
	jQuery(".container-floating-header .mobile-menu").bind("click",function(){
		jQuery(".container-menu").addClass("active");
	});
	
	jQuery(".container-menu .close-menu").bind("click",function(){
		jQuery(".container-menu").removeClass("active");
	});
}

function initCalculateDate() {
// console.log('calculateTime', calculateTime);
	if (calculateTime) {
		$(".calculateDate.info").each(function(){ 
			if ($(this).attr('data-date') != undefined && 
				$(this).attr('data-dateEnd') != undefined){
					var dataDate 	= $(this).attr('data-date');
					var dateEnd 	= $(this).attr('data-dateEnd');
				// console.log('data-date', dataDate);
				// console.log('data-dateEnd', dateEnd);

				var fClient = moment().format("YYYY/MM/DD HH:mm:ss");
		  		var fClientUct = moment.utc().format('YYYY/MM/DD HH:mm:ss');
				var fArticleUtc = moment.utc(dataDate).format('YYYY/MM/DD HH:mm:ss');  /*fecha articulo recuperada parseada a moment*/
				var diffMinutes = moment(fClientUct).diff(moment(fArticleUtc),'minutes');
				// console.log('diffMinutes', diffMinutes);
				// var fArticleFinal = "holaaaaa";

				if (diffMinutes < 60) {
					// console.log('diffMinutes < 60', diffMinutes);
					if (diffMinutes < 2){
						$(this).children(".date").html("<span>" + IterConstants.fromString + " " + diffMinutes + " " + IterConstants.minute +"</span>");
					}
					else{ 
						$(this).children(".date").html("<span>" + IterConstants.fromString + " " + diffMinutes + " " + IterConstants.minutes+"</span>");
					}
				}
				else if (diffMinutes > 60) {
					// console.log('diffMinutes > 60', diffMinutes);
					var numHours =  Math.floor(diffMinutes/60);
					if (numHours < 24) {
						$(this).children(".date").html("<span>" + moment.utc(dataDate).format('HH:mm') +"</span>");
						
					}
					else if (numHours < 48){
						$(this).children(".date").html("<span>" + IterConstants.yesterdayString + "</span>");
					}
					else if(numHours > 48) {
						$(this).children(".date").html("<span>" + moment.utc(dataDate).format('DD-MM-YYYY') + "</span>");
					}
				}
			}
		});
	}
}



function template136 () {
	$(".iter-tabview-content").each(function(){
		$(this).find(".IMG_TIT_RANKING .number").each(function (index){
			$(this).html(index + 1);
		})	
	});
}

jQuery(document).ready(startTheme);






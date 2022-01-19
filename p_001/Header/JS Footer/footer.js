/*----footer----*/
 function startTheme () {
	jQuery(window).scroll(switchHeader);
	mobileMenuInit();
	$(".updatedSiteDate").html("<b>" + $(".updatedSiteDate").text().replace(",", "</b><br>"));
	jQuery(".header_js .search-icon").bind("click",function(){
		if(jQuery(this).hasClass("active_search")){
			jQuery('.header_js .advanced-search-portlet').hide("slide", { direction: "right" }, 500);
		}
		else{
			jQuery('.header_js .advanced-search-portlet').show("slide", { direction: "right" }, 500);
		}
		jQuery(this).toggleClass("active_search");
	});
	jQuery(".header_js .open-menu").bind("click",function(){
		jQuery('.menu-portlet.main-navigation').show("slide", { direction: "left" }, 500);
		jQuery(".close-menu").show(800);
	});
	jQuery(".close-menu").bind("click",function(){
		jQuery('.menu-portlet.main-navigation').hide("slide", { direction: "left" }, 500);
		jQuery(this).hide();
	});	
}
var headerHeight = jQuery(".container-header").height();
function switchHeader () {
	if($(document).height() > 700){
		var theScroll=$(window).scrollTop();
		if (theScroll>headerHeight){
			jQuery(".header_js").addClass("scroll");
			jQuery(".iter-content-wrapper").css('margin-top',190);
		}else{
			jQuery(".header_js").removeClass("scroll");
			jQuery(".iter-content-wrapper").css('margin-top',0);
		}
	}
}
function mobileMenuInit(){
	jQuery(".container-header .search-icon").bind("click",function(){
		jQuery(".header_js").addClass("active_search");
		//jQuery(".ly-theme-7-header .container-menu .advanced-search-portlet .iter-field-element input").focus();
		jQuery(".header_js .advanced-search-portlet .iter-field-element input").focus();
	});
	jQuery(".container-header .mobile-menu").bind("click",function(){
		jQuery(".header_js").addClass("active_search");
	});
	jQuery(".container-menu .close-menu").bind("click",function(){
		jQuery(".header_js").removeClass("active_search");
	});
}
jQuery(document).ready(startTheme);
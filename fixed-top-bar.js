function fixedMenuTop(){
	"use strict";
	var lastScrollTop = 0;
	$(window).scroll(function fixedTopBar(){
	if ((/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera) && $(window).width() < 767) {
		 var st = $(this).scrollTop();
		 if (st > lastScrollTop){
		   $('.site-header, .site-header__lower-header').removeClass('fixed');
		 } else {
			changeClassOnScroll('.site-header__lower-header', 'fixed');
			changeClassOnScroll('.site-header', 'fixed');
		 }
		lastScrollTop = st;
	} else {
		changeClassOnScroll('.site-header__lower-header', 'fixed');
		changeClassOnScroll('.site-header', 'fixed');
	}
	});
}
function changeClassOnScroll(domName, className){
	"use strict";
	if ($(window).scrollTop() >= ($(document).height() - $(window).height())*0.02){
	 $(domName).addClass(className);
	} else {
	 $(domName).removeClass(className);
	}
}
fixedMenuTop();

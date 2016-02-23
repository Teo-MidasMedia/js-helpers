//Calculate paddings at runtime
	function calculatePercentage(el, target, percentage){
		var elem = $(el);
		var target = $(target);
		function updatePercentage(){
		  var targetWidth = target.outerWidth();
		  elem.css({
			 'padding-left': (targetWidth / 100) *percentage,
			 'padding-right': (targetWidth / 100) *percentage 
		  });
		}
		updatePercentage();
		$(window).on('resize', debounce(updatePercentage, 250));
	}
	calculatePercentage('.u-pad-1-12', '.site-wrap', 8.3333);
	
	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

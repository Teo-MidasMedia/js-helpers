//Calculate paddings at runtime
function calculatePercentage(el, target, percentage){
    var elem = $(el);
    var targetWidth = $(target).outerWidth();

    elem.css({
       'padding-left': (targetWidth / 100) *percentage,
       'padding-right': (targetWidth / 100) *percentage 
    });
}
calculatePercentage('.u-pad-1-12', '.site-wrap', 8.3333);
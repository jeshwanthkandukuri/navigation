$(document).ready(function () {
	$('.list-item').hover(
		function () {
			$(this).find('.content').stop().slideDown(200);},
		function(){	
			$(this).find('.content').stop().slideUp(200);
		}
		);
});
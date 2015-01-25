$(document).ready(function() {
	var documentHeight = $(document).height();
	var viewportHeight = $(window).height();

	$(".left-lines-container").css("height", documentHeight);
	$(".right-lines-container").css("height", documentHeight-viewportHeight/2);

	$(window).on('resize', function(){
		var win = $(this);
		
		var documentHeight = $(document).height();
		var viewportHeight = win.height();

		$(".left-lines-container").css("height", documentHeight);
		$(".right-lines-container").css("height", documentHeight-viewportHeight/2); 
	}); 
});
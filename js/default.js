$(document).ready(function() {
	var documentHeight = $(document).height();
	var viewportHeight = $(window).height();

	$(".left-lines-container").css("height", documentHeight);
	$(".right-top-lines-container").css("height", documentHeight);
	$(".right-lines-container").css("height", documentHeight-viewportHeight/2);

	$(window).on('resize', function(){
		var win = $(this);
		
		var documentHeight = $(document).height();
		var viewportHeight = win.height();

		$(".left-lines-container").css("height", documentHeight);
		$(".right-top-lines-container").css("height", documentHeight);
		$(".right-lines-container").css("height", documentHeight-viewportHeight/2); 
	});

	$(".detail").hover(
		function(){
			$(".right-top-line").css("stroke-width", 3);
			$(".right-top-line").css("stroke-opacity", 1);
			$(".left-line").css("stroke-width", 3);
			$(".left-line").css("stroke-opacity", 1);
		},
		function(){
			$(".right-top-line").css("stroke-width", 1);
			$(".right-top-line").css("stroke-opacity", .2);
			$(".left-line").css("stroke-width", 1);
			$(".left-line").css("stroke-opacity", .2);
		}
	);
	$(".code").hover(
		function(){
			$(".right-line").css("stroke-width", 3);
			$(".right-line").css("stroke-opacity", 1);
			$(".left-line").css("stroke-width", 3);
			$(".left-line").css("stroke-opacity", 1);
		},
		function(){
			$(".right-line").css("stroke-width", 1);
			$(".right-line").css("stroke-opacity", .2);
			$(".left-line").css("stroke-width", 1);
			$(".left-line").css("stroke-opacity", .2);
		}
	);  
	
	$(".code-1").hover(
		function(){
			$(".right-line").css("stroke-width", 3);
			$(".right-line").css("stroke-opacity", 1);
			$(".right-top-line").css("stroke-width", 3);
			$(".right-top-line").css("stroke-opacity", 1);
			$(".left-line").css("stroke-width", 3);
			$(".left-line").css("stroke-opacity", 1);
		},
		function(){
			$(".right-line").css("stroke-width", 1);
			$(".right-line").css("stroke-opacity", .2);
			$(".right-top-line").css("stroke-width", 1);
			$(".right-top-line").css("stroke-opacity", .2);
			$(".left-line").css("stroke-width", 1);
			$(".left-line").css("stroke-opacity", .2);
		}
	);  
});
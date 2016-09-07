//Just fast javascript to make it functional,
//will change it to one function for every section later 

	$(document).ready(function(){
			$("#About").click(function() {
	    		$('html,body').animate({
	        	scrollTop: $(".first-part").offset().top},
	        		'slow');
	});
	});
	$(document).ready(function(){
			$("#Portfolio").click(function() {
	    		$('html,body').animate({
	        	scrollTop: $(".second-part").offset().top},
	        		'slow');
	});
	});
	$(document).ready(function(){
			$("#Contact").click(function() {
	    		$('html,body').animate({
	        	scrollTop: $(".third-part").offset().top},
	        		'slow');
	});
	});
	$(document).ready(function(){
			$("#arrow-down").click(function() {
	    		$('html,body').animate({
	        	scrollTop: $(".first-part").offset().top},
	        		'slow');
	});
	});

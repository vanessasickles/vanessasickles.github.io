
// Cute greeting based on the time of day.
var today = new Date(); // Create a new date object
var hourNow = today.getHours(); // Find the current hour
var greeting

if (hourNow > 18) {
	greeting = 'Good evening';
} else if (hourNow > 12) {
	greeting = 'Good afternoon';
} else if (hourNow > 0) {
	greeting = 'Good morning';
} else {
	greeting = 'Welcome';
};

console.log(greeting);



$(document).ready(function() {
	$(".show_all").addClass("activated") // On page load, show the "all" button as selected

	/* on-load animations */
	$(".latest").addClass("swipein")
	$("header").addClass("fadein")
	$(".gallery").addClass("fadein")
});

// Gallery filtering buttons
$(".show_all").click(function(){ // test to see if it's already selected. if not, select it; if so, do nothing. Keeps selected button from flashing when it's clicked while already selected
	if (!$(this).hasClass("activated")) { 
		$(".button").removeClass("activated") 
		$(this).addClass("activated") 
	} 
	else {  	 	}

	$(".item").show() // show all items
});

$(".show_interactive").click(function(){
	if (!$(this).hasClass("activated")) {
		$(".button").removeClass("activated")
		$(this).addClass("activated")
	} 
	else {  	 	}
	$(".item").hide()
	$(".item.interactive").show()
});

$(".show_branding").click(function(){
	if (!$(this).hasClass("activated")) {
		$(".button").removeClass("activated")
		$(this).addClass("activated")
	} 
	else {  	 	}
	$(".item").hide()
	$(".item.branding").show()
});

$(".show_animation").click(function(){
	if (!$(this).hasClass("activated")) {
		$(".button").removeClass("activated")
		$(this).addClass("activated")
	} 
	else {  	 	}
	$(".item").hide()
	$(".item.animation").show()
});
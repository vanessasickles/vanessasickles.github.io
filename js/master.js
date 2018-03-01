// first scroll animation at 330: part list items

// var controller = new ScrollMagic.Controller();
// new ScrollMagic.Scene({triggerElement:'header'}).setClassToggle("nav ul li:nth-child(2)","lipart").addTo(controller);





/* THINGS TO SHOUT AT JON ABOUT 

- resize + video being a little weird
- scrollmagic
- lower load times? how to optimize images and/or js?

- cleaner code?

*/








// ON-LOAD  FUNCTIONS
$(document).ready(function() {
	// select "all" at load
	$(".show_all").addClass("activated") 

	// on load animations
	$("nav").addClass("swipeintop")
	$(".latest").addClass("swipeinleft")
	$(".hero").addClass("fadein")
	$(".gallery").addClass("fadein")
	$("#intro p:nth-child(1)").addClass("swipeinleft").css({"animation-delay":".25s"})
	$("#intro h1").addClass("swipeinleft").css({"animation-delay":".5s"})
	$("#intro p:nth-child(3)").addClass("swipeinleft").css({"animation-delay":".75s"})
});

if ($(window).width() < 450) {
	document.getElementById("overfishing").innerHTML = " ";
}

$(window).resize(function(){
	if ($(window).width() < 450) {
	document.getElementById("overfishing").innerHTML = " ";
}
	else(
		document.getElementById("overfishing").innerHTML = '<video autoplay loop="true"><source src="images/overfishingpreview.mp4" type="video/mp4"></video>')
})




// Scroll-tos, for your convenience!
$("nav a").click(function(){
	$(window).scrollTo(this.hash,750,{offset:-58, easing:'swing'})
});




// HOVER ANIMATIONS
$(".item").hover(
	function(){
		$(this).find(".iname").css({"padding-left": "150px"});},

	function(){
		$(this).find(".iname").css({"padding-left":"20px"});}
	);

$(".hero").hover(
	function(){
		$(this).find(".latest").css({"padding-left": "150px"});},

	function(){
		$(this).find(".latest").css({"padding-left":"40px"});}
	);

	

// Gallery filtering buttons
$(".show_all").click(function(){ // test to see if it's already selected. if not, select it; if so, do nothing. Keeps selected button from flashing when it's clicked while already selected
	if (!$(this).hasClass("activated")) { 
		$(".button").removeClass("activated") 
		$(this).addClass("activated") 
	} 
	else {false}

	$(".item").show() // show all items
});

$(".show_interactive").click(function(){
	if (!$(this).hasClass("activated")) {
		$(".button").removeClass("activated")
		$(this).addClass("activated")
	} 
	else {false}
	$(".item").hide()
	$(".item.interactive").show()
});

$(".show_branding").click(function(){
	if (!$(this).hasClass("activated")) {
		$(".button").removeClass("activated")
		$(this).addClass("activated")
	} 
	else {false}
	$(".item").hide()
	$(".item.branding").show()
});

$(".show_animation").click(function(){
	if (!$(this).hasClass("activated")) {
		$(".button").removeClass("activated")
		$(this).addClass("activated")
	} 
	else {false}
	$(".item").hide()
	$(".item.animation").show()
});



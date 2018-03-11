
var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({triggerElement:'#intro'}).setClassToggle("nav ul li:nth-child(1)","lipart").addTo(controller);





/* THINGS TO ASK JON ABOUT

- scrollmagic thing above
- lower load times? what's the best way to optimize images/js?

- cleaner code? any way to organize code to look better to employers?

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



// if ($(window).width() < 450) {
// 	document.getElementById("overfishing").innerHTML = " ";
// }

// $(window).resize(function(){
// 	if ($(window).width() < 450) {
// 	$("#overfishing").innerHTML = " ";
// }
// 	else(
// 		$("#overfishing").innerHTML = '<video autoplay loop="true"><source src="images/overfishingpreview.mp4" type="video/mp4"></video>')
// })




// Scroll-tos, for your convenience!
$("nav a").click(function(){
	$(window).scrollTo(this.hash,750,{offset:-58, easing:'swing'})
});




// HOVER ANIMATIONS

$('.item').on('mouseenter',enterme);
$('.item').on('mouseleave',leaveme);

function enterme(event){
	$(event.currentTarget).find(".iname").css({"padding-left": "150px"})
}

function leaveme(event){
	$(event.currentTarget).find(".iname").css({"padding-left": "20px"})
}


$(window).resize(function() {
	if ($(window).width() < 650) {
		$("#overfishing video").remove();
	}

	else {
		$("#overfishing").html('<video autoplay loop="true"><source src="images/overfishingpreview.mp4" type="video/mp4"></video>');
	}

	if ($(window).width() > 768) {
		$('.item').on('mouseenter',enterme);
		$('.item').on('mouseleave',leaveme);
	}

	else {
		$('.item').off('mouseenter',enterme);
		$('.item').off('mouseleave',leaveme);
	}

})

$(window).resize()

	

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


// Gallery item box click

$(".item").click(function(){
	window.location=$(this).find("a").attr("href");
	return false;
})


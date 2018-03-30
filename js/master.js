
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


<<<<<<< HEAD
=======

>>>>>>> cbc73999a9b0ba5ae4a8b7eaf4f7234d5147c3ee
// Scroll-tos, for your convenience!
$("nav a").click(function(){
	$(window).scrollTo(this.hash,750,{offset:-58, easing:'swing'})
});



<<<<<<< HEAD
=======
// nav effect
var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({triggerElement:'.s3'}).setClassToggle("nav h1","showname").addTo(controller);




>>>>>>> cbc73999a9b0ba5ae4a8b7eaf4f7234d5147c3ee
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

<<<<<<< HEAD
// Gallery filtering buttons
$(".show_all").click(function(){ // test to see if it's already selected. if not, select it; if so, do nothing. Keeps selected button from flashing when it's clicked while already selected
	if (!$(this).hasClass("activated")) { 
		$(".button").removeClass("activated") 
		$(this).addClass("activated") 
	} 
	else {false}

	$(".item").show() // show all items
});
=======

>>>>>>> cbc73999a9b0ba5ae4a8b7eaf4f7234d5147c3ee


// Gallery filtering buttons
var button = $(".button")
button.click(function(){
	var clicked = $(this).attr("class").split("_")[1]; // find & store which "show_" button was clicked
	button.removeClass('activated');
	$(this).addClass('activated');
	if (clicked == "all") {
		$(".item").show();
	}

	else {
		$(".item").hide();
		$("." + clicked).show(); // use which was clicked to define which items to show
	}
})


// Gallery item box click

$(".item").click(function(){
	window.location=$(this).find("a").attr("href");
	return false;
})


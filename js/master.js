
// ON-LOAD  FUNCTIONS
$(document).ready(function() {
	// select "all" at load
	$(".show_all").addClass("activated") 


	// on load animations
	$("nav").addClass("swipeintop")
	// $(".hero").css({"opacity":"0"})

	// $(".latest").addClass("swipeinleft")
	// $(".hero").addClass("fadein")
	// $(".gallery").addClass("fadein")
	// $("#intro p:nth-child(1)").addClass("swipeinleft").css({"animation-delay":".25s"})
	// $("#intro h1").addClass("swipeinleft").css({"animation-delay":".5s"})
	// $("#intro p:nth-child(3)").addClass("swipeinleft").css({"animation-delay":".75s"})
});



// Scroll-tos, for your convenience!
$("nav a").click(function(){
	$(window).scrollTo(this.hash,750,{offset:-58, easing:'swing'})
});




// nav effect
var controller = new ScrollMagic.Controller();
var navScene = new ScrollMagic.Scene({triggerElement:'#about',}).setClassToggle("nav h1","showname").addTo(controller);
navScene.triggerHook(0.0);



// hero fade-in and latest sweep
var tlHero = new TimelineMax();
tlHero.add(TweenMax.from(".hero",1.5, {
	"opacity":0
}))

tlHero.add(TweenMax.from(".latest",.25, {
	"left":"-=400px"
}))

var sceneHero = new ScrollMagic.Scene({
		triggerElement:'.hero',
		triggerHook:0.7,
	})
	.setTween(tlHero);

sceneHero.addTo(controller);



// gallery item fade-ins

var tlGallery = new TimelineMax();

tlGallery.add(TweenMax.staggerFrom(".item", 2, {
	opacity:0, delay:.5, ease: Power2.easeOut},0.2));

var sceneGallery = new ScrollMagic.Scene({
		triggerElement: ".gallery",
		triggerHook:0.9
	})

	.setTween(tlGallery);

sceneGallery.addTo(controller);



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


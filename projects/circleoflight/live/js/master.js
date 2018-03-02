console.log("work");

$("#menu_btn").click(function(){
	$("nav ul").toggleClass('show');
})



 /* ===== launch on load*/   
  $(window).jfPopUp({
			auto:true, 
		 message:'<h1>Hello!</h1><p>This website is a conceptual redesign project completed for the course Web Design II, not the actual website, which can be found here: <a href="http://www.circleoflightassociates.org/">Circle of Light Associates</a>.</p><strong>The navigation links do not function.</strong>'});


  /* ===== launch on click*/ 
  $("nav a").jfPopUp({
		mouseEvent:'click',
		 message:'<h1>Hi!</h1><p>This is a reminder that since this is a class project, the navigation links to do not work.'});

/* ===== Arguments passed as data attributes on the element */
$(".anotherWay").jfPopUp();

// cdn link
// https://cdn.rawgit.com/fonstok/jfPopUp/4e5d374c/jquery.jfPopUp-min.js



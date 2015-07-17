
document.addEventListener('deviceready', function() {
	$("div#header img").click(function() {
		$("div#menu").toggleClass("active")
		$("div#overlay").toggleClass("active")
	})
	$("div#overlay").click(function() {
		$("div#menu").toggleClass("active")
		$("div#overlay").toggleClass("active")
	})
	$("div#dining>div").click(function() {
		open(dining[$(this).attr('id')].page, "_self")
	})

	$("div#main nav a").on("click", function() {
		$("div#main section.active").removeClass("active")
		$("div#main nav a.active").removeClass("active")
		$("div#main section#" + $(this).attr("id")).addClass("active")
		$("div#main nav a#" + $(this).attr("id")).addClass("active")
	})
}, false)

// $(document).ready(function() {
// 	$("div#header img").click(function() {
// 		$("div#menu").toggleClass("active")
// 		$("div#overlay").toggleClass("active")
// 	})
// 	$("div#overlay").click(function() {
// 		$("div#menu").toggleClass("active")
// 		$("div#overlay").toggleClass("active")
// 	})
// 	$("div#dining>div").click(function() {
// 		open(dining[$(this).attr('id')].page, "_self")
// 	})

// 	$("div#main nav a").on("click", function() {
// 		$("div#main section.active").removeClass("active")
// 		$("div#main nav a.active").removeClass("active")
// 		$("div#main section#" + $(this).attr("id")).addClass("active")
// 		$("div#main nav a#" + $(this).attr("id")).addClass("active")
// 	})
// })

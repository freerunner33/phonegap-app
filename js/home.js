
document.addEventListener('deviceready', function() {
	$("div#header img").click(function() {
		$("div#menu").toggleClass("active")
	})
	$("div#overlay").click(function() {
		$("div#menu").toggleClass("active")
	})
}, false);

$(document).ready(function() {
	$("div#header img").click(function() {
		$("div#menu").toggleClass("active")
	})
	$("div#overlay").click(function() {
		$("div#menu").toggleClass("active")
	})
})

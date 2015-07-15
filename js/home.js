
document.addEventListener('deviceready', function() {
	$("div#header img").click(function() {
		$("div#menu").toggleClass("active")
		$("div#overlay").toggleClass("active")
	})
	$("div#overlay").click(function() {
		$("div#menu").toggleClass("active")
		$("div#overlay").toggleClass("active")
	})
}, false)

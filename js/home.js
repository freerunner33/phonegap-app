
document.addEventListener('deviceready', function() {
	$("div#header img").click(function() {
		$("div#menu").toggleClass("active")
	})
	$("div#overlay").click(function() {
		$("div#menu").removeClass("active")
	})
}, false);

function imageFunction() {
	alert("HEEEEEEEY")
}

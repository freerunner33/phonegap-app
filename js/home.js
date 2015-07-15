
document.addEventListener('deviceready', function() {
	
	$("div#overlay").click(function() {
		$("div#menu").removeClass("active")
	})
	$("div#header img").click(function() {
		$("div#menu").toggleClass("active")
	})
}, false);

function imageFunction() {
	alert("HEEEEEEEY")
}

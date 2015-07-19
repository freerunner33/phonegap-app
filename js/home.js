
var dining = {
	aromas: {
		title: "Aroma's Cafe",
		description: "Yummy breakfast stuff",
		page: "aromas.html"
	},
	berts: {
		title: "Bert's Bistro",
		description: "Fantastic for lunch",
		page: "berts.html"
	},
	bluespoon: {
		title: "Blue Spoon",
		description: "Apparently serves good stuff",
		page: "bluespoon.html"
	},
	lagranterraza: {
		title: "La Gran Terraza",
		description: "I'm so fancy",
		page: "lagranterraza.html"
	},
	lapaloma: {
		title: "La Paloma",
		description: "Great restaurant for breakfast and lunch.",
		page: "lapaloma.html"
	}
}


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

	$("div#main nav a").click(function() {
		$("div#main section.active").removeClass("active")
		$("div#main nav a.active").removeClass("active")
		$("div#main section#" + $(this).attr("id")).addClass("active")
		$("div#main nav a#" + $(this).attr("id")).addClass("active")
	})

	$("div#collapsible h3").click(function() {
		$(this).next("div#content").toggleClass("active")
	})
}, false)




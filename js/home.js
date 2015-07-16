
var dining = {
	aromas: {
		title: "Aroma's Cafe",
		description: "Located in the heart of Alcala Park, adjacent to the Immaculata, is USD’s award-winning coffeehouse. " +
			"Always abuzz with activity, Aromas is the perfect setting to enjoy a beverage with friends without having to leave " +
			"campus.</p><p>We are proud to serve local, alumni-owned, Ryan Bros. Coffee. Choose from an array of espresso " +
			"beverages, teas, tea lattes, savory and sweet crepes made fresh to order, blended drinks, gourmet baked goods and " +
			"salads. We also have complimentary WiFi and computers available for your use.",
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
}, false)

$(document).ready(function() {
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
})

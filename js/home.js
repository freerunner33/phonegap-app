
var menu = []
var categories = []

document.addEventListener('deviceready', function() {
	alert("Welcome!")
	fillTables($("div#header").attr("name"))

// register event listeners on stuff for clicking
	alert("Register click handlers for menu button")
	$("div#header img").click(function() {
		alert("menu button clicked")
		$("div#menu").toggleClass("active")
		$("div#overlay").toggleClass("active")
	})
	$("div#overlay").click(function() {
		alert("overlay clicked")
		$("div#menu").toggleClass("active")
		$("div#overlay").toggleClass("active")
	})
	$("div#dining>div").click(function() {
		alert("dining div picture clicked")
		open($(this).attr("id") + ".html", "_self")
	})

	$("div#main nav a").click(function() {
		alert("menu item clicked")
		$("div#main section.active").removeClass("active")
		$("div#main nav a.active").removeClass("active")
		$("div#main section#" + $(this).attr("id")).addClass("active")
		$("div#main nav a#" + $(this).attr("id")).addClass("active")
	})

	$("section#menu").on("click", "div#collapsible h3", function() {
		$(this).next("div#content").toggleClass("active")
	})
}, false)

function fillTables(diningID) {
	alert("line 1 of fillTables()")

	var output = $('section#menu')
	output.append('<h1>Menu</h1>')
	var category = ''

	$.ajax({
		url: 'http://noahthomas.us/USD/info.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 0,
		success: function(data, status) {
			alert("success in ajax call")
			$.each(data[0], function(i, item) { 	// for every category, add to categories array
				if (item.dining_id == diningID) { 	// only place in if correct dining location
					categories.push({
						name: item.name,  
						size1: item.size1, 
						size2: item.size2, 
						size3: item.size3, 
						size4: item.size4, 
						size5: item.size5
					})
				}
			})
			$.each(data[1], function(i, item) { 	// for every menu item, add to item array
				if (item.dining_id == diningID) {	// only place in if correct dining location
					menu.push({
						name: item.name, 
						category: item.category, 
						price1: item.price1, 
						price2: item.price2, 
						price3: item.price3, 
						price4: item.price4, 
						price5: item.price5
					})
				}
			})
		},
		error: function() {
			alert("error in ajax call")
			output.append('<p>Please connect to an internet connection for up to date dining information</p>')
		},
		complete: function() {
			alert("complete in ajax call")
			if (categories.length < 1) {
				output.append('<p>No menu information available at this time. Please visit dining location for menu.</p>')
			}
			$.each(categories, function(i, cat) {
				var str = '<div id="collapsible"><h3>' + cat.name + '</h3><div id="content">'
				str += '<table><tr>'
				str += '<th>Name</th>'
				str += (cat.size1) ? '<th>' + cat.size1 + '</th>' : ''
				str += (cat.size2) ? '<th>' + cat.size2 + '</th>' : ''
				str += (cat.size3) ? '<th>' + cat.size3 + '</th>' : ''
				str += (cat.size4) ? '<th>' + cat.size4 + '</th>' : ''
				str += (cat.size5) ? '<th>' + cat.size5 + '</th>' : ''
				str += '</tr>'

				$.each(menu, function(j, item) {
					if (item.category == cat.name) {
						str += '<tr><td>' + item.name + '</td>'
						str += (item.price1) ? '<td>' + item.price1 + '</td>' : ''
						str += (item.price2) ? '<td>' + item.price2 + '</td>' : ''
						str += (item.price3) ? '<td>' + item.price3 + '</td>' : ''
						str += (item.price4) ? '<td>' + item.price4 + '</td>' : ''
						str += (item.price5) ? '<td>' + item.price5 + '</td>' : ''
						str += '</tr>'
					}
				})
				
				str += '</table>'
				str += '</div></div>'

				output.append(str)
			})
		}
	})
}

var categories = []
var menu = []

document.addEventListener('deviceready', function() {
	fillTables()

// register event listeners on stuff for clicking
	$("div#header img").click(function() {
		$("div#menu").toggleClass("active")
		$("div#overlay").toggleClass("active")
	})
	$("div#overlay").click(function() {
		$("div#menu").toggleClass("active")
		$("div#overlay").toggleClass("active")
	})
	$("div#dining>div").click(function() {
		open($(this).attr("id") + ".html", "_self")
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

function fillTables() {
	
/////////////////////////////////////////////////////////////////////////////////
	alert("Hacking...")
	var output = $('section#menu')
	output.appen('<h1>Menu</h1>')
	var category = ''

	$.ajax({
		url: 'http://noahthomas.us/USD/menu_1.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 0,
		success: function(data, status) {
			$.each(data[1], function(i, item) { 	// assigns data[1][i] to item
				categories.push({
					name: item.name,  
					size1: item.size1, 
					size2: item.size2, 
					size3: item.size3, 
					size4: item.size4, 
					size5: item.size5
				})
			})

			$.each(data[0], function(i, item) { 	// assigns data[0][i] to item
				menu.push({
					name: item.name, 
					category: item.category, 
					price1: item.price1, 
					price2: item.price2, 
					price3: item.price3, 
					price4: item.price4, 
					price5: item.price5
				})
			})
		},
		error: function() {
			output.text('There was an error loading the data. Please connect your device to an ' + 
				'internet connection for up-to-date dining information.')
		},
		complete: function() {
			output.append('<hr><h1>Menu</h1>')

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
////////////////////////////////////////////////////////////////////
	//$('section#menu').html('<h1>Menu</h1>' + html)
}

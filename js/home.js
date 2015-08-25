// menu array: category, sizes for category, array of items in category
	// items: name, prices corresponding to sizes in category

var menu = [
	{
		category: 'Refreshers - Iced Beverages',
		sizes: ',Tall,Grande,Venti,Trenta',
		tables: [
			[
				{
					itemname: 'Cool Lime',
					price: '3.29,3.79,4.29,4.79'
				},
				{
					itemname: 'Very Berry Hibiscus',
					price: '3.29,3.79,4.29,4.79'
				}
			]
		]
	},
	{
		category: 'Iced Coffee &amp; Iced Tazo Tea',
		sizes: ',Tall,Grande,Venti,Trenta',
		tables: [
			[
				{
					itemname: 'Iced Coffee',
					price: '2.19,2.59,2.99,3.49'
				},
				{
					itemname: 'Iced Coffee with Milk',
					price: '2.19,2.59,2.99,3.49'
				},
				{
					itemname: 'Shaken Iced Tazo Tea',
					price: '1.99,2.49,2.99,3.29'
				},
				{
					itemname: 'Iced Tazo Tea Lemonade',
					price: '2.99,3.49,3.99,4.29'
				}
			]
		]
	},
	{
		category: 'Coffee, Tazo Tea &amp; more',
		sizes: ',Tall,Grande,Venti',
		tables: [
			[
				{
					itemname: 'Freshly Brewed Cofee',
					price: '1.99,2.19,2.49'
				},
				{
					itemname: 'Caffe Misto',
					price: '1.99,2.19,2.49'
				},
				{
					itemname: 'Tazo Chai Tea Latte',
					price: '3.49,4.29,4.49'
				},
				{
					itemname: 'Full-Leaf Tazo Tea',
					price: '2.29,2.49,2.79'
				},
				{
					itemname: 'Hot Chocolate',
					price: '2.99,3.39,3.69'
				},
				{
					itemname: 'Kid\'s Hot Chocolate',
					price: '2.89'
				}
			]
		]
	},
	{
		category: 'Frappuccino - Blended Beverages',
		sizes: 'Coffee,Tall,Grande,Venti;Creme (coffee-free),Tall,Grande,Venti',
		tables: [
			[
				{
					itemname: 'Caramel',
					price: '4.29,4.99,5.49'
				},
				{
					itemname: 'Mocha',
					price: '4.29,4.99,5.49'
				},
				{
					itemname: 'Java Chip',
					price: '4.29,4.99,5.49'
				},
				{
					itemname: 'Coffee',
					price: '3.59,4.29,4.99'
				},
				{
					itemname: 'White Chocolate Mocha',
					price: '4.29,4.94,5.49'
				},
				{
					itemname: 'Mocha Light',
					price: '4.29,4.99,5.49'
				}
			],
			[
				{
					itemname: 'Vanilla Bean',
					price: '3.59,4.29,4.99'
				},
				{
					itemname: 'Strawberries &amp; Creme',
					price: '4.29,4.99,5.49'
				},
				{
					itemname: 'Double Chocolatey Chip',
					price: '4.29,4.99,5.49'
				},
				{
					itemname: 'Green Tea',
					price: '4.29,4.99,5.49'
				}
			]
		]
	},
	{
		category: 'Smoothies (Contains Dairy)',
		sizes: 'Flavor,16.oz',
		tables: [
			[
				{
					itemname: 'Chocolate',
					price: '4.49'
				},
				{
					itemname: 'Orange Mango',
					price: '4.49'
				},
				{
					itemname: 'Strawberry',
					price: '4.49'
				}
			]
		]
	},
	{
		category: 'Expresso',
		sizes: 'Signature,Tall,Grande,Venti;Classics,Tall,Grande,Venti;,Bold (1 oz),Doppio (2 oz)',
		tables: [
			[
				{
					itemname: 'Caramel Macchiato',
					price: '3.99,4.79,4.99'
				},
				{
					itemname: 'White Chocolate Mocha',
					price: '3.99,4.79,4.99'
				},
				{
					itemname: 'Cinnamon Dolce Latte',
					price: '3.99,4.79,4.99'
				}
			],
			[
				{
					itemname: 'Caffe Latte',
					price: '3.69,3.99,4.39'
				},
				{
					itemname: 'Caffe Mocha',
					price: '4.29,4.59,4.89'
				},
				{
					itemname: 'Iced Caffe Mocha',
					price: '3.99,4.79,5.29'
				},
				{
					itemname: 'Vanilla Latte',
					price: '4.29,4.59,4.89'
				},
				{
					itemname: 'Skinny Vanilla Latte',
					price: '4.29,4.59,4.99'
				},
				{
					itemname: 'Caffe Americano',
					price: '2.49,2.79,3.29'
				},
				{
					itemname: 'Cappuccino',
					price: '3.69,3.99,4.39'
				}
			],
			[
				{
					itemname: 'Espresso',
					price: '2.99,3.99'
				}
			]
		]
	}
]




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

// 	$("div#main nav a").click(function() {
// 		$("div#main section.active").removeClass("active")
// 		$("div#main nav a.active").removeClass("active")
// 		$("div#main section#" + $(this).attr("id")).addClass("active")
// 		$("div#main nav a#" + $(this).attr("id")).addClass("active")
// 	})

// 	$("div#collapsible h3").click(function() {
// 		$(this).next("div#content").toggleClass("active")
// 	})
// })


// $(document).ready(function() {
// 	fillTables()

// 	$("div#header img").click(function() {
// 		$("div#menu").toggleClass("active")
// 		$("div#overlay").toggleClass("active")
// 	})

// 	$("div#overlay").click(function() {
// 		$("div#menu").removeClass("active")
// 		$("div#overlay").removeClass("active")
// 	})
	
// 	$("div#dining>div").click(function() {
// 		open($(this).attr("id") + ".html", "_self")
// 	})

// 	$("div#main nav a").click(function() {
// 		$("div#main section.active").removeClass("active")
// 		$("div#main nav a.active").removeClass("active")
// 		$("div#main section#" + $(this).attr("id")).addClass("active")
// 		$("div#main nav a#" + $(this).attr("id")).addClass("active")
// 	})

// 	$("div#collapsible h3").click(function() {
// 		$(this).next("div#content").toggleClass("active")
// 	})
// })

function fillTables() {
	var html = ''
	for (i = 0; i < menu.length; i++) {
		var category = menu[i].category // main category of section
		var sizes = menu[i].sizes.split(';') // array of table header names
		var tables = menu[i].tables // array of arrays containing items
		
		html += '<div id="collapsible"><h3>' + category + '</h3>' + '<div id="content">'
		for (t = 0; t < tables.length; t++) {
			html += '<table>'
			html += '<tr>'
			var sizeArr = sizes[t].split(',')
			for (h = 0; h < sizeArr.length; h++) {
				html += '<th>' + sizeArr[h] + '</th>'
			}
			html += '</tr>'
			for (r = 0; r < tables[t].length; r++) { // [item1 item2 item3]
				html += '<tr>'
				html += '<td>' + tables[t][r].itemname + '</td>'
				priceArr = tables[t][r].price.split(',')
				for (p = 0; p < priceArr.length; p++) {
					html += '<td>' + priceArr[p] + '</td>'
				}
				html += '</tr>'
			}
			html += '</table>'
		}
		html += '</div></div>'
	}
	$('section#menu').html('<h1>Menu</h1>' + html)
}

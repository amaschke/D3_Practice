(function () {

	console.log('Hello world');
	
	var numbers = [8, 20, 4];
	var cities = [
		{'name': 'NYC',
		'population': 8,
		'area': 304
		},
		{'name': 'Tokyo',
		'population': 14,
		'area': 845
		},
		{'name': 'LA',
		'population': 4,
		'area': 4500
		},
		{'name': 'Berlin',
		'population': 3.5,
		'area': 344
		}
		]
	
	var radiusScale = d3.scaleSqrt().domain([0, 4500]).range([0,100])
	var colorScale = d3.scaleLinear().domain([4, 15]).range(['#feebe2','#7a0177'])
	
	d3.select("svg")
		.selectAll("text")
		.data(cities)
		.enter().append("text")
		.attr("text-anchor", "middle")
		.text(function (d) {
		return d.name;
		})
		.attr("x", function (d, i){
			console.log("i is", i);
			return i * 200 + 100;
		})
		.transition()
		.duration(1000)
		.attr("y",300)
		
	
	d3.select("svg")
		.selectAll("circle")
		.data(cities)
		.enter().append("circle")
		.attr("fill", function (d){
		console.log(d.population)
		console.log(colorScale(d.population))
			return colorScale(d.population);
		})
		.attr("cy",150)
		.attr("cx", function (d, i){
			console.log("i is", i);
			return i * 200 + 100;
		})
		.transition()
		.duration(2000)
		.attr("r", function (d) {
			console.log('d is', d)
			return radiusScale(d.area);
		})

})();

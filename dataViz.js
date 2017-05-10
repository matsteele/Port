var w = window.innerWidth;
var h = window.innerHeight;

var cityData = []



// var width = w - margin.left - margin.right;
// var height = h - margin.top - margin.bottom;
// var svg = d3.select("body")
// 	;



var svg = d3.select("body")
	.style("background", "url(svgs/bg2-01.svg) no-repeat center center fixed")
	.style("background-size", "cover")
	.append("svg")
	.classed("city-points", true)
	// .style("background", "blue")
	.attr("viewBox", "0 0 " + w + " " + h )
	.attr("preserveAspectRatio", "xMidYMid meet");


d3.json("http://matsteele.com/CityData2.json", function(error, data) {
    cityData = data.features;
    console.log(cityData);


 var points = svg.selectAll("circle")
	.data(cityData)
	.enter()
	.append("circle")
	.classed("circles", true)
	.attr("cx", function(d) {
		return d.properties.cx2;
	})
	.attr("cy", function(d) {
		return d.properties.cy2;
	})
	.attr("r", 3);
});

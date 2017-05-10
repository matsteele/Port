var w =(h/6)*8;
var h = 600;
var margin = {
	top: 60,
	bottom: 80,
	left: 80,
	right: 80
};

var cityData = []

var projection = d3.geo.mercator()
				.scale([100]);

// create path variable
var path = d3.geo.path()
    .projection(projection);


var bg = d3.select("body")
			.style("background", "url(svgs/bg2-01.svg) no-repeat center center fixed")
			.style("background-size", "cover");
			


console.log(bg[0][0].clientHeight)


var svg = d3.select("body")
			.append("svg")
			.style("background-size", "cover")
			.classed("cityPoints", true)
			//.style("background-color", "green")
			.attr("viewBox", "0 0 800 600" )
            .attr("preserveAspectRatio", "xMidYMid slice")
           // .attr("transform", "translate (190,380)");

			


d3.json("http://matsteele.com/CityData2.json", function(error, data) {
    cityData = data.features;
     //console.log(cityData);




 var points = svg.selectAll("circle")
 	     	.data(cityData)
 	     	.enter()
 	     	.append("circle")
 	     	.attr("class", "PointsActual")
 	     	.attr("cx", function (d) {
 	     		return d.properties.cx2;
 	     	})
 	     	.attr("cy", function (d) {
 	     		return d.properties.cy2;
 	     	})
 	     	.on("mouseover", function() {
			        d3.select(this)
			        	.transition()
			          .attr("stroke", "blue")
			          .attr("stroke-width", ".5")
			          .attr("fill-opacity", "0.05")
			          .attr("r", function(d){
			          	return d.properties.Urbpop2010 / 1000000 * 5
			          })
			})
			.on("mouseout", function() {
			        d3.select(this)
			        .transition()
					.attr("r", 2)
 	     			.attr("fill", "orange")
 	     			.attr("stroke-width", "0")
			        .attr("fill-opacity", "1.0");
 	     		})
 	     	.attr("r", 2)
 	     	.attr("fill", "rgb(254,193,13)");


});

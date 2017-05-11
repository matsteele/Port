var w =(h/6)*8;
var h = 600;
var margin = {
	top: 60,
	bottom: 80,
	left: 80,
	right: 80
};


var primaryColor = "rgb(254,193,13)"
var secondaryColor = "rgb(254,193,13)"

var cityData = []

var projection = d3.geo.mercator()
				.scale([100]);

// create path variable
var path = d3.geo.path()
    .projection(projection);



	var tCx 	=  [];
	var tCy 	=  [];
	var tR  	=  [];

var bg = d3.select("body")
			.style("background", "url(svgs/bg2-01.svg) no-repeat center center fixed")
			.style("background-size", "cover");



var newCircles = d3.select("body")
			.append("svg")
			.style("background-size", "cover")
			.classed("cityPoints", true)
			//.style("background-color", "green")
			.attr("viewBox", "0 0 800 600" )
            .attr("preserveAspectRatio", "xMidYMid slice")
	     	 	
 



			


console.log(bg[0][0].clientHeight)


var svg = d3.select("body")
			.append("svg")
			.style("background-size", "cover")
			.classed("cityPoints", true)
			.attr("viewBox", "0 0 800 600" )
            .attr("preserveAspectRatio", "xMidYMid slice")


			


d3.json("http://matsteele.com/CityData2.json", function(error, data) {
    cityData = data.features;
     //console.log(cityData);







// var points2 = newCircles.selectAll("circle")
// 	     	 	.data(cityData)
// 	 	     	.enter()
// 	 	     	.append("circle")
// 	 	     	.attr("class", "PointsActual2")
// 	 	     	.attr("cx", function (d) {
// 	 	     		return d.properties.cx2;
// 	 	     	})
// 	 	     	.attr("cy", function (d) {
// 	 	     		return d.properties.cy2;
// 	 	     	})
// 	          	.attr("stroke", "green")
// 				.attr("stroke-width", ".5")
// 				          .attr("fill-opacity", "0.05")
// 				          .attr("r", function(d){
// 				          	return d.properties.Urbpop2000 / 1000000 * 5
// 				          	console.log(d.properties.Urbpop2000)
// 				          })
// 	 	     	.attr("fill", "rgba(254,193,13, 0.75)")
// 	     		.style("visibility", "visible");	   







 var points = svg.selectAll("circle")
 	     	.data(cityData)
 	     	.enter()
 	     	.append("circle")
 	     	.attr("class", "PointsActual1")
 	     	.attr("cx", function (d) {
 	     		return d.properties.cx2;
 	     	})
 	     	.attr("cy", function (d) {
 	     		return d.properties.cy2;
 	     	})
 	     	.on("mouseover", function() {
			        var newCircle = d3.select(this)
			        	.transition()
			        	.duration(200) 
			        	.attr("stroke", "red")
			          .attr("stroke-width", "0.5")
			          .attr("fill-opacity", "0.05")
		          	.attr("r", function(d){

		         	 tCx = d.properties.cx2;
		          	 tCy = d.properties.cy2;
		          	 tR = d.properties.Urbpop2000 / 1000000 * 5;

		          	//console.log(d.properties.Urbpop2010);


		          	return d.properties.Urbpop2010 / 1000000 * 5;
		    
		          	});     

		          	console.log(tCx, tCy, tR)



		          	newCircles.selectAll("circle")
			     	 	.data(cityData)
			 	     	.enter()
			 	     	.append("circle")
			 	     	.attr("class", "PointsActual2")
			 	     	.attr("cx", tCx)
			 	     	.attr("cy", tCy)
			          	.attr("stroke", "green")
						.attr("stroke-width", ".5")
				          .attr("fill-opacity", "0.05")
				          .attr("r", tR)
			 	     	.attr("fill", "rgba(0,193,13, 0.75)");
			     		// .style("visibility", "visible");	   









   








		          	  

			

			 })	  

			.on("mouseout", function() {
			        d3.select(this)
			        .transition()
			        .duration(5000) 
					.attr("r", function(d) {
					 tCx = 0;
		          	 tCy = 0;
		          	 tR = 0;
						return 2
						})
 	     			.attr("fill", "rgba(254,193,13, 0.75)")
 	     			.attr("stroke-width", "0")
			        .attr("fill-opacity", "1.0");


 	     		})
 	     	.attr("r", 2)
 	     	.attr("z-index", "5")
 	     	.attr("fill", "rgba(254,193,13, 0.75)");
 	     

});










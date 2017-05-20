var w =(h/6)*8;
var h = 600;
var margin = {
	top: 60,
	bottom: 80,
	left: 80,
	right: 80
};


var Yellow1 = "rgb(254,193,13)"
var Blue1 = "rgb(121,181,221)"
var Blue2 = "rgb(216,239,255)"
var Blue3 = "rgb(216,239,255)"

var cityData = [];
var circlex = [];
var Pop2000 = [];

var projection = d3.geo.mercator()
				.scale([100]);

// create path variable
var path = d3.geo.path()
    .projection(projection);


	var tCx 	=  [];
	var tCy 	=  [];
	var tR  	=  [];



var data4Circle = []

var bg = d3.select("body")
			.style("background", "url(svgs/bg2-01.svg) no-repeat center center fixed")
			.style("background-size", "cover");



var newCircles = d3.select("body")
					.append("svg")
					.style("background-size", "cover")
					.classed("cityPoints", true)
					//.style("background-color", "green")
					.attr("viewBox", "0 0 800 600" )
					.attr("preserveAspectRatio", "xMidYMid slice");

// var sources = d3.select("body")
// 					.append("div")
					

var textOver = d3.select("body")
	.append("div")
	.classed("textOver", true);
	// .text("2000 Pop: "+ Pop2000);	     	 	
 

var svg = d3.select("body")
			.append("svg")
			.style("background-size", "cover")
			.classed("cityPoints", true)
			.attr("viewBox", "0 0 800 600" )
            .attr("preserveAspectRatio", "xMidYMid slice")


			


d3.json("http://matsteele.com/CityData2.json", function(error, data) {
    cityData = data.features;
     //console.log(cityData);





///DRAW INITIAL DOTS 

 	var points = svg.selectAll("circle")
 	     	.data(cityData)
 	     	.enter()
 	     	.append("circle")

 	     	.attr("cx", function (d) {
 	     		return d.properties.cx2;
 	     	})
 	     	.attr("cy", function (d) {
 	     		return d.properties.cy2;
 	     	})
 	     	.attr("r", 2)
 	     	.attr("z-index", "5")
 	     	.attr("fill", "rgba(254,193,13, 0.75)")
 	     	.on("mouseover", function() {
			       //INCREASE RADIUS FOR MOUSEOVER FOR 2000

			        
			        d3.select(this)
			        .transition()
			        .duration(200) 
			        .attr("stroke", Blue1)
			        .attr("stroke-width", "1")
			        .attr("fill-opacity", "0.05")
					.attr("r", function(d){

			         	 tCx = d.properties.cx2;
			          	 tCy = d.properties.cy2;
			          	 pop2000 = d.properties.Urbpop2000
			          	 pop2010 = d.properties.Urbpop2010
			          	 cityName = d.properties.CityName
			          	 cityDensity10 = Math.round(d.properties.dens210)
			          	 yrGrowthRate = d.properties.AvgYrInc




			          	 tR = d.properties.Urbpop2000 / 1000000 * 5
			          	 data4Circle = [tCx, tCy, tR];
			          	//console.log(d.properties.Urbpop2010);
			          	return d.properties.Urbpop2010 / 1000000 * 5;

		          	});
		             

		          	//INCREASE RADIUS FOR MOUSEOVER FOR 2010

		          	circlex = newCircles.selectAll("circle")
			     	 	.data(data4Circle)
			 	     	.enter()
			 	     	.append("circle");

			 	     circlex.attr("id", "PointsActual2")
			 	     	.attr("cx", data4Circle[0])
			 	     	.attr("cy", data4Circle[1])
			          	.attr("stroke", Yellow1)
						.attr("stroke-width", "1")
				          .attr("fill-opacity", "0.05")
				          .attr("r", data4Circle[2])
			 	     	.attr("fill", Yellow1);



			 	     if (cityDensity10 == 0) { 

			 	     	 cityDensity10 = "N/A"

			 	     }



			     	//place text markers 


			     	textOver.style("visibility", "visible")
			     		.html( 	"<p class='popName'> <strong>"+ cityName + " </strong> </p> "+ 

			     		"<p class='popName'> <span class='pop2000'> 2000 Pop:</span> "+ pop2000 + "</p>" +

			     		"<p class='popName'> <span class='pop2010'> 2010 Pop:</span> "+ pop2010 + "</p>" +

			     		"<p class='popName'> <span class='pop2010'> 2010 Density:</span> "+ cityDensity10 + "</p>" 






			     		);

			     	


			 })	  
			//EXIT
			.on("mousemove", function(){
			 	     		return textOver.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
			     		

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


			       circlex.remove();

			       textOver.style("visibility", "hidden");



		          

 	     		});

 	     

});





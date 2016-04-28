// svg parameters
var width = 960,
    height = 700;
    padding = 50;

var MalID;

var circles;
var circles1;
var circles3;
var circles21;
var circles22;
var circles4;
var circles5;
var lines2;
var lines21;
var lines22;
var lines23;

var edRanksM;
var childMort1;
var povertyGap5N;
var povertyGap25N;
var undernourishment1;

var iter = 1;
var step = [0,2000,2005,2008,2009,2010,2011,2012];

var svg = d3.select("#plot").append("svg")
    .attr("width", width)
    .attr("height", height);
var g = svg.append("g");


var colorScale = d3.scale.linear().domain([0, 50, 100]).range(["#d8b365", "#f5f5f5", "#5ab4ac"]);

var colorScale1 = d3.scale.linear().domain([47, 68, 89]).range(["#d8b365", "#f5f5f5", "#5ab4ac"]);

 d3.csv("PovertyGapDollar25.csv", function (error, data) {
     povertyGap25N = data;
   });

d3.csv("PovertyGap5Dollars.csv", function (error, data) {
     povertyGap5N = data;
});

d3.csv("PovertyGap5DollarsADayRanksNew.csv", function (error, data) {
     povertyGap51 = data;
});


d3.csv("UndernourishmentPrevalenceRanksNew.csv", function (error, data) {
     undernourishment1= data;
});



function isIncluded(country) {
	  var count=0;
   	  edRanks.forEach(function(d) {
         povertyGap51.forEach(function(p) {
            if(d["Country"]==p["Country"] && d["Country"]==country) {
            	count = count +1;

            }
         });
   	  });
   	  return count >=1;
}

function isIncludedMal(country) {
	  var count=0;
   	  edRanks.forEach(function(d) {
         undernourishment1.forEach(function(p) {
            if(d["Country"]==p["Country"] && d["Country"]==country) {
            	count = count +1;

            }
         });
   	  });
   	  return count >=1;
}



d3.csv("GenderGap1.csv", function (error, data) {
  genderGap1 = data;
  
});



function gg() {

	xScale = d3.scale.linear()
		.domain([0, 10]).range([padding, width - padding]);
		
	 yScale = d3.scale.linear()
		.domain([0, 10]).range([height - padding, padding]);

	//Represent countries using Education Index
	 // Will add transitions to this, and use in every visualization.
	 circles = svg.selectAll(".plot1").data(edRanks);
	 circles.enter().append("circle")
		.attr("class", "plot")
		.attr("cx", function(d) { return xScale(d[2012]); })
		.attr("cy", "100px")
		.attr("r", 10)
		.attr("country", function(d) { return d["Country"] })
		.attr("value", function(d) { return d[2012]; })
		.attr("MID", function(d){ return d["MID"]; })
		.style("fill", function(d) { return colorScale((d[2012] / 10) * 100); })
		.style("opacity", 1)
		.on("mouseover", function (d) {
			
			d3.select("#location").text(d["Country"]);
			d3.select("#Value").text(d[2012]);
	    });

	     genderGap1.forEach(function(t){
	        edRanks.forEach(function(d){
	          if(t["Country"]==d["Country"]) {
	             t[2012] = d[2012];
	          }
	       });
	       
	     });

	     circles1 = svg.selectAll(".plot2").data(genderGap1);
	     circles1.enter().append("circle")
	    	.attr("class", "plot")
	    	.attr("cx", function(d) { 
	    		if (isNaN(d[2012])) { return '-10px';}
	    		return xScale(d[2012]); 
	    	})
	    	.attr("cy", "200px")
	    	.attr("r", 10)
	    	.style("fill", function(d) { return colorScale1((d["Score"] / 1) * 100); })
	    	.style("opacity", 1)
	    	.on("mouseover", function (d) {
	    		d3.select("#location").text(d["Country"]);
	     });

}

function pg() {
   var size = 0;
   var size2 = 0;
   var size3 = 0;

  

   var rScalePG = d3.scale.linear().domain([0, 100]).range([5, 20]);
   var colorScalePG = d3.scale.linear().domain([1, 12]).range(["#1e7b7b", "#c1f0f0"]);
 
   circles.each(function (d, i) {
            if (isIncluded(d3.select(this).attr("country"))) {
              size = size + 200;
              if(size < 1000) {
                  d3.select(this).transition().duration(1000)
                  .attr("cx", size + "px")  
                  .attr("cy", "100px")
                  .attr("r", function(d) { 
                  	return rScalePG(
                  		Math.abs((
                  			(d3.select(this).attr("value") - 
                  				edRanksAvgs["world"])/edRanksAvgs["world"]) * 100));
                  })
                  .style("fill", function(d){
                  	 return colorScalePG(size/200);
                  });

              }
              else if(size < 1800){
              	  size2 = size2 + 200;
                  d3.select(this).transition().duration(1000)
                  .attr("cx", size2 + "px")  
                  .attr("cy", "300px")
                  .attr("r", function(d) { 
                  	return rScalePG(Math.abs((
                  			(d3.select(this).attr("value") - 
                  				edRanksAvgs["world"])/edRanksAvgs["world"]) * 100));
                  })
                  .style("fill", function(d){
                  	 return colorScalePG(size/200);
                  });
              }
              else {
              	  size3 = size3 + 200;
                  d3.select(this).transition().duration(1000)
                  .attr("cx", size3 + "px")  
                  .attr("cy", "500px")
                  .attr("r", function(d) { 
                  	return rScalePG(Math.abs((
                  			(d3.select(this).attr("value") - 
                  				edRanksAvgs["world"])/edRanksAvgs["world"]) * 100));
                  })
                  .style("fill", function(d){
                  	 return colorScalePG(size/200);
                  });
               
              }
            }
            
            else { 
              d3.select(this).transition().duration(1000)
              .attr("cx", "0px");  

            } 
            
    });

    var rScaleP = d3.scale.linear().domain([0, 100]).range([5, 20]);
    var rScaleP5 = d3.scale.linear().domain([0, 40]).range([5, 20]);

    circles3 = svg.selectAll(".plot3").data(povertyGap25N);
    circles3.enter().append("circle")
	.attr("class", "plot")
	.attr("cx", function(d) {
	    if(d["ID"] == 1 || d["ID"] == 5 || d["ID"] == 9) {
	    	return "250px";
	    } 
	    else if(d["ID"] == 2 || d["ID"] == 6 || d["ID"] == 10) {
            return "450px";
	    }
	    else if(d["ID"] == 3 || d["ID"] == 7 || d["ID"] == 11) {
	    	return "650px";
	    }
	    else if(d["ID"] == 4 || d["ID"] == 8 || d["ID"] == 12) {
	    	return "850px";
	    }	

	})
	.attr("cy", function(d) {
		if(d["ID"] < 5) {
	    	return "80px";
	    } 
	    else if(d["ID"] < 9) {
            return "280px";
	    }
	    else {
	    	return "480px";
	    }	
	})
	.attr("r", function(d){ if (isNaN(d[2012])) { return 0;} return rScaleP(Math.abs(((d[2012] - povertyGap125Avgs["world"])/povertyGap125Avgs["world"])* 100)); })
	.style("fill", function(d){
                  	 return colorScalePG(d["ID"]);
                  })
	.style("opacity", 1)
	.on("mouseover", function (d) {
		d3.select("#location").text(d["Country"]);
		d3.select("#Value").text(Math.abs(((d[2012] - povertyGap125Avgs["world"])/povertyGap125Avgs["world"]) * 100));
    }); 

    circles4 = svg.selectAll(".plot3").data(povertyGap5N);
    circles4.enter().append("circle")
	.attr("class", "plot")
	.attr("cx", function(d) {
	    if(d["ID"] == 1 || d["ID"] == 5 || d["ID"] == 9) {
	    	return "250px";
	    } 
	    else if(d["ID"] == 2 || d["ID"] == 6 || d["ID"] == 10) {
            return "450px";
	    }
	    else if(d["ID"] == 3 || d["ID"] == 7 || d["ID"] == 11) {
	    	return "650px";
	    }
	    else if(d["ID"] == 4 || d["ID"] == 8 || d["ID"] == 12) {
	    	return "850px";
	    }	

	})
	.attr("cy", function(d) {
		if(d["ID"] < 5) {
	    	return "120px";
	    } 
	    else if(d["ID"] < 9) {
            return "320px";
	    }
	    else {
	    	return "520px";
	    }	
	})
	.attr("r", function(d){ return rScaleP(Math.abs(((d[2012] - povertyGap5Avgs["world"])/povertyGap5Avgs["world"]) * 100)); })
	 .style("fill", function(d){
                  	 return colorScalePG(d["ID"]);
                  })
	.style("opacity", 1)
	.on("mouseover", function (d) {
		d3.select("#location").text(d["Country"]);
		d3.select("#Value").text(Math.abs(((d[2012] - povertyGap5Avgs["world"])/povertyGap5Avgs["world"]) * 100));
    }); 

 





}




function mr() {
   
	d3.csv("EducationIndexRanksM.csv", function (error, data) {
	  	edRanksM = data;

		d3.csv("ChildUnder5MortPer1000Prob.csv", function (error, data) {
			childMort1 = data;
		xScale = d3.scale.linear()
			.domain([1, 7]).range([padding, width - padding]);
			
		yScale = d3.scale.linear()
			.domain([1, 240]).range([height - padding - 100, padding+100]);

		edScale = d3.scale.linear()
			.domain([0, 10]).range([height - padding - 100, padding+100]);


		
		var colorScaleM = d3.scale.linear().domain([1, 120, 240]).range(["#5ab4ac", "#f5f5f5", "#d8b365"]);




		circles21 = svg.selectAll(".plot7").data(childMort1);
		circles21.enter().append("circle")
			.attr("class", "mplot")
			.attr("cx", function(d) { return xScale(1); })
			.attr("cy", function(d) { return yScale(d[2000]); })
			.attr("r", 3)
			.style("fill", function(d) { return colorScaleM(d[2012]); })
			.style("opacity", 1)
			.on("mouseover", function (d) {
				d3.select("#location").text(d["Country"]);
		});
		 
		lines21 = svg.selectAll("line1").data(childMort1);
		lines21.enter().append("line")
			.attr('class', 'mplot')
			.attr("x1", function(d) { return xScale(1); })
			.attr("y1", function(d) { return yScale(d[2000]); })
			.attr("x2", function(d) { return xScale(1); })
			.attr("y2", function(d) { return yScale(d[2000]); })
			.style("stroke", "blue")
			.on("mouseover", function(d){
				d3.select("#location").text(d["Country"] + "'s Child Mortality Probability in 2000: " + d[2000]);
			});

		circles22 = svg.selectAll(".plot6").data(childMort1);
		circles22.enter().append("circle")
			.attr("class", "mplot")
			.attr("cx", function(d) { return xScale(2); })
			.attr("cy", function(d) { return yScale(d[2005]); })
			.attr("r", 3)
			.style("fill", function(d) { return colorScaleM(d[2012]); })
			.style("opacity", 1)
			.on("mouseover", function (d) {
				d3.select("#location").text(d["Country"]);
		});

		
		lines22 = svg.selectAll("line2").data(childMort1);
		lines22.enter().append("line")
			.attr('class', 'mplot')
			.attr("x1", function(d) { return xScale(2); })
			.attr("y1", function(d) { return yScale(d[2005]); })
			.attr("x2", function(d) { return xScale(2); })
			.attr("y2", function(d) { return yScale(d[2005]); })
			.style("stroke", "blue")
			.on("mouseover", function(d){
				d3.select("#location").text(d["Country"] + "'s Child Mortality Probability in 2005: " + d[2005])
			});

		circles23 = svg.selectAll(".plot5").data(childMort1);
		circles23.enter().append("circle")
			.attr("class", "mplot")
			.attr("cx", function(d) { return xScale(3); })
			.attr("cy", function(d) { return yScale(d[2008]); })
			.attr("r", 3)
			.style("fill", function(d) { return colorScaleM(d[2012]); })
			.style("opacity", 1)
			.on("mouseover", function (d) {
				d3.select("#location").text(d["Country"]);
		});

		lines23 = svg.selectAll("line3").data(childMort1);
		lines23.enter().append("line")
			.attr('class', 'mplot')
			.attr("x1", function(d) { return xScale(3); })
			.attr("y1", function(d) { return yScale(d[2008]); })
			.attr("x2", function(d) { return xScale(3); })
			.attr("y2", function(d) { return yScale(d[2008]); })
			.style("stroke", "blue")
			.style("opacity", 1)
			.on("mouseover", function(d){
				d3.select("#location").text(d["Country"] + "'s Child Mortality Probability in 2008: " + d[2008])
			});


		circles24 = svg.selectAll(".plot4").data(childMort1);
		circles24.enter().append("circle")
			.attr("class", "mplot")
			.attr("cx", function(d) { return xScale(4); })
			.attr("cy", function(d) { return yScale(d[2009]); })
			.attr("r", 3)
			.style("fill", function(d) { return colorScaleM(d[2012]); })
			.style("opacity", 1)
			.on("mouseover", function (d) {
				d3.select("#location").text(d["Country"]);
		});

		
		lines24 = svg.selectAll("line4").data(childMort1);
		lines24.enter().append("line")
			.attr('class', 'mplot')
			.attr("x1", function(d) { return xScale(4); })
			.attr("y1", function(d) { return yScale(d[2009]); })
			.attr("x2", function(d) { return xScale(4); })
			.attr("y2", function(d) { return yScale(d[2009]); })
			.style("stroke", "blue")
			.on("mouseover", function(d){
				d3.select("#location").text(d["Country"] + "'s Child Mortality Probability in 2009: " + d[2009])
			});

		 

		circles25 = svg.selectAll(".plot3").data(childMort1);
		circles25.enter().append("circle")
			.attr("class", "mplot")
			.attr("cx", function(d) { return xScale(5); })
			.attr("cy", function(d) { return yScale(d[2010]); })
			.attr("r", 3)
			.style("fill", function(d) { return colorScaleM(d[2012]); })
			.style("opacity", 1)
			.on("mouseover", function (d) {
				d3.select("#location").text(d["Country"]);
		});

		lines25 = svg.selectAll("line5").data(childMort1);
		lines25.enter().append("line")
			.attr('class', 'mplot')
			.attr("x1", function(d) { return xScale(5); })
			.attr("y1", function(d) { return yScale(d[2010]); })
			.attr("x2", function(d) { return xScale(5); })
			.attr("y2", function(d) { return yScale(d[2010]); })
			.style("stroke", "blue")
			.on("mouseover", function(d){
				d3.select("#location").text(d["Country"] + "'s Child Mortality Probability in 2010: " + d[2010])
			});


		circles26 = svg.selectAll(".plot2").data(childMort1);
		circles26.enter().append("circle")
			.attr("class", "mplot")
			.attr("cx", function(d) { return xScale(6); })
			.attr("cy", function(d) { return yScale(d[2011]); })
			.attr("r", 3)
			.style("fill", function(d) { return colorScaleM(d[2012]); })
			.style("opacity", 1)
			.on("mouseover", function (d) {
				d3.select("#location").text(d["Country"]);
		});

		lines26 = svg.selectAll("line6").data(childMort1);
		lines26.enter().append("line")
			.attr('class', 'mplot')
			.attr("x1", function(d) { return xScale(6); })
			.attr("y1", function(d) { return yScale(d[2011]); })
			.attr("x2", function(d) { return xScale(6); })
			.attr("y2", function(d) { return yScale(d[2011]); })
			.style("stroke", "blue")
			.on("mouseover", function(d){
				d3.select("#location").text(d["Country"] + "'s Child Mortality Probability in 2011: " + d[2011])
			});

		circles27 = svg.selectAll(".plot1").data(childMort1);
		circles27.enter().append("circle")
			.attr("class", "mplot")
			.attr("cx", function(d) { return xScale(7); })
			.attr("cy", function(d) { return yScale(d[2012]); })
			.attr("r", 3)
			.style("fill", function(d) { return colorScaleM(d[2012]); })
			.style("opacity", 1)
			.on("mouseover", function (d) {
				d3.select("#location").text(d["Country"]);
		});


		circlesEd1 = svg.selectAll(".plot8").data(edRanksM);
		circlesEd1.enter().append("circle")
			.attr("class", "edplot")
			.attr("cx", function(d) { return xScale(1); })
			.attr("cy", function(d) { return edScale(d[2000]); })
			.attr("r", 3)
			.style("fill", "orange")
			.style("opacity", .25);

			circlesEd2 = svg.selectAll(".plot9").data(edRanksM);
			circlesEd2.enter().append("circle")
			.attr("class", "edplot")
			.attr("cx", function(d) { return xScale(7); })
			.attr("cy", function(d) { return edScale(d[2012]); })
			.attr("r", 3)
			.style("fill", "orange")
			.style("opacity", .25);

		linesEd = svg.selectAll("line7").data(edRanksM);
		linesEd.enter().append("line")
			.attr('class', 'edplot')
			.attr("x1", function(d) { return xScale(1); })
			.attr("y1", function(d) { return edScale(d[2000]); })
			.attr("x2", function(d) { return xScale(7); })
			.attr("y2", function(d) { return edScale(d[2012]); })
			.style("stroke", "orange")
			.style("opacity", .25);

			var active1 = d3.selectAll('.mplot')
			var inactive1 = d3.selectAll('.edplot')
			svg.append('circle')
				.attr("class", "switch")
				.attr("cx", 20)
				.attr("cy", 20)
				.attr("r", 10)
				.style("fill", "green")
				.style("opacity", 1)
				.on('click', function () {
					active1.style('opacity', .25);
					inactive1.style('opacity', 1);
					var tempstat = active1;
					active1 = inactive1;
					inactive1 = tempstat;
				})
				.append('text')
				.text('click me')
				.attr('color','black');



		lines26.transition().duration(1000).delay(2500)
		.attr("x2", function(d) { return xScale(7); })
		.attr("y2", function(d) { return yScale(d[2012]); })

		lines25.transition().duration(1000).delay(2000)
		.attr("x2", function(d) { return xScale(6); })
		.attr("y2", function(d) { return yScale(d[2011]); })

		lines24.transition().duration(1000).delay(1500)
		.attr("x2", function(d) { return xScale(5); })
		.attr("y2", function(d) { return yScale(d[2010]); })

		lines23.transition().duration(1000).delay(1000)
		.attr("x2", function(d) { return xScale(4); })
		.attr("y2", function(d) { return yScale(d[2009]); })

		lines22.transition().duration(1000).delay(500)
		.attr("x2", function(d) { return xScale(3); })
		.attr("y2", function(d) { return yScale(d[2008]); })
		
		lines21.transition().duration(1000)
		.attr("x2", function(d) { return xScale(2); })
		.attr("y2", function(d) { return yScale(d[2005]); })


		yScaleMort = d3.scale.linear()
			.domain([0, 10]).range([padding, width - padding]);

		 /* circles.transition().duration(1000)
			.attr("cx", function(d) { return xScale(7); })
			.attr("cy", function(d) { return yScaleMort(d[2012]); })
			.attr("r", 3)
			.style("fill", "black"); */
		})
	})

}

function gdp() {


}

function mal() { 
    //circles1.remove();
    var rScale = d3.scale.linear().domain([5, 50]).range([5, 20]);
    var colorScaleMal = d3.scale.linear().domain([5, 25, 45]).range(["#d8b365", "#f5f5f5", "#5ab4ac"]);

    circles5 = svg.selectAll(".plot5").data(undernourishment1);
    circles5.enter().append("circle")
	.attr("class", "plot")
	.attr("cx", "200px")
	.attr("cy", function(d){
		return d["ID"]*50 + "px";
	})
	.attr("r", function(d) { return rScale(d[2012]); })
	.attr("country", function(d) { return d["Country"]; })
	.style("fill", function(d) { return colorScaleMal(d[2012]); })
	.style("opacity", 1)
	.on("mouseover", function (d) {
		d3.select("#location").text(d["Country"]);
    });

    
    var rScaleE = d3.scale.linear().domain([0, 10]).range([5, 20]);

    

    circles.each(function (d, i) {
            if (isIncludedMal(d3.select(this).attr("country"))) {
            	  console.log(d3.select(this).attr("MID"));
                  d3.select(this).transition().duration(1000)
                  .attr("cx", "500px")  
                  .attr("cy", function(d){
					  return d["MID"]*50 + "px";
				  })
                  .attr("r", function(d) { return rScaleE(d[2012]); });
            }
            
            else { 
              d3.select(this).transition().duration(1000)
              .attr("cx", "0px");  

            }

            d3.select(this).append("text")
            .attr("x", function(d){ return d3.select(this).attr("cx"); })
            .text(function(d){ 
                  	return d3.select(this).attr("country");
            });
             
    });  

}
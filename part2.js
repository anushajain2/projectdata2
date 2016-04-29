// svg parameters
var width = 960,
    height = 1400;
    padding = 50;

var MalID;

var circles;
var circles1;
var circles3;
var circles21;
var circles22;
var circles23;
var circles24;
var circles25;
var circles26;
var circles27;
var lines21;
var lines21;
var lines22;
var lines22;
var lines23;
var lines23;
var lines24;
var lines24;
var lines25;
var lines25;
var lines26;
var lines26;
var circles4;
var circles5;
var lines2;
var circlesEd1;
var circlesEd2;
var linesEd;

var edRanksM;
var childMort1;
var povertyGap5N;
var povertyGap25N;
var undernourishment1;
var genderGap1;

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

function prep(){

		if(circles1!=null){
		 	circles1.remove();
		 }
		if(circles21!=null){
		 	circles21.remove();
		 }
		if(circles22!=null){
		 	circles22.remove();
		 }
		if(circles23!=null){
		 	circles23.remove();
		 }
		if(circles24!=null){
		 	circles24.remove();
		 }
		if(circles25!=null){
		 	circles25.remove();
		 }
		if(circles26!=null){
		 	circles26.remove();
		 }
		if(circles27!=null){
		 	circles27.remove();
		 }
		 if(lines21!=null){
		  	lines21.remove();
		  }
		 if(lines22!=null){
		  	lines22.remove();
		  }
		 if(lines23!=null){
		  	lines23.remove();
		  }
		 if(lines24!=null){
		  	lines24.remove();
		  }
		 if(lines25!=null){
		  	lines25.remove();
		  }
		 if(lines26!=null){
		  	lines26.remove();
		  }
	     if(circles3!=null){
		 	circles3.remove();
		 }
		 if(circles4!=null){
		 	circles4.remove();
		 }
		 if(circles5!=null){
		 	circles5.remove();
		 }
		 if(circlesEd1!=null){
		 	circlesEd1.remove();
		 }
		 if(circlesEd2!=null){
		 	circlesEd2.remove();
		 }
		 if(linesEd!=null){
		 	linesEd.remove();
		 }
		 if (d3.selectAll('.genderTit')!=null){
		 	d3.selectAll('.genderTit').remove();
		 }
		 if (d3.selectAll('.axis')!=null){
		 	d3.selectAll('.axis').remove();
		 }
		 if (d3.selectAll('.axisLeft')!=null){
		 	d3.selectAll('.axisLeft').remove();
		 }
		 if (d3.selectAll('.axisRight')!=null){
		 	d3.selectAll('.axisRight').remove();
		 }
		 if (d3.selectAll('.povMod')!=null){
		 	d3.selectAll('.povMod').remove();
		 }
		 if (d3.selectAll('.switch')!=null){
		 	d3.selectAll('.switch').remove();
		 }
}

d3.csv("GenderGap1.csv", function (error, data) {
  genderGap1 = data;
  
});

function gg() {

	prep();
	d3.select('#butti').style('display', 'none')

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

}


function gg1(){

     prep();

	 svg.append('text').attr('class','genderTit')
	 	.attr('x', padding +"px")
	 	.attr('y', '60px')
	 	.text('Education Index')

	 svg.append('text').attr('class','genderTit')
	 	.attr('x', padding +"px")
	 	.attr('y', '160px')
	 	.text('Gender Gap')

	 svg.append('line')
	 	.attr('class', 'axis')
	 	.attr("x1", padding - 20 + "px")
	 	.attr("y1", "260px")
	 	.attr("x2", 20 + width - padding + "px")
	 	.attr("y2", '260px')

	 svg.append('text').attr('class','axisLeft')
	 	.attr('x', padding +"px")
	 	.attr('y', '280px')
	 	.text('low')

	 svg.append('text').attr('class','axisRight')
	 	.attr('x', width - padding +"px")
	 	.attr('y', '280px')
	 	.text('high')

	 d3.selectAll('.verdict').remove()

	 svg.append('svg:image').attr('class','verdict')
	 	.attr('x', width/2 - (319/2.) + 'px')
	 	.attr('y', '380px')
	 	.attr('width', 319*319 + 'px')
	 	.attr('height', 117*117 + 'px')
	 	.attr("xlink:href", "http://cdn1.theodysseyonline.com/files/2016/01/28/635895540908617236-1606538601_plausible.jpg")

	 d3.select('.verdict').transition()
	 	.delay(250)
	 	.duration(3000)
	 	.attr('width', '319px')
	 	.attr('height', '117px')

     xScale = d3.scale.linear()
		.domain([0, 10]).range([padding, width - padding]);
		
	 yScale = d3.scale.linear()
		.domain([0, 10]).range([height - padding, padding]);
	circles.transition().duration(1000)
	.attr("cx", function(d) { return xScale(d[2012]); })
	.attr("cy", "100px")
	.attr("r", 10)
	.attr("country", function(d) { return d["Country"] })
	.attr("value", function(d) { return d[2012]; })
	.attr("MID", function(d){ return d["MID"]; })
	.style("fill", function(d) { return colorScale((d[2012] / 10) * 100); })
	.style("opacity", 1);

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

	prep(); 
   var size = 0;
   var size2 = 0;
   var size3 = 0;

   	svg.append('image').attr('class','povMod')
 		.attr('x', width/2 - 40 + 'px')
 		.attr('y', '10px')
 		.attr('width', 250 + 'px')
 		.attr('height', 250 + 'px')
 		.attr("xlink:href", "Model.png")

 	d3.selectAll('.verdict').remove()

 	svg.append('svg:image').attr('class','verdict')
 		.attr('x', width/2. - (284/2.) + 'px')
 		.attr('y', '900px')
 		.attr('width', 284*284 + 'px')
 		.attr('height', 111*111 + 'px')
 		.attr("xlink:href", "http://vignette2.wikia.nocookie.net/mythbuster/images/c/c8/Busted.jpg/revision/latest?cb=20130711155107")

 	d3.select('.verdict').transition()
 		.delay(250)
 		.duration(3000)
 		.attr('width', '284px')
 		.attr('height', '111px')

   var rScalePG = d3.scale.linear().domain([0, 100]).range([5, 20]);
   var colorScalePG = d3.scale.linear().domain([1, 12]).range(["#1e7b7b", "#c1f0f0"]);
 
   circles.each(function (d, i) {
            if (isIncluded(d3.select(this).attr("country"))) {
              size = size + 200;
              if(size < 1000) {
                  d3.select(this).transition().duration(1000)
                  .attr("cx", size + "px")  
                  .attr("cy", "300px")
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
              else {
              	  size3 = size3 + 200;
                  d3.select(this).transition().duration(1000)
                  .attr("cx", size3 + "px")  
                  .attr("cy", "700px")
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
              .attr("cx", "-50px");  

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
	    	return "280px";
	    } 
	    else if(d["ID"] < 9) {
            return "480px";
	    }
	    else {
	    	return "680px";
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
	    	return "320px";
	    } 
	    else if(d["ID"] < 9) {
            return "520px";
	    }
	    else {
	    	return "720px";
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
   
	prep();
	circles.transition().duration(1000).attr('cx','-50px')
	d3.csv("EducationIndexRanksM.csv", function (error, data) {
	  	edRanksM = data;

		d3.csv("ChildUnder5MortPer1000Prob.csv", function (error, data) {
			childMort1 = data;
		xScale = d3.scale.linear()
			.domain([1, 7]).range([padding, width - padding]);
			
		yScale = d3.scale.linear()
			.domain([1, 240]).range([600 - padding - 100, padding+100]);

		edScale = d3.scale.linear()
			.domain([0, 10]).range([600 - padding - 100, padding+100]);


		
		var colorScaleM = d3.scale.linear().domain([1, 120, 240]).range(["#5ab4ac", "#f5f5f5", "#d8b365"]);

		svg.append('text').attr('class','genderTit')
			.attr('x', width/2. + "px")
			.attr('y', '100px')
			.text('Child Mort. Probability per 1000 vs. Time')
			.style('text-anchor', 'middle')

		d3.selectAll('.verdict').remove()
		
		svg.append('svg:image').attr('class','verdict')
			.attr('x', width/2 - (319/2.) + 'px')
			.attr('y', '600px')
			.attr('width', 319*319 + 'px')
			.attr('height', 117*117 + 'px')
			.attr("xlink:href", "http://cdn1.theodysseyonline.com/files/2016/01/28/635895540908617236-1606538601_plausible.jpg")

		d3.select('.verdict').transition()
			.delay(250)
			.duration(3000)
			.attr('width', '319px')
			.attr('height', '117px')

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
			.style("stroke", function(d){
				return colorScaleM(d[2012])
			})
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
			.style("stroke", function(d){
				return colorScaleM(d[2012])
			})
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
			.style("stroke", function(d){
				return colorScaleM(d[2012])
			})
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
			.style("stroke", function(d){
				return colorScaleM(d[2012])
			})
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
			.style("stroke", function(d){
				return colorScaleM(d[2012])
			})
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
			.style("stroke", function(d){
				return colorScaleM(d[2012])
			})
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
			.style("fill", "#ffcc99")
			.style("opacity", .25);

			circlesEd2 = svg.selectAll(".plot9").data(edRanksM);
			circlesEd2.enter().append("circle")
			.attr("class", "edplot")
			.attr("cx", function(d) { return xScale(7); })
			.attr("cy", function(d) { return edScale(d[2012]); })
			.attr("r", 3)
			.style("fill", "#ffcc99")
			.style("opacity", .25);

		linesEd = svg.selectAll("line7").data(edRanksM);
		linesEd.enter().append("line")
			.attr('class', 'edplot')
			.attr("x1", function(d) { return xScale(1); })
			.attr("y1", function(d) { return edScale(d[2000]); })
			.attr("x2", function(d) { return xScale(7); })
			.attr("y2", function(d) { return edScale(d[2012]); })
			.style("stroke", "#ffcc99")
			.style("opacity", .25);

			var active1 = d3.selectAll('.mplot')
			var activeT = "Child Mort. Probability per 1000 vs. Time"
			var inactive1 = d3.selectAll('.edplot')
			var inactiveT = "Education Rank vs. Time"
			svg.append('circle')
				.attr("class", "switch")
				.attr("cx", 50)
				.attr("cy", 50)
				.attr("r", 10)
				.style("fill", "green")
				.style("opacity", 1)
				.on('click', function () {
					active1.style('opacity', .25);
					inactive1.style('opacity', 1);
					d3.select('.genderTit').text(inactiveT);
					var tempstat = active1;
					var tempT = activeT;
					active1 = inactive1;
					inactive1 = tempstat;
					activeT = inactiveT;
					inactiveT = tempT;
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


function mal() { 

    prep();  

    svg.append('text').attr('class','genderTit')
    	.attr('x', "500px")
    	.attr('y', '550px')
    	.text('Education Index')
    	.style('text-anchor', 'middle')

    svg.append('text').attr('class','genderTit')
    	.attr('x', "200px")
    	.attr('y', "550px")
    	.text('Malnutrition Rate')
    	.style('text-anchor', 'middle')

    svg.append('line')
    	.attr('class', 'axis')
    	.attr("x1", "650px")
    	.attr("y1", "50px")
    	.attr("x2", "650px")
    	.attr("y2", '500px')

    svg.append('text').attr('class','axisLeft')
    	.attr('x', "700px")
    	.attr('y', '50px')
    	.text('low Education Rank')

    svg.append('text').attr('class','axisLeft')
    	.attr('x', "700px")
    	.attr('y', '500px')
    	.text('high Education Rank')
    	.style("alignment-baseline", 'baseline')

	 d3.selectAll('.verdict').remove()

	 svg.append('svg:image').attr('class','verdict')
	 	.attr('x', width/2 - (400/2.) + 'px')
	 	.attr('y', '600px')
	 	.attr('width', 400*400 + 'px')
	 	.attr('height', 171*171 + 'px')
	 	.attr("xlink:href", "http://vignette2.wikia.nocookie.net/mythbusters/images/4/4a/Confirmed.png/revision/latest?cb=20110903063641")

	 d3.select('.verdict').transition()
	 	.delay(250)
	 	.duration(3000)
	 	.attr('width', '400px')
	 	.attr('height', '171px')

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
                  d3.select(this).transition().duration(1000)
                  .attr("cx", "500px")  
                  .attr("cy", function(d){
                  	  if(d["MID"]==0) { 
                  	  	return "-100px";
                  	  }
                  	  else {
 						return d["MID"]*50 + "px";
                  	  }
					  
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




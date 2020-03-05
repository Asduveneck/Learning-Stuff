/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

var svg = d3.select("#chart-area")
    .append("svg")
    .attr("width", "500")
    .attr("height", "500");

d3.json("data/buildings.json").then(function(data){
    data.forEach( d => {d.height = +d.height});

    let rects = d3.selectAll("rect")
      .data(data);

    rects.enter().append("rect")
      .attr("fill", "#672035")
      .attr("width", 40)
      .attr("height", (d) => d.height)
      .attr("x", (d, i) => 60*i)
    
}).catch(error => console.log("Bug in promise at line 12.\nError:", error))
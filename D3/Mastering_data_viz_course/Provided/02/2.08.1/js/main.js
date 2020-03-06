/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

var svg = d3.select("#chart-area")
    .append("svg")
    .attr("width", "550")
    .attr("height", "550");

d3.json("data/buildings.json").then(function(data){
    data.forEach( d => {d.height = +d.height});

    let rects = svg.selectAll("rect")
      .data(data);

    rects.enter().append("rect")
      .attr("fill", "#672035")
      .attr("width", 40)
      .attr("height", (d) => d.height) // set height to value in data
      .attr("x", (d, i) => 60*i) // Offset each one by 60
      .attr("y", (d) => 500 - d.height ) // Offset by height of SVG to make bar graph align at bottom

    let texts = svg.selectAll("text")
      .data(data);

    texts.enter().append("text")
      .text((d) => d.name)
      .attr("x", (d,i) => 80*i)
      .attr("y",  (d, i) => 500 - 10*i) 
      .attr('text-anchor', 'start')
      .attr("transform", "rotate(10)")

    
}).catch(error => console.log("Bug in promise at line 12.\nError:", error))
/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

var svg = d3.select("#chart-area")
    .append("svg")
    .attr("width", "400")
    .attr("height", "400");

d3.json("data/buildings.json").then(function(data){
    let rects = d3.selectAll("rect")
      .data(data);
    console.log("in promise. data is type ", typeof data);
    console.log("data:\n", data)
    data.forEach( d => {d.height = +d.height})
    console.log("modified data. Test:")
    console.log(data);
}).catch(error => console.log("Bug in promise at line 12.\nError:", error))
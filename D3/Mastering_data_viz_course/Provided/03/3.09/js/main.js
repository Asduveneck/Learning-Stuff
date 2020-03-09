/*
*    main.js
*    Mastering Data Visualization with D3.js
*    3.9 - Margins and groups
*/
// Defining Margin and width and height as constants up top to make it easier
// to maintain.

// define POJO to store our margins
var margin = { left:100, right:10, top:10, bottom:100 };
// defining width/height of the graph itself. We don't include our margin because 
// that space is needed for labels/axes
var width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom; // 

var g = d3.select("#chart-area")
    .append("svg")
        // size of our SVG canvas needs to include the margins
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", "translate(" + margin.left 
            + ", " + margin.top + ")")

d3.json("data/buildings.json").then(function(data){
    // console.log(data);

    data.forEach(function(d) {
        d.height = +d.height;
    });

    var x = d3.scaleBand()
        .domain(data.map(function(d){
            return d.name;
        }))
        .range([0, width])
        .paddingInner(0.3)
        .paddingOuter(0.3);

    var y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d){
            return d.height;
        })])
        .range([0, height]);

    var rects = g.selectAll("rect")
        .data(data)
        
    rects.enter()
        .append("rect")
            .attr("y", 0)
            .attr("x", function(d){ return x(d.name); })
            .attr("width", x.bandwidth)
            .attr("height", function(d){ return y(d.height); })
            .attr("fill", "grey");

})
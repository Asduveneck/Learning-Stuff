/*
*    main.js
*    Mastering Data Visualization with D3.js
*    3.6 - Band scales
*/


var svg = d3.select("#chart-area")
    .append("svg")
    .attr("width", "400")
    .attr("height", "400");

d3.json("data/buildings.json").then(function(data){
    console.log(data);

    data.forEach(function(d) {
        d.height = +d.height;
    });

    var x = d3.scaleBand()
        .domain(["Burj Khalifa", "Shanghai Tower", 
            "Abraj Al-Bait Clock Tower", "Ping An Finance Centre", 
            "Lotte World Tower", "One World Trade Center",
            "Guangzhou CTF Finance Center"]) // Array of names to match data
        /* In 3.07, I guess next lecture, you can avoid hard coding this via:
        data.map(function(d){
            return d.name;
        })) to create this array from the data...

        */
        .range([0, 400]) // reflect size of svg canvas
        .paddingInner(0.3)
        .paddingOuter(0.3);

    var y = d3.scaleLinear()
        .domain([0, 828])
        .range([0, 400]);

    var rects = svg.selectAll("rect")
            .data(data)
        .enter()
            .append("rect")
            .attr("y", 0)
            .attr("x", function(d){
                return x(d.name);
            })
            .attr("width", x.bandwidth)
            .attr("height", function(d){
                return y(d.height);
            })
            .attr("fill", function(d) {
                return "grey";
            });

})
/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Project 1 - Star Break Coffee
*/

// Setting Margins
let margin = { lft: 60, rht: 20, top: 10, bot: 50 };
margin.hz = margin.lft + margin.rht;
margin.vt = margin.top + margin.bot;

// setting graph dimensions
let width = 600 - margin.hz;
let height = 400 - margin.vt;

// setting chart dimensions
let g = d3.select("#chart-area")
  .append("svg")
    .attr("width", `${width + margin.hz}`)
    .attr("height", `${height + margin.vt}`)
  .append("g") // shift by margin for scale and labels
    .attr("transform", `translate(${margin.lft}, ${margin.top})`);

// label
g.append("text")
  .attr("class", "x-axis label")
  .attr("x", width / 2)
  .attr("y", height + margin.top + margin.bot/2)
  .attr("font-size", "50px")
  .attr("text-anchor", "middle")
  .text("Month");

g.append("text")
  .attr("class", "y-axis label")
  .attr("x", -height/2)
  .attr("y", -margin.lft*.9)
  .attr("font-size", "50px")
  .attr("text-anchor", "middle")
  .attr("transform", "rotate(-90)")
  .text("Revenue");



d3.json("data/revenues.json").then( (data) => {
  // console.log(data) // month , revenue, profit
  // data:
  data.forEach( (d) => {
    d.revenue = +d.revenue; // convert to string
    d.profit = +d.profit; // convert to string
  })
  // X and Y Scales
  let x = d3.scaleBand()
    .domain(data.map( (d) => d.month))
    .range([0, width])
    .paddingInner(0.3)
    .paddingOuter(0.1)

  let y = d3.scaleLinear()
    .domain([0, d3.max(data, (d) => d.revenue)])
    .range([height, 0]);

  // X amd Y axes
  let xAxisCall = d3.axisBottom(x);
  g.append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0, ${height})`)
    .call(xAxisCall)
    .selectAll("text")
      .attr("text-anchor", "start");
    
  let yAxisCall = d3.axisLeft(y)
    .tickFormat( (d) => "$" + d )
  g.append("g")
    .attr("class", "y-axis")
    .call(yAxisCall);

  // Bars:
  let rects = g.selectAll("rect")
    .data(data);
  
    rects.enter()
      .append("rect")
        .attr("y", (d) => y(d.revenue) )
        .attr("x", (d) => x(d.month) )
        .attr("width",  x.bandwidth )
        .attr("height", (d) => height - y(d.revenue) )
        .attr("fill", "grey")
});
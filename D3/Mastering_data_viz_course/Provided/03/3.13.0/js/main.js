/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Project 1 - Star Break Coffee
*/

// Setting Margins
let margin = { lft: 40, rht: 20, top: 10, bot: 30 };
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

d3.json("data/revenues.json").then( (data) => {
  // console.log(data) // month , revenue, profit
  data.forEach( (d) => {
    d.revenue = +d.revenue; // convert to string
    d.profit = +d.profit; // convert to string
  })

  let x = d3.scaleBand()
    .domain(data.map( (d) => d.month))
    .range([0, width])
    .paddingInner(0.3);

  let y = d3.scaleLinear()
    .domain([0, d3.max(data, (d) => d.revenue)])
    .range([height, 0]);

});
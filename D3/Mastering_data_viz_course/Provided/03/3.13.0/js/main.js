/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Project 1 - Star Break Coffee
*/
let margin = { lft: 40, rht: 20, top: 10, bot: 30 };
margin.hz = margin.lft + margin.rht;
margin.vt = margin.top + margin.bot;
console.log(margin);
let width = 600 - margin.hz;
let height = 400 - margin.vt;

let g = d3.select("#chart-area")
  .append("svg")
    .attr("width", `${width + margin.hz}`)
    .attr("height", `${height + margin.vt}`)
  .append("g")
    .attr("transform", `translate(${margin.lft}, ${margin.top})`);

d3.json("data/revenues.json").then( (data) => {
  // console.log(data) // month , revenue, profit


});
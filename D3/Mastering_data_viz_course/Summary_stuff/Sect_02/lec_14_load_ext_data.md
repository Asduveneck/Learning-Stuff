### What data does d3 take?
  csv, tsv, or json (via `d3.csv("File_Path").then( (data) => {} )`, `d3.tsv("File_Path").then( (data) => {} )`, or `d3.json("File_Path").then( (data) => {} )`)

### What are these files like?

csv or tsv: commas or tabs form columns.
json: large javascript object.

### Warning:

  This is what screwed you over when you first tried teaching yourself. Before version 5, loading data was based upon callbacks.

ex:
```js
d3.csv("File_Path", function(data) {
  // code
})
```

  But now, with promises, we use the `.then()`. (or even `Promise.all`).
  
*NB: Unfortunately, this course was originally written in v4 so we'll have to catch it ourselves.*


### Ex: 

  Check out `main.js` in `Provided/02/2.07/js/main.js`.
  Data is often read in as a text file. So we need to convert the elements from a string to an integer.
```js
d3.tsv("data/ages.tsv").then(function(data){
    data.forEach(function(d){
        d.age = +d.age; // converts string to integer
    });
})
```

  Then we should take our data and apply it to our circles.

```js
d3.tsv("data/ages.tsv").then(function(data){
    data.forEach(function(d){
        d.age = +d.age;
    });

    var svg = d3.select("#chart-area").append("svg")
        .attr("width", 400)
        .attr("height", 400);

    var circles = svg.selectAll("circle")
        .data(data);

    circles.enter()
        .append("circle")
            .attr("cx", function(d, i){
                console.log(d); // each d is now an object with `name`, `age`.
                return (i * 50) + 25;
            })
            .attr("cy", 25)
            .attr("r", function(d){
                return d.age * 2; // Need to key into our POJO
            })
            .attr("fill", function(d){
                if (d.name == "Tony") {
                    return "blue";
                }
                else {
                    return "red";
                }
            });
}).catch(function(error){ // error handling
    console.log(error); // promise was rejected. Like if we misspelled our file.
})
```
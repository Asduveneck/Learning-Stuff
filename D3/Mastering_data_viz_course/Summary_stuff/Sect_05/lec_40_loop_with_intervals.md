### Lecture Goals

  For interactivity We need some way of refreshing the page to change something our chart can react to.
  We'll learn the syntax between d3's interval and jQuery's set interval function.




### Intervals:

An easy way of updating our data automatically is to add an interval.

#### Example Interval Code:
**d3 approach:**
```js
d3.interval(function() {
  // code
}, 500) // runs every 500 ms
```
**jQuery Approach**
```js
let myInterval = setInterval( function() {
  //code goes here
}, 500)
// Stopping the loop
clearInterval(myInterval);
```

### Ex: Adding intervals to our data reading

See `Mastering_data_viz_course/Provided/05/5.02/js/main.js` Line 81

We just console log an interval in d3.
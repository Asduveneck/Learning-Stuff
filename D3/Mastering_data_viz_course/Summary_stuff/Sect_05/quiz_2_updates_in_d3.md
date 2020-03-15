Question 1: We're setting an itnerval to respond every 100ms (or .1 seconds). Since we don't clear the interval, it will go to infinity.

Question 2: How to join data?
  It should be the same as before.
  `.selectAll('attribute like circle or rect').data(data)`
Question 3:
  To remove data no longer being used, it's as simple as calling `.exit().remove()` on the thing we're trying to remove.

Question 4:
  To update our data or elements already present, we just take that object or selection group, and specify the attributes. Hence: `circles.attr( 'r' ... )`

Question 5:
  Lastly, to add more data with an update, we can just call `.enter().append().attr()...` as before...
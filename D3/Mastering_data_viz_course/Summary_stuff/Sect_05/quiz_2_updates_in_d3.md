Question 1: We're setting an itnerval to respond every 100ms (or .1 seconds). Since we don't clear the interval, it will go to infinity.

Question 2: How to join data?
  It should be the same as before.
  `.selectAll('attribute like circle or rect').data(data)`
Question 3:
  To remove data no longer being used, it's as simple as calling `.exit().remove()` on the thing we're trying to remove.
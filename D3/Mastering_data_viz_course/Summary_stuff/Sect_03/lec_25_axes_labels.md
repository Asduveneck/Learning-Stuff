### Main topics
 
 Why does this matter? You need labels to interpret your bar chart. Clearly.

  * Using D3 axis generators in bar chart to show scale
  * Adding axis labels to tell us what we're looking at

### How do we make axis?

D3 has 4 inbuilt methods to generate axis. We'll most often use:
  - `d3.axisLeft('Y Scale')` and `d3.axisBottom('X Scale')`

But we can also use:
  - `d3.axisLeft('Y Scale')` and/or `d3.axisBottom('X Scale')`.

All of these will be based in the origin/center of our canvas (top or left), so we need to move them to the proper place if the axis is on the right or bottom.
<details>
<summary>Example Screenshot of code</summary>

![Code and visualization](Screenshots/lec_25_4_axis.png)
</details>

To do the movement, we'll want to place the axis in a `group` and `translate` them.
Afterwards, we use the `.call()` method to generate the axis.

#### Customizing the ticks

##### Size:
There are 3 methods to adjust tick sizes:
  * `tickSizeOuter("VALUE")`: which affects the outermost ticks only
  * `tickSizeInner("VALUE")`: which affects the inner ticks only
  * `tickSize("VALUE")`: which affects ALL ticks

When we chain these methods, the stuff further down the chain overrides the previous.
```js
d3.axisBottom(x)
  .tickSizeInner("VALUE A") // initially sets inner tick sizes
  .tickSize("VALUE B");  // Overwrites tickSizeInner!
```

##### How many ticks?
```js
d3.axisBottom(x)
  .ticks(10);
```
D3 places the # of ticks based upon some algorithm, so we won't always get the # we specify

##### Text Formatting?

To specify floating point with no decimals:
```js
d3.axisBottom(x)
  .tickFormat(d3.format(",.0f"));
```
Custom formatting:

```js
d3.axisBottom(x)
  .tickFormat( (d) => "TICK TEXT"  );
```

##### Specifying explicit values

```js
d3.axisBottom(x)
  .tickValues( [1, 2, 3, 5, 8, 13, 21] )
```

  **NB:**If you use `tickValues` and `tickFormat`, d3 will take your tick values and pass them into `tickFormat`.

### Ex Code: 3.10
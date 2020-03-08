### Summary:
* Ordinal scales are used for assigning color schemes to categorical data
* D3 has some inbuilt color schemes we can use for our visualizations

### When do we use Ordinal Scales?

We almost always only use this with categorical data, to match one string to another.

**Ex:**
| Domain: | Range: |
| -- | -- |
| `["Africa", "NA", "Asia" ]` | `["Red", "Blue", "Green", "Orange"]`|

Africa returns Red, NA Blue, Asia Green.

If we throw in a new value into our domain, say, `"Australia"`, then we move on to the next available value in our range (`"Orange"`).

However, if we run out of our range and we toss in another value, say, `"Antarctica"`, then we loop back to the start of our Range, `"Red"`.

Hence, there is no way to call `.invert()` on our scale because a color could be associated with multiple values...

### D3 schema examples

D3 has a few template schemes already for us to use. 
Just go to github.com/d3/d3-scale-chromatic to see the scheme.

### Example Code

**Ex 1: Manual scale**
```js
let color = d3.scaleOrdinal()
  .domain(["Africa", "NA", "Asia" ])
  .range(["Red", "Blue", "Green", "Orange"])
```

**Ex 2:  Provided scale**
```js
let color = d3.scaleOrdinal()
  .domain(["Africa", "NA", "Asia" ])
  .range(d3.schemeCategory10)
```
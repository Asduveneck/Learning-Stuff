Lecture contents
  What are SVG basics?
  How to position them?
  Rules about positioning?
  And syntax?

You'll need a SVG tag to wrap around svg image.

Within a canvas, we start by positioning in the top left corner (0,0)

If we position shapes outside the SVG canvas, we won't have it show up.

We can give svg a shape, a fill, and a border (via stroke). Borders show up on the outside.

What are some common shapes?
  * `<circle>`: circles take cx, cy, r, and you can give them a fill.
  * ellipses are similar but here we have rx and ry.
  * A straight line can be drawn as a `<line/>` tag.
  * We can render text, and by default, the positon is the top left. We can adjust that with the `text-anchor` attribute
  * paths are the most powerful...

Code in action:
`Provided/02/2.03`
```html
<svg width="400" height="60">
    <!-- "x" and "y" coordinates give a shape its position (top left hand corner) -->
    <rect x="0" y="0" width="50" height="50" fill="green"></rect>

    <!-- For circles, choose the center with "cx" and "cy", and the radius with "r" -->
    <circle cx="90" cy="25" r="25" fill="red"></circle>

    <!-- Ellipses are similar, but they take "ry" and "rx" attributes -->
    <ellipse cx="145" cy="25" rx="15" ry="25" fill="grey"></ellipse>

    <!-- Lines need two paris of coordinates and a stroke width -->
    <line x1="185" y1="5" x2="230" y2="40" stroke="blue" stroke-width="5"></line>

    <!-- Text takes an x/y coordinate and a font size -->
    <text x="260" y="25" font-size="20px" fill="orange">Hello World</text>
</svg>
```

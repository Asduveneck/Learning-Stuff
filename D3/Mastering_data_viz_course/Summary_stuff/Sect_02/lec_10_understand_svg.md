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

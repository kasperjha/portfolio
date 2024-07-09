---
slug: "kalf-process"
title: "Learning SVG animation with baby cows"
description: "I experiment with single line drawings of baby cows to populate a new domain and learn how to animate SVGs."
published: "2024-07-08"
tags:
 - "oss"
 - "code"
 - "nuxt"
 - "strapi"
---

*TL;DR: Some weeks ago, I made a website with drawings of cows. It was a chance to experiment with single-line drawings and SVG animation.*

Recently, I bought the domain [kalf.no](https://kalf.no) while procrastinating my thesis and decided to make a website for it. "Kalf" means "calf" in dutch, but also nicely abbreviates my name.

SVG animation can be used to create some stunning effects on the web, and I've been keen to try it for myself for some time. Have a look at this [example by magicui](https://magicui.design/docs/components/animated-beam).

![magic-ui-effect](/magic-ui-effect.gif)

I decided to go with the cow theme and made some sketches on paper. I wanted something that would be simple enough to recreate as an SVG while also being aesthetically pleasing, but this proved challenging.

Looking for inspiration, I remembered how we did single-line drawings as a creativity exercise in media school. It was fun to try to capture the essence of a baby cow in a single line, and somehow it made it easier to be satisfied with the result.

![kalf digital sketches](/kalf-digital-sketches.png)

These were done on my laptop trackpad, and I think they came out pretty alright. The biggest challenge was to avoid backtracking over already drawn lines.

The exercise made me appreciate the simplicity and immediate recognizability of this Picasso piece.

![picasso dog](/kalf-picasso-dog.jpg)

With some SVGs to animate, I set out to figure out how to animate them. The first thing I found was the GSAP [DrawSVG plugin](https://gsap.com/docs/v3/Plugins/DrawSVGPlugin/). This did exactly what I was looking for, but it was paid, so I kept looking.

After some research, Stack Overflow taught me that I could achieve the same effect by exploiting some CSS properties. More specifically, the `stroke-dasharray` and `stroke-dashoffset` properties, which are used to make dashed strokes/borders.

Apparently, it's possible to make a stroke that consists of a single dash. If the dash is as long as the path, the offset can be animated to create the drawing effect:

![drawing effect gif](/drawing-effect.gif)

A JavaScript function reads the length of the SVG path and updates the stroke-dashoffset property in small increments. A timeout delays the next update a few milliseconds so the user can enjoy the animation.

```js
function drawPath(path, duration, delay) {
  let pathLength = path.getTotalLength();
  path.style.strokeDasharray = pathLength.toString();
  path.style.strokeDashoffset = pathLength.toString();

  let numSteps = (duration / delay);

  const step = () => {
    pathLength -= pathLength / numSteps;
    path.style.strokeDashoffset = pathLength.toString();
    if(1 <= numSteps ) {
      numSteps -= 1;
      setTimeout(step, delay);
    }
  }

  step()
}
```

Finally, I added a pleasing layout and some functionality to browse the available drawings. Friends contributed their own drawings to the project.

You can check out the live website at [kalf.no](https://kalf.no), and here is what it looks like at the time of writing:

![final site](/kalf_no.jpeg)

While not the best use of my time, it was great to get it out of my system and learn a little bit of SVG animation.

It was also a good chance to collect a piece of memorabilia from departing university friends, as many are leaving the city for good this year.

Maybe in a future procrastination session, I'll look at using the native SVG `animation` element and try some more challenging effects.

Thanks for reading!

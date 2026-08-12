// Lesson text and quiz questions for "Computer Graphics".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "computer-graphics-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Computer graphics is the field of using a computer to create, store and show pictures. Every game, movie effect, app icon, chart and even the text you are reading right now is drawn by graphics code. The core question it answers is: how do we turn numbers in memory into an image a human can see?"
    },
    {
     "type": "text",
     "text": "There are two big styles. Raster graphics describes a picture as a grid of coloured dots (think of a mosaic). Vector graphics describes a picture as math shapes like lines and curves (think of a recipe: 'draw a circle here, radius 20'). Photos are raster; logos and fonts are usually vector because they can scale without getting blurry."
    },
    {
     "type": "text",
     "text": "We also split the field by direction. Rendering means going from a model (a description of a scene) to an image — this is what a GPU does. Image processing goes the other way, taking an existing image and changing it, like a photo filter. This track focuses on rendering: how the picture gets built."
    },
    {
     "type": "tip",
     "text": "Analogy: raster is a finished painting made of tiny tiles; vector is the instructions for painting it. One is the 'what it looks like', the other is the 'how to make it'."
    }
   ],
   "recap": "Computer graphics turns numbers into pictures; raster stores dots, vector stores shapes, and rendering means model-to-image."
  },
  "quiz": [
   {
    "q": "What best describes computer graphics?",
    "options": [
     "Using a computer to create and display images",
     "A type of computer hardware",
     "Sorting numbers quickly",
     "Only editing photographs"
    ],
    "answer": 0,
    "explain": "Computer graphics is broadly about creating, storing and showing images with a computer."
   },
   {
    "q": "Which format stores a picture as a grid of coloured dots?",
    "options": [
     "Vector graphics",
     "Audio format",
     "Raster graphics",
     "Text format"
    ],
    "answer": 2,
    "explain": "Raster graphics represents an image as a grid of pixels (dots)."
   },
   {
    "q": "Why do logos often use vector graphics?",
    "options": [
     "They are always black and white",
     "They use less colour",
     "They cannot be printed",
     "They scale to any size without becoming blurry"
    ],
    "answer": 3,
    "explain": "Vector shapes are defined by math, so they stay sharp at any scale."
   },
   {
    "q": "'Rendering' in graphics means going from...",
    "options": [
     "Vector to text",
     "A scene model to a final image",
     "One colour to another",
     "Image back to sound"
    ],
    "answer": 1,
    "explain": "Rendering takes a description of a scene and produces the displayed image."
   }
  ]
 },
 "computer-graphics-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A pixel (short for 'picture element') is the smallest dot your screen can control. Your display is a rectangular grid of these pixels — for example 1920 across by 1080 down, which we call the resolution. Every image on a raster display is really just each pixel being told what colour to be."
    },
    {
     "type": "text",
     "text": "Most screens make colours by mixing Red, Green and Blue light (RGB). Each channel is usually a number from 0 to 255, so one pixel takes 3 bytes. That gives 256 x 256 x 256 = about 16.7 million possible colours, often called 'true colour' or 24-bit colour. (255,0,0) is pure red; (255,255,255) is white; (0,0,0) is black."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Colour of one pixel as RGB (0-255 per channel)\nred   = (255, 0, 0)\nwhite = (255, 255, 255)\nblack = (0, 0, 0)\n\n# Memory for a 1920x1080 true-colour frame, in megabytes\nwidth, height, bytes_per_pixel = 1920, 1080, 3\nframe_bytes = width * height * bytes_per_pixel\nprint(frame_bytes / (1024 * 1024))  # about 5.93 MB"
    },
    {
     "type": "text",
     "text": "The block of memory that holds every pixel's colour for one screenful is called the framebuffer. The display hardware reads the framebuffer many times per second (the refresh rate, e.g. 60 Hz) and lights up the pixels. To draw anything, you are really just writing colour values into this framebuffer."
    },
    {
     "type": "tip",
     "text": "More pixels (higher resolution) means a sharper image but a bigger framebuffer to store and push around — that is why 4K needs more memory and power than HD."
    }
   ],
   "recap": "A screen is a grid of pixels, each an RGB colour; the framebuffer holds all of them and the display refreshes it many times per second."
  },
  "quiz": [
   {
    "q": "What is a pixel?",
    "options": [
     "A type of cable",
     "A whole image",
     "A unit of sound",
     "The smallest controllable dot of a display"
    ],
    "answer": 3,
    "explain": "A pixel (picture element) is the smallest addressable dot on a raster display."
   },
   {
    "q": "In 24-bit RGB, how many bytes does one pixel use?",
    "options": [
     "8 bytes",
     "16 bytes",
     "1 byte",
     "3 bytes"
    ],
    "answer": 3,
    "explain": "One byte each for Red, Green and Blue makes 3 bytes per pixel."
   },
   {
    "q": "Which RGB value is pure white?",
    "options": [
     "(0, 0, 0)",
     "(255, 255, 255)",
     "(255, 0, 0)",
     "(0, 0, 255)"
    ],
    "answer": 1,
    "explain": "All three channels at maximum (255) produce white."
   },
   {
    "q": "What is stored in the framebuffer?",
    "options": [
     "Sound samples",
     "Only the mouse position",
     "The program's source code",
     "The colour of every pixel for one screen image"
    ],
    "answer": 3,
    "explain": "The framebuffer holds the colour data for every pixel of the current frame."
   }
  ]
 },
 "computer-graphics-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "To draw a shape you must say where it goes, and that needs a coordinate system: an origin (the (0,0) point) and axes. In everyday math class, x goes right and y goes up, with the origin at the bottom-left. This is the 'world' way most people picture points."
    },
    {
     "type": "text",
     "text": "But most screen and image systems put the origin at the top-left, with x going right and y going DOWN. This surprises beginners: on a screen, a larger y value is lower on the display, not higher. The reason is historical — screens were drawn top row first, left to right, like reading a page."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// HTML canvas: origin is top-left, y grows downward\nctx.fillRect(0, 0, 50, 50);   // square in the TOP-left corner\nctx.fillRect(0, 200, 50, 50); // this square is LOWER on screen\n\n// Flip a math-style y (origin bottom-left) to screen y:\nfunction toScreenY(mathY, height) {\n  return height - mathY;\n}"
    },
    {
     "type": "text",
     "text": "Because different stages use different coordinate spaces, graphics pipelines convert between them. We speak of world coordinates (where objects live in the scene), and screen or device coordinates (actual pixel positions). A viewport transform maps the part of the world we care about onto the pixel grid of the window."
    },
    {
     "type": "tip",
     "text": "When something appears upside-down or off-screen, the first thing to check is your coordinate system: is the origin where you think, and does y go up or down?"
    }
   ],
   "recap": "Positions need an origin and axes; screens usually put (0,0) top-left with y going down, so we transform between world and screen coordinates."
  },
  "quiz": [
   {
    "q": "On most computer screens, where is the origin (0,0)?",
    "options": [
     "Bottom-right corner",
     "Centre of the screen",
     "Top-left corner",
     "Bottom-left corner"
    ],
    "answer": 2,
    "explain": "Screen and image coordinate systems typically place the origin at the top-left."
   },
   {
    "q": "On a screen with a top-left origin, increasing the y value moves a point...",
    "options": [
     "It does not move",
     "Downward",
     "To the left",
     "Upward"
    ],
    "answer": 1,
    "explain": "In screen space y grows downward, so a larger y is lower on the display."
   },
   {
    "q": "What does a viewport transform do?",
    "options": [
     "Compresses the framebuffer",
     "Changes pixel colours",
     "Plays a sound",
     "Maps world coordinates onto the pixel grid of the window"
    ],
    "answer": 3,
    "explain": "The viewport transform maps the chosen part of the world into device/pixel coordinates."
   }
  ]
 },
 "computer-graphics-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A pixel grid can only turn dots on or off, yet we want smooth lines and circles. Scan conversion (or rasterization) is the job of deciding which pixels to light up to best approximate a shape. The challenge: pixels are whole numbers, but a true line's points are fractions."
    },
    {
     "type": "text",
     "text": "A naive line uses y = m*x + c and rounds y for each x. It works but uses floating-point math and rounding at every step, which is slow. The classic fix is Bresenham's line algorithm: it uses only integer additions and a running 'error' term to decide, at each column, whether to step down a row. Fast, exact, and it made real-time graphics practical on early hardware."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def bresenham(x0, y0, x1, y1):\n    pixels = []\n    dx = abs(x1 - x0); dy = abs(y1 - y0)\n    sx = 1 if x0 < x1 else -1\n    sy = 1 if y0 < y1 else -1\n    err = dx - dy\n    while True:\n        pixels.append((x0, y0))     # light this pixel\n        if x0 == x1 and y0 == y1:\n            break\n        e2 = 2 * err\n        if e2 > -dy:\n            err -= dy; x0 += sx\n        if e2 < dx:\n            err += dx; y0 += sy\n    return pixels"
    },
    {
     "type": "text",
     "text": "Circles use a similar idea plus a shortcut called symmetry: once you compute the pixels for one 45-degree slice (octant), the other seven slices are mirror images, so you get them for free. The midpoint circle algorithm walks that one arc using integer math, testing whether the next pixel is inside or outside the true circle."
    },
    {
     "type": "tip",
     "text": "Diagonal or curved lines look 'staircased' — this is called aliasing (the jaggies). Anti-aliasing softens it by colouring edge pixels partly, blending them into the background."
    }
   ],
   "recap": "Scan conversion picks pixels for shapes; Bresenham draws lines with integer math, and circles exploit 8-way symmetry — jagged edges are fixed by anti-aliasing."
  },
  "quiz": [
   {
    "q": "What is scan conversion (rasterization)?",
    "options": [
     "Scanning a paper document",
     "Converting sound to text",
     "Deleting a framebuffer",
     "Choosing which pixels to light to approximate a shape"
    ],
    "answer": 3,
    "explain": "Scan conversion decides which pixels represent a geometric shape on the grid."
   },
   {
    "q": "Why is Bresenham's line algorithm preferred over the naive y = mx + c method?",
    "options": [
     "It draws in colour only",
     "It works only for vertical lines",
     "It uses only fast integer arithmetic",
     "It needs no maths at all"
    ],
    "answer": 2,
    "explain": "Bresenham replaces slow floating-point rounding with integer adds and an error term."
   },
   {
    "q": "How does the circle algorithm save work using symmetry?",
    "options": [
     "It draws only the centre",
     "It skips half the circle entirely",
     "It uses random pixels",
     "It computes one octant and mirrors it into eight"
    ],
    "answer": 3,
    "explain": "One 45-degree arc is computed and reflected to fill all eight octants."
   },
   {
    "q": "The 'staircase' look on diagonal lines is called...",
    "options": [
     "Rendering",
     "Refresh rate",
     "Aliasing (the jaggies)",
     "Resolution"
    ],
    "answer": 2,
    "explain": "Aliasing is the jagged stair-step artifact, reduced by anti-aliasing."
   }
  ]
 },
 "computer-graphics-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "To move, spin and resize shapes we use transformations. The three basics are translation (slide a point by adding to x and y), scaling (multiply x and y to grow or shrink), and rotation (turn a point around the origin by an angle). Applied to every vertex of a shape, they move the whole shape."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import math\n\ndef translate(x, y, tx, ty):\n    return (x + tx, y + ty)\n\ndef scale(x, y, sx, sy):\n    return (x * sx, y * sy)\n\ndef rotate(x, y, angle_deg):\n    a = math.radians(angle_deg)\n    return (x * math.cos(a) - y * math.sin(a),\n            x * math.sin(a) + y * math.cos(a))"
    },
    {
     "type": "text",
     "text": "Graphics systems represent these as matrices, because a matrix can be multiplied with a point to transform it. The clever trick is homogeneous coordinates: we write a 2D point as (x, y, 1) and use 3x3 matrices. This lets even translation — which is an addition — be expressed as a matrix multiply, so ALL transforms become the same kind of operation."
    },
    {
     "type": "text",
     "text": "The real payoff is composition. If you want to scale then rotate then translate, you multiply the three matrices once into a single combined matrix, then apply that one matrix to every vertex. This is why GPUs love matrices: thousands of points get transformed by the same compact multiply. Note order matters — rotate-then-translate differs from translate-then-rotate."
    },
    {
     "type": "tip",
     "text": "To rotate a shape about its own centre (not the origin), translate it to the origin, rotate, then translate back. Many 'why is my object flying off?' bugs are really 'I rotated around the wrong point'."
    }
   ],
   "recap": "Translate, scale and rotate move shapes; homogeneous 3x3 matrices unify them so transforms can be composed into one matrix — and order of operations matters."
  },
  "quiz": [
   {
    "q": "Which transformation slides a shape without changing its size or angle?",
    "options": [
     "Rotation",
     "Translation",
     "Clipping",
     "Scaling"
    ],
    "answer": 1,
    "explain": "Translation adds an offset to each point, moving it without resizing or turning."
   },
   {
    "q": "Why are homogeneous coordinates (x, y, 1) used?",
    "options": [
     "They let translation also be done as a matrix multiply",
     "They reduce the number of pixels",
     "They are required for sound",
     "They make images colourful"
    ],
    "answer": 0,
    "explain": "Homogeneous coordinates express translation as multiplication, unifying all transforms as matrices."
   },
   {
    "q": "What is the main advantage of combining transforms into one matrix?",
    "options": [
     "It removes the need for pixels",
     "It changes the screen resolution",
     "Each vertex is transformed by a single multiply",
     "It makes colours brighter"
    ],
    "answer": 2,
    "explain": "Composing transforms means every vertex needs only one matrix multiply instead of many steps."
   },
   {
    "q": "Does the order of applying rotation and translation matter?",
    "options": [
     "Only for scaling",
     "Only in 3D",
     "Yes, different orders give different results",
     "No, results are always identical"
    ],
    "answer": 2,
    "explain": "Matrix multiplication is not commutative, so transform order changes the outcome."
   }
  ]
 },
 "computer-graphics-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Moving to 3D adds a z axis for depth, so points become (x, y, z). Objects are usually built from triangles (meshes) because a triangle is the simplest flat surface and hardware can rasterize it very fast. The 2D matrix ideas extend directly: we use 4x4 matrices and homogeneous points (x, y, z, 1)."
    },
    {
     "type": "text",
     "text": "The big new step is projection: flattening 3D onto the 2D screen. Perspective projection makes far things smaller (like real eyes and cameras, giving depth), while orthographic projection keeps sizes constant (used in CAD and some strategy games). Projection is again just a matrix multiply in the pipeline."
    },
    {
     "type": "text",
     "text": "When two triangles overlap, which one is visible? The z-buffer (depth buffer) solves this. Alongside the colour framebuffer we keep a depth value per pixel. Before drawing a pixel we compare its z to the stored one and only paint it if it is closer, then update the depth. This automatically handles objects hiding each other in any order."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Per-pixel z-buffer (depth) test\ndef draw_pixel(x, y, z, colour, framebuffer, zbuffer):\n    if z < zbuffer[y][x]:      # closer than what's already there\n        zbuffer[y][x] = z\n        framebuffer[y][x] = colour\n    # else: hidden behind something nearer -> skip"
    },
    {
     "type": "text",
     "text": "Clipping removes the parts of shapes that fall outside the visible view — the screen edges in 2D, or the view 'frustum' (a truncated pyramid) in 3D. It saves work by never rasterizing off-screen pixels and prevents math errors behind the camera. Classic methods include Cohen-Sutherland for lines (region outcodes) and Sutherland-Hodgman for polygons."
    },
    {
     "type": "tip",
     "text": "Mental model of the 3D pipeline: place objects (model), position the camera (view), flatten to screen (projection), decide what is on-screen (clip), fill triangles (rasterize), and resolve overlaps (z-buffer)."
    }
   ],
   "recap": "3D adds depth via z and 4x4 matrices; projection flattens to the screen, the z-buffer resolves what hides what, and clipping discards anything outside the view."
  },
  "quiz": [
   {
    "q": "Which projection makes distant objects appear smaller?",
    "options": [
     "No projection can do this",
     "Parallel projection",
     "Orthographic projection",
     "Perspective projection"
    ],
    "answer": 3,
    "explain": "Perspective projection shrinks far objects, mimicking how eyes and cameras see depth."
   },
   {
    "q": "What problem does the z-buffer solve?",
    "options": [
     "Deciding which surface is visible when objects overlap",
     "Storing sound with images",
     "Choosing pixel colours randomly",
     "Increasing the refresh rate"
    ],
    "answer": 0,
    "explain": "The z-buffer stores per-pixel depth so nearer surfaces correctly hide farther ones."
   },
   {
    "q": "Why is clipping useful?",
    "options": [
     "It adds more colours",
     "It rotates the camera",
     "It doubles the resolution",
     "It avoids drawing parts outside the visible view"
    ],
    "answer": 3,
    "explain": "Clipping discards geometry outside the view, saving work and avoiding errors."
   },
   {
    "q": "3D transformations typically use which size of matrix?",
    "options": [
     "2x2",
     "4x4",
     "1x1",
     "3x3"
    ],
    "answer": 1,
    "explain": "3D uses 4x4 matrices with homogeneous (x, y, z, 1) coordinates, extending the 2D case."
   }
  ]
 },
 "computer-graphics-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Straight lines are easy, but car bodies, fonts, and animation paths need smooth curves. A Bezier curve is defined by a small set of control points: the curve starts at the first point, ends at the last, and the points in between pull the curve toward them like magnets without the curve actually touching them."
    },
    {
     "type": "text",
     "text": "The most common case is the cubic Bezier curve, with 4 control points P0, P1, P2, P3. As a parameter t goes from 0 to 1, a formula blends the four points into one moving point, tracing the curve. This is exactly how the pen tool in tools like Photoshop or Illustrator works, and it is how letters in fonts (like TrueType and PostScript) are drawn."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def cubic_bezier(p0, p1, p2, p3, t):\n    x = (1-t)**3*p0[0] + 3*(1-t)**2*t*p1[0] + 3*(1-t)*t**2*p2[0] + t**3*p3[0]\n    y = (1-t)**3*p0[1] + 3*(1-t)**2*t*p1[1] + 3*(1-t)*t**2*p2[1] + t**3*p3[1]\n    return (x, y)\n\n# sample 6 points along the curve (t = 0, 0.2, ... 1.0)\nfor i in range(6):\n    t = i / 5\n    print(cubic_bezier((0,0), (0,2), (2,2), (2,0), t))"
    },
    {
     "type": "text",
     "text": "One curve is often not flexible enough for a whole shape, so designers chain many small Bezier pieces together into a spline. A B-spline is built the same way but gives local control: moving one control point only reshapes the nearby part of the curve, instead of distorting the whole thing. That is why B-splines are preferred for complex car and character models."
    },
    {
     "type": "tip",
     "text": "Remember: a Bezier curve passes through its first and last control point only. The middle points are 'attractors', not points on the curve. This trips up almost everyone the first time."
    }
   ],
   "recap": "Bezier curves use a handful of control points to define smooth curves used in fonts and design tools; B-splines chain curve pieces together so editing one part does not disturb the rest."
  },
  "quiz": [
   {
    "q": "In a cubic Bezier curve, which control points does the curve actually pass through?",
    "options": [
     "All four control points",
     "Only the first and last",
     "Only the middle two",
     "None of them"
    ],
    "answer": 1,
    "explain": "The curve starts at P0 and ends at P3; P1 and P2 only pull the curve's shape without lying on it."
   },
   {
    "q": "What is the main advantage of a B-spline over a single large Bezier curve?",
    "options": [
     "It removes the need for control points",
     "It uses fewer colours",
     "It always draws straight lines",
     "Moving one control point only affects a local part of the curve"
    ],
    "answer": 3,
    "explain": "B-splines give local control, so a designer can tweak one section of a complex shape without disturbing the rest."
   },
   {
    "q": "Bezier curves are the technology behind which everyday feature?",
    "options": [
     "Sound compression",
     "Font outlines and the pen tool in design software",
     "Network routing",
     "CPU scheduling"
    ],
    "answer": 1,
    "explain": "Fonts like TrueType and design tools' pen tools are built directly on Bezier curve math."
   }
  ]
 },
 "computer-graphics-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Once we have 3D points, we need a way to describe a whole object, not just its corners. A wireframe model stores only vertices and the edges connecting them, drawn as a see-through skeleton of lines. It is cheap to store and render but cannot show solid, filled surfaces or hide what is behind the object."
    },
    {
     "type": "text",
     "text": "A boundary representation (B-Rep) goes further: it stores the surfaces (usually triangles or polygons) that enclose the solid, along with which edges and vertices belong to which face. This is what almost every game and 3D modelling tool uses today, because GPUs are built to rasterize triangles extremely fast."
    },
    {
     "type": "text",
     "text": "Constructive Solid Geometry (CSG) takes a different approach: it builds complex solids by combining simple ones (cubes, spheres, cylinders) with boolean operations — union (add), intersection (keep only the overlap), and difference (cut one shape out of another). CAD software for mechanical parts uses CSG heavily, since machined parts are naturally described as 'a block with two holes drilled through it'."
    },
    {
     "type": "text",
     "text": "Each representation trades off differently: wireframe is fast but not solid, B-Rep is realistic and GPU-friendly but harder to edit as combinations of shapes, and CSG is easy to edit as an equation of shapes but must be converted to a mesh before a GPU can draw it."
    },
    {
     "type": "tip",
     "text": "Exam shortcut: wireframe = edges only, B-Rep = surface (mesh) of triangles/polygons, CSG = boolean combination of primitive solids. If a question mentions 'union, intersection, difference', the answer is CSG."
    }
   ],
   "recap": "3D objects are represented as wireframes (edges only), boundary representations / meshes (surfaces of polygons, GPU-friendly), or CSG (boolean combinations of simple solids, common in CAD)."
  },
  "quiz": [
   {
    "q": "Which representation builds solids using union, intersection, and difference of simple shapes?",
    "options": [
     "Constructive Solid Geometry (CSG)",
     "Boundary Representation",
     "Wireframe",
     "Z-buffer"
    ],
    "answer": 0,
    "explain": "CSG combines primitives like cubes and spheres with boolean operations to build complex solids."
   },
   {
    "q": "Why do modern GPUs prefer boundary representation (mesh of triangles)?",
    "options": [
     "Triangles use less memory than a single point",
     "Triangles do not need coordinates",
     "Triangles cannot overlap",
     "Triangles are easy to rasterize very quickly in hardware"
    ],
    "answer": 3,
    "explain": "GPU hardware is optimized to rasterize triangles, making mesh-based B-Rep models fast to render."
   },
   {
    "q": "What is the main limitation of a wireframe model?",
    "options": [
     "It cannot be rotated",
     "It shows only edges, not solid, filled surfaces",
     "It requires 4x4 matrices",
     "It cannot be stored digitally"
    ],
    "answer": 1,
    "explain": "A wireframe stores only vertices and edges, so it looks like a see-through skeleton with no solid surface."
   }
  ]
 },
 "computer-graphics-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A 3D model is just geometry until light hits it. An illumination model is a formula that decides the colour of a point on a surface based on the light falling on it. The classic and still widely taught model splits light into three parts: ambient, diffuse, and specular."
    },
    {
     "type": "text",
     "text": "Ambient light is a flat, constant amount of light everywhere, standing in for all the light bouncing around a scene indirectly (like a room lit through a window, where even shadowed corners are not pitch black). It has no direction and needs no calculation about surface angle."
    },
    {
     "type": "text",
     "text": "Diffuse light depends on the angle between the surface and the light source: a surface facing the light directly is brighter than one facing away, following Lambert's cosine law. This is what gives a sphere its soft, rounded shading from bright to dark."
    },
    {
     "type": "text",
     "text": "Specular light is the shiny highlight you see on polished or wet surfaces, caused by light reflecting almost straight into the viewer's eye. It depends on the angle between the reflected light ray and the viewer, and a 'shininess' exponent controls how tight and bright the highlight is."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def phong_intensity(ambient, diffuse_k, n_dot_l, specular_k, r_dot_v, shininess):\n    ambient_term = ambient\n    diffuse_term = diffuse_k * max(n_dot_l, 0)\n    specular_term = specular_k * max(r_dot_v, 0) ** shininess\n    return ambient_term + diffuse_term + specular_term"
    },
    {
     "type": "tip",
     "text": "Memory aid: Ambient = everywhere, flat. Diffuse = depends on surface angle to light (matte look). Specular = depends on angle to viewer (shiny highlight). Together they make the Phong illumination model."
    }
   ],
   "recap": "Illumination models compute surface colour from light: ambient (flat background light), diffuse (angle to the light source, gives matte shading), and specular (angle to the viewer, gives shiny highlights)."
  },
  "quiz": [
   {
    "q": "Which type of light component gives a surface its shiny, glossy highlight?",
    "options": [
     "Specular",
     "Refractive",
     "Diffuse",
     "Ambient"
    ],
    "answer": 0,
    "explain": "Specular reflection depends on the viewer's angle relative to the reflected ray, producing tight bright highlights."
   },
   {
    "q": "Diffuse reflection intensity mainly depends on what?",
    "options": [
     "The angle between the surface normal and the light direction",
     "The resolution of the screen",
     "The number of polygons in the scene",
     "The colour of the viewer's eyes"
    ],
    "answer": 0,
    "explain": "Diffuse shading follows Lambert's cosine law: surfaces facing the light directly are brighter."
   },
   {
    "q": "What does ambient light represent in a scene?",
    "options": [
     "A constant background light with no direction, standing in for indirect bounced light",
     "The camera's field of view",
     "The exact colour of one pixel",
     "A single shiny highlight"
    ],
    "answer": 0,
    "explain": "Ambient light is a flat approximation of all the indirect light bouncing around a scene."
   }
  ]
 },
 "computer-graphics-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Illumination gives us a formula for the colour of one point; shading decides how we spread that colour across a whole triangle mesh made of many flat faces. The three classic strategies are flat shading, Gouraud shading, and Phong shading, from cheapest to most realistic."
    },
    {
     "type": "text",
     "text": "Flat shading computes one lighting value per triangle (using its single face normal) and paints the whole triangle that one colour. It is fast but the model looks faceted, with visible hard edges between triangles, like a gemstone rather than a smooth ball."
    },
    {
     "type": "text",
     "text": "Gouraud shading computes lighting at each vertex, then smoothly interpolates (blends) the colour across the triangle's interior. This hides most of the facets and is what many real-time games used for years, though sharp highlights can still look slightly wrong if they fall between vertices."
    },
    {
     "type": "text",
     "text": "Phong shading (not to be confused with the Phong illumination model from the last lesson) interpolates the surface normal itself across the triangle, then computes full lighting at every pixel. It is the most realistic and correctly captures sharp specular highlights, at the cost of more computation per pixel."
    },
    {
     "type": "tip",
     "text": "Order of quality and cost: Flat < Gouraud < Phong shading. Flat = one colour per face. Gouraud = interpolate colour. Phong = interpolate the normal and light per pixel. Exams love this exact ranking."
    }
   ],
   "recap": "Flat shading colours a whole triangle at once, Gouraud shading interpolates vertex colours across the face, and Phong shading interpolates normals and lights every pixel for the most realistic result."
  },
  "quiz": [
   {
    "q": "Which shading method computes lighting once per triangle, giving a faceted look?",
    "options": [
     "Gouraud shading",
     "Ray tracing",
     "Phong shading",
     "Flat shading"
    ],
    "answer": 3,
    "explain": "Flat shading uses one normal per face, so each triangle is a single flat colour with visible edges between faces."
   },
   {
    "q": "What does Gouraud shading interpolate across a triangle?",
    "options": [
     "The texture file size",
     "The camera position",
     "The z-buffer values only",
     "Vertex colours (lighting computed at vertices, then blended)"
    ],
    "answer": 3,
    "explain": "Gouraud shading lights the vertices and smoothly blends those colours across the triangle's surface."
   },
   {
    "q": "Why is Phong shading more accurate at showing specular highlights than Gouraud shading?",
    "options": [
     "It interpolates the surface normal and lights every pixel individually",
     "It ignores the light source",
     "It only shades the edges of triangles",
     "It uses more control points"
    ],
    "answer": 0,
    "explain": "Phong shading recomputes lighting per pixel using an interpolated normal, catching highlights that fall between vertices."
   }
  ]
 },
 "computer-graphics-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A plain grey triangle mesh looks nothing like a brick wall or a wooden table. Texture mapping wraps a 2D image (the texture) onto a 3D surface, giving cheap, rich detail without adding more geometry. A brick wall can be a single flat rectangle with a brick photo stretched over it."
    },
    {
     "type": "text",
     "text": "Every vertex of the mesh is given texture coordinates, usually called (u, v), which say where on the 2D texture image that vertex should sample its colour from. As the triangle is rasterized, u and v are interpolated across the surface just like colour was in Gouraud shading, so every pixel knows which point of the image to read."
    },
    {
     "type": "text",
     "text": "Because a texture can be viewed close-up or far away, and at any angle, filtering matters. Nearest-neighbour sampling is fast but blocky; bilinear filtering blends the nearest 4 texture pixels (texels) for a smoother look. Mipmapping pre-shrinks the texture into smaller versions so distant surfaces sample a smaller, less noisy image instead of a distant, aliased full-size one."
    },
    {
     "type": "text",
     "text": "Texture mapping is not only for colour. A normal map stores fake surface bumps (as encoded directions) so flat geometry can look dented and grooved under lighting without adding a single extra polygon — this is how modern games make a flat wall look like it has real cracks and bricks in 3D."
    },
    {
     "type": "tip",
     "text": "Texture coordinates (u, v) always range from 0 to 1 regardless of the image's actual pixel size, so the same UV mapping works no matter what resolution texture image you swap in."
    }
   ],
   "recap": "Texture mapping wraps a 2D image onto 3D geometry using per-vertex (u, v) coordinates; filtering and mipmapping keep it looking smooth at any distance, and normal maps fake extra surface detail cheaply."
  },
  "quiz": [
   {
    "q": "What do (u, v) texture coordinates on a vertex describe?",
    "options": [
     "Where on the 2D texture image that vertex samples its colour",
     "The camera's rotation angle",
     "The vertex's colour in RGB",
     "The vertex's 3D world position"
    ],
    "answer": 0,
    "explain": "UV coordinates map each vertex to a location on the flat 2D texture image, in the 0-to-1 range."
   },
   {
    "q": "What problem does mipmapping solve?",
    "options": [
     "It compresses audio files",
     "It changes the illumination model",
     "It adds more vertices to a mesh",
     "It reduces noise and aliasing when a texture is viewed from far away"
    ],
    "answer": 3,
    "explain": "Mipmapping pre-shrinks textures so distant surfaces sample a small, smooth version instead of a noisy full-size image."
   },
   {
    "q": "A normal map lets a flat surface appear bumpy mainly by doing what?",
    "options": [
     "Changing the texture's file format",
     "Adding thousands of extra polygons",
     "Faking altered surface directions used in lighting calculations, without extra geometry",
     "Removing the diffuse light term"
    ],
    "answer": 2,
    "explain": "Normal maps store fake surface normals so lighting reacts as if the surface had bumps, at no geometric cost."
   }
  ]
 },
 "computer-graphics-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You already met one visible-surface method, the z-buffer, which compares depth per pixel. But z-buffering checks every pixel of every triangle, even ones fully hidden — so real systems add cheaper checks earlier to throw away work before it ever reaches the z-buffer."
    },
    {
     "type": "text",
     "text": "Back-face culling is the simplest: for a closed solid, any triangle whose front side faces away from the camera can never be seen, so it is discarded immediately using just the sign of a dot product between the triangle's normal and the view direction. This alone can remove roughly half of all triangles in a typical scene before any pixel work starts."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def is_back_facing(normal, view_dir):\n    # dot product of face normal and direction to camera\n    dot = normal[0]*view_dir[0] + normal[1]*view_dir[1] + normal[2]*view_dir[2]\n    return dot < 0   # facing away from the camera -> cull it"
    },
    {
     "type": "text",
     "text": "The Painter's algorithm is an older, object-level approach: sort all polygons back-to-front by depth and draw them in that order, so nearer objects simply overwrite farther ones, the way a painter adds background before foreground. It fails on overlapping or intersecting triangles that have no single 'furthest' order, which is exactly the case the z-buffer handles correctly."
    },
    {
     "type": "tip",
     "text": "Exam comparison: back-face culling removes whole triangles cheaply before rasterization; the z-buffer resolves overlap correctly per pixel but costs more; the painter's algorithm is simple but breaks on cyclic or intersecting overlaps."
    }
   ],
   "recap": "Visible surface detection combines cheap early rejection (back-face culling), simple depth sorting (painter's algorithm, which can fail on cycles), and the robust per-pixel z-buffer to decide what is actually seen."
  },
  "quiz": [
   {
    "q": "What does back-face culling remove, and how?",
    "options": [
     "Transparent objects, using alpha blending",
     "Textures that are too small",
     "Distant objects, using fog",
     "Triangles facing away from the camera, using the sign of a dot product"
    ],
    "answer": 3,
    "explain": "Back-face culling checks whether a triangle's normal points away from the viewer and discards it if so."
   },
   {
    "q": "In which situation does the painter's algorithm give a wrong result?",
    "options": [
     "When ambient light is used",
     "When there is only one object in the scene",
     "When objects are the same colour",
     "When two polygons intersect or overlap in a cycle with no single furthest order"
    ],
    "answer": 3,
    "explain": "Painter's algorithm sorts by depth globally, which breaks down when polygons intersect or cyclically overlap."
   },
   {
    "q": "Why is back-face culling usually done before the z-buffer test?",
    "options": [
     "It is a cheap way to discard invisible triangles early, saving pixel-level work",
     "It must run after the z-buffer, never before",
     "It only works in 2D graphics",
     "It replaces the need for a z-buffer entirely"
    ],
    "answer": 0,
    "explain": "Culling removes whole triangles using one dot product each, before the more expensive per-pixel depth test runs."
   }
  ]
 },
 "computer-graphics-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A colour model is a way of describing colour with numbers so a computer (or a printer) can store and reproduce it. Different devices need different models because screens make colour by emitting light, while printers make colour by absorbing light from paper."
    },
    {
     "type": "text",
     "text": "RGB (Red, Green, Blue) is additive: it starts from black and adds light. Mixing full red, green and blue gives white, which matches how monitor pixels work — each pixel is really three tiny lights. A colour like (255, 0, 0) is pure red, and (255, 255, 255) is white."
    },
    {
     "type": "text",
     "text": "CMYK (Cyan, Magenta, Yellow, Key/black) is subtractive: it starts from white paper and subtracts light by adding ink, so more ink means darker, not brighter. Printers use CMYK because mixing RGB inks would never produce a true black; the extra K (black) channel fixes that and saves ink."
    },
    {
     "type": "text",
     "text": "HSV (Hue, Saturation, Value) describes colour the way a human intuitively picks one: Hue is the base colour (its position on a colour wheel, in degrees), Saturation is how pure or washed-out it is, and Value is how bright or dark it is. This is why colour pickers in design software show a wheel and two sliders instead of three separate RGB numbers."
    },
    {
     "type": "tip",
     "text": "Quick check: screens = RGB (additive, light), printers = CMYK (subtractive, ink), colour pickers/artists = HSV (intuitive hue/saturation/brightness). If a question mentions a printer, the answer is almost always CMYK."
    }
   ],
   "recap": "RGB is additive light mixing used by screens, CMYK is subtractive ink mixing used by printers, and HSV describes colour the intuitive way — hue, saturation, and brightness."
  },
  "quiz": [
   {
    "q": "Why do printers use CMYK instead of RGB?",
    "options": [
     "CMYK uses less memory",
     "CMYK has fewer colours",
     "Printers subtract light using ink on white paper, unlike screens which add light",
     "RGB cannot be printed at all"
    ],
    "answer": 2,
    "explain": "Printing is a subtractive process (ink absorbs light from white paper), which RGB's additive light-mixing model does not represent."
   },
   {
    "q": "In the HSV model, which component controls how pure versus washed-out a colour looks?",
    "options": [
     "Value",
     "Key",
     "Hue",
     "Saturation"
    ],
    "answer": 3,
    "explain": "Saturation controls colour purity; low saturation looks grey/washed-out, high saturation looks vivid."
   },
   {
    "q": "What colour does mixing full-intensity red, green, and blue produce in the RGB model?",
    "options": [
     "White",
     "Black",
     "Cyan",
     "Grey only"
    ],
    "answer": 0,
    "explain": "RGB is additive, so combining all three primary lights at full intensity produces white."
   }
  ]
 },
 "computer-graphics-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Some shapes in nature — coastlines, ferns, mountains, clouds — are far too detailed to draw vertex by vertex. Fractals solve this by generating complex, natural-looking shapes from a small rule applied over and over, rather than storing every detail by hand."
    },
    {
     "type": "text",
     "text": "The key property of a fractal is self-similarity: zoom into a small part and it looks similar to the whole. The classic Mandelbrot set is generated by repeatedly applying a simple formula to each point and checking whether it escapes to infinity or stays bounded; the boundary between the two is an infinitely detailed fractal edge."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def mandelbrot_iterations(cx, cy, max_iter=50):\n    x, y = 0.0, 0.0\n    for i in range(max_iter):\n        x, y = x*x - y*y + cx, 2*x*y + cy\n        if x*x + y*y > 4:\n            return i          # escaped -> outside the set\n    return max_iter            # stayed bounded -> inside the set"
    },
    {
     "type": "text",
     "text": "This idea of 'a rule applied repeatedly, instead of hand-placed detail' is called procedural generation more broadly, and it extends beyond fractals: terrain in open-world games, textures like marble or wood, and even whole cities in some games are generated by algorithms and random seeds rather than being modelled by hand. This saves enormous amounts of storage and artist time."
    },
    {
     "type": "tip",
     "text": "Two exam-favourite fractal names: the Mandelbrot set (2D, from a complex-number iteration) and the Koch snowflake (built by repeatedly replacing each straight edge with a zig-zag). Both show self-similarity at every zoom level."
    }
   ],
   "recap": "Fractals generate infinitely detailed, natural-looking shapes from a small repeated rule instead of hand-placed geometry, and the same idea powers procedural generation of terrain and textures in games."
  },
  "quiz": [
   {
    "q": "What does 'self-similarity' mean for a fractal shape?",
    "options": [
     "It must be a perfect circle",
     "It only exists in black and white",
     "It cannot be drawn by a computer",
     "Zooming into a small part reveals a shape similar to the whole"
    ],
    "answer": 3,
    "explain": "Self-similarity means the fractal looks structurally similar at every zoom level, small or large."
   },
   {
    "q": "How is the Mandelbrot set generated?",
    "options": [
     "By storing every pixel by hand",
     "By rotating a 3D mesh",
     "By repeatedly applying a formula to each point and checking if it escapes to infinity",
     "By tracing a photograph"
    ],
    "answer": 2,
    "explain": "Each point is iterated through a formula; whether it stays bounded or escapes determines if it belongs to the set."
   },
   {
    "q": "Why do open-world games use procedural generation for terrain?",
    "options": [
     "It only works for 2D games",
     "It generates large, detailed content from algorithms and seeds, saving storage and effort",
     "It requires every hill to be modelled by an artist",
     "It removes the need for a GPU"
    ],
    "answer": 1,
    "explain": "Procedural generation creates vast detailed worlds from compact rules and random seeds instead of manually authored geometry."
   }
  ]
 },
 "computer-graphics-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Animation is just a sequence of still images (frames) shown fast enough that our eyes perceive motion, typically 24 to 60 frames per second. The core challenge is not drawing one frame, it is describing how a scene changes smoothly from frame to frame without an artist drawing every single one by hand."
    },
    {
     "type": "text",
     "text": "Keyframing solves this: an animator sets the important poses (keyframes) — say, a ball at the top of a bounce and at the bottom — and the computer automatically generates the in-between frames, called tweening or interpolation. Linear interpolation moves at constant speed; easing curves slow in and out for a more natural feel, since real objects rarely move at perfectly constant speed."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def lerp(a, b, t):\n    # t goes from 0 (start) to 1 (end)\n    return a + (b - a) * t\n\n# ball height at 25%, 50%, 75% between keyframes at y=0 and y=10\nfor t in [0.25, 0.5, 0.75]:\n    print(lerp(0, 10, t))"
    },
    {
     "type": "text",
     "text": "For characters, skeletal animation attaches the 3D mesh to an invisible bone hierarchy (a skeleton); animating the bones' rotations moves the skin (mesh) that is bound to them, which is far cheaper than reshaping every vertex by hand and lets one skeleton be reused across many character animations."
    },
    {
     "type": "text",
     "text": "Morphing (or blend shapes) instead stores a few complete alternate shapes of the same mesh — for example a neutral face and a smiling face — and blends between their vertex positions to animate expressions. It works well for faces but does not scale to full-body motion the way skeletal animation does."
    },
    {
     "type": "tip",
     "text": "Keyframe = animator-set important pose. Tweening/interpolation = computer-generated in-between frames. Skeletal animation = bones drive mesh. Morphing = blending between whole alternate shapes. Keep these four terms distinct."
    }
   ],
   "recap": "Animation shows fast sequences of frames; keyframing plus interpolation fills the gaps between animator-set poses, while skeletal animation and morphing are the two main ways to animate a 3D character mesh."
  },
  "quiz": [
   {
    "q": "What is 'tweening' in animation?",
    "options": [
     "Manually drawing every single frame",
     "Rendering only the first and last frame",
     "Automatically computing the in-between frames between two keyframes",
     "Compressing an animation file"
    ],
    "answer": 2,
    "explain": "Tweening (interpolation) generates the frames between animator-set keyframes automatically."
   },
   {
    "q": "In skeletal animation, what actually moves when a bone rotates?",
    "options": [
     "Nothing changes visually",
     "The texture coordinates are deleted",
     "Only the camera moves",
     "The mesh (skin) bound to that bone moves with it"
    ],
    "answer": 3,
    "explain": "Skeletal animation binds mesh vertices to bones, so rotating a bone moves the attached skin realistically."
   },
   {
    "q": "Morphing between two facial expressions works by doing what?",
    "options": [
     "Culling back-facing triangles",
     "Blending between stored complete alternate vertex positions",
     "Rotating a skeleton of bones",
     "Changing the illumination model"
    ],
    "answer": 1,
    "explain": "Morphing (blend shapes) interpolates directly between whole alternate mesh shapes, such as neutral and smiling faces."
   }
  ]
 },
 "computer-graphics-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "So far every pixel has been fully opaque. But glass, smoke, fire, UI overlays and fades all need partial transparency. Alpha blending adds a fourth channel, alpha (a), to RGB, giving RGBA: alpha near 0 means almost fully see-through, alpha near 1 means almost fully opaque."
    },
    {
     "type": "text",
     "text": "To draw a transparent object over a background, we blend the two colours using alpha as a weight: the final colour is alpha times the foreground colour plus (1 minus alpha) times the background colour that is already there. This is the standard 'over' compositing operation used in graphics and photo-editing software."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def alpha_blend(fg_rgb, bg_rgb, alpha):\n    return tuple(alpha * f + (1 - alpha) * b for f, b in zip(fg_rgb, bg_rgb))\n\n# 50% transparent red over a white background\nprint(alpha_blend((255, 0, 0), (255, 255, 255), 0.5))"
    },
    {
     "type": "text",
     "text": "Order matters a lot with transparency: unlike opaque z-buffered pixels, transparent surfaces must usually be drawn back-to-front (farthest first) so each new blend correctly sits on top of what is already there. Drawing transparent objects in the wrong order is one of the most common rendering bugs in real engines."
    },
    {
     "type": "tip",
     "text": "Opaque geometry: any draw order works because the z-buffer sorts it out per pixel. Transparent geometry: you must sort and draw back-to-front yourself, because blending is not order-independent."
    }
   ],
   "recap": "Alpha blending adds a transparency channel and mixes foreground and background colour by weight; because blending is order-dependent, transparent objects must be drawn back-to-front, unlike opaque z-buffered ones."
  },
  "quiz": [
   {
    "q": "What does the alpha channel in RGBA represent?",
    "options": [
     "How transparent or opaque a pixel is",
     "The screen's refresh rate",
     "The hue of the colour",
     "Extra brightness"
    ],
    "answer": 0,
    "explain": "Alpha is a weight from 0 (fully transparent) to 1 (fully opaque) used when blending colours."
   },
   {
    "q": "Why must transparent objects typically be drawn back-to-front?",
    "options": [
     "Because alpha blending is order-dependent, unlike the z-buffer",
     "Because the GPU cannot draw them otherwise",
     "Because it saves texture memory",
     "Because front-to-back is always used instead"
    ],
    "answer": 0,
    "explain": "Blending combines colours based on what is already drawn, so the draw order changes the final result."
   },
   {
    "q": "Blending a 50% alpha red foreground over a white background gives roughly what result?",
    "options": [
     "Fully transparent, invisible",
     "Pure red",
     "A pink colour, halfway between red and white",
     "Pure white"
    ],
    "answer": 2,
    "explain": "With alpha 0.5, the result is an equal mix of red and white, producing pink."
   }
  ]
 },
 "computer-graphics-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Everything so far has been rasterization: take triangles, project them onto the screen, and colour the pixels they cover. Ray tracing flips this around by simulating light more directly: for every pixel, shoot an imaginary ray from the camera through that pixel and see what it hits in the scene."
    },
    {
     "type": "text",
     "text": "Once a ray hits a surface, the algorithm can spawn new rays: a shadow ray toward each light (if it is blocked, the point is in shadow), a reflection ray for mirror-like surfaces, and a refraction ray for glass or water. These secondary rays can bounce again, so ray tracing naturally captures reflections, refractions, and soft shadows that plain rasterization must fake with tricks."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def trace_ray(origin, direction, scene, depth=0, max_depth=4):\n    if depth > max_depth:\n        return (0, 0, 0)\n    hit = scene.find_closest_hit(origin, direction)\n    if hit is None:\n        return (0, 0, 0)                      # ray hits nothing -> background\n    colour = hit.local_shading()               # ambient + diffuse + specular here\n    if hit.material.is_reflective:\n        reflect_dir = hit.reflect(direction)\n        colour += hit.material.reflectivity * trace_ray(hit.point, reflect_dir, scene, depth + 1)\n    return colour"
    },
    {
     "type": "text",
     "text": "The trade-off is speed: ray tracing must test many rays against many objects and can recurse several bounces deep, making it far more expensive than rasterization. For decades it was used mainly for offline rendering (movies, pre-rendered images) where minutes per frame are acceptable; modern GPUs now have dedicated ray-tracing hardware that makes limited real-time ray tracing possible in games."
    },
    {
     "type": "tip",
     "text": "One-line contrast for exams: rasterization asks 'which pixels does this triangle cover?' (fast, approximate lighting); ray tracing asks 'what does this pixel actually see?' (slow, physically accurate lighting, reflections and shadows)."
    }
   ],
   "recap": "Ray tracing shoots a ray per pixel into the scene and follows reflected, refracted, and shadow rays to compute physically accurate lighting, at far greater cost than rasterization."
  },
  "quiz": [
   {
    "q": "What is the fundamental difference between ray tracing and rasterization?",
    "options": [
     "Ray tracing traces rays from the camera into the scene per pixel; rasterization projects triangles onto pixels",
     "Rasterization always produces better shadows",
     "Ray tracing only works in 2D",
     "There is no real difference"
    ],
    "answer": 0,
    "explain": "Ray tracing simulates light paths per pixel, while rasterization projects geometry onto the screen and fills covered pixels."
   },
   {
    "q": "What is a shadow ray used for?",
    "options": [
     "Culling back-facing triangles",
     "Storing vertex colours",
     "Increasing texture resolution",
     "Checking whether a point is blocked from a light source"
    ],
    "answer": 3,
    "explain": "A shadow ray is cast toward each light; if something blocks it, the surface point is in shadow."
   },
   {
    "q": "Why was ray tracing traditionally used mainly for offline (pre-rendered) work rather than real-time games?",
    "options": [
     "It cannot handle 3D scenes",
     "It is computationally expensive, often taking much longer per frame than rasterization",
     "It cannot produce reflections",
     "It only supports flat shading"
    ],
    "answer": 1,
    "explain": "Tracing many rays with recursive bounces is far costlier than rasterization, historically making it too slow for real time."
   }
  ]
 },
 "computer-graphics-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Everything from earlier lessons — transforms, projection, clipping, shading, texturing, z-buffering — actually happens as fixed stages of one assembly line called the graphics (rendering) pipeline. Understanding it as a pipeline, not separate tricks, is exactly what interviewers probe for."
    },
    {
     "type": "text",
     "text": "The pipeline roughly runs: vertex data is sent in, the vertex stage transforms each vertex from model space to screen space (using the matrices from earlier lessons), primitives (triangles) are assembled and clipped, rasterization figures out which pixels each triangle covers, the fragment (pixel) stage computes the colour of each covered pixel (lighting, texturing), and finally depth testing and blending write the result into the framebuffer."
    },
    {
     "type": "text",
     "text": "This is done on a GPU (Graphics Processing Unit), a chip built very differently from a CPU. A CPU has a few powerful cores good at varied, sequential tasks; a GPU has thousands of small, simple cores that all run the same instructions on different data at once (SIMD-style parallelism) — perfect for computing the same lighting formula independently for millions of pixels simultaneously."
    },
    {
     "type": "text",
     "text": "This is why a modern GPU can render tens of millions of pixels, each recomputed from scratch, 60 or more times per second: the pipeline stages are embarrassingly parallel, and dedicated hardware plus massive core counts push that raw math through in real time."
    },
    {
     "type": "tip",
     "text": "Interview-ready one-liner: 'A GPU trades a few powerful cores for thousands of simple ones, because rendering is the same small calculation (lighting, texturing) repeated independently across millions of pixels — the definition of a parallel-friendly problem.'"
    }
   ],
   "recap": "The rendering pipeline chains vertex transformation, clipping, rasterization, per-pixel shading, and depth/blend into one assembly line, run in massive parallel on a GPU built from thousands of simple cores."
  },
  "quiz": [
   {
    "q": "In the rendering pipeline, what happens right after rasterization determines which pixels a triangle covers?",
    "options": [
     "Vertex transformation begins",
     "The fragment (pixel) stage computes each covered pixel's colour",
     "Clipping removes off-screen vertices",
     "The mesh is converted to a wireframe"
    ],
    "answer": 1,
    "explain": "After rasterization identifies covered pixels, the fragment stage shades and textures each of them."
   },
   {
    "q": "Why is a GPU built with thousands of simple cores instead of a few powerful ones like a CPU?",
    "options": [
     "GPUs cannot do floating-point math",
     "Simple cores are cheaper to cool only",
     "It reduces the need for a framebuffer",
     "Rendering repeats the same small calculation independently across millions of pixels, which parallelizes extremely well"
    ],
    "answer": 3,
    "explain": "Per-pixel and per-vertex work is largely independent, so many simple cores running in parallel outperform a few complex ones for this workload."
   },
   {
    "q": "Which pipeline stage uses the matrices from the transformations lessons to move vertices into screen space?",
    "options": [
     "The vertex stage",
     "The framebuffer write stage",
     "The fragment stage",
     "The blending stage"
    ],
    "answer": 0,
    "explain": "The vertex stage applies model, view, and projection matrices to move each vertex toward its screen position."
   }
  ]
 },
 "computer-graphics-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Early GPUs had a fixed pipeline: lighting and shading followed one built-in formula you could only tweak with a few settings. Modern GPUs instead run shaders — small programs you write yourself that execute at specific pipeline stages, giving full control over how vertices move and how pixels are coloured."
    },
    {
     "type": "text",
     "text": "A vertex shader runs once per vertex. It typically applies the model, view and projection matrices to compute the vertex's screen position, and can also pass along data like normals and texture coordinates to later stages. A fragment shader (also called a pixel shader) runs once per covered pixel, and typically computes the final colour using lighting, textures, or any custom effect the programmer wants."
    },
    {
     "type": "code",
     "lang": "glsl",
     "code": "// Simplified GLSL-style fragment shader\nuniform vec3 lightDir;\nvarying vec3 normal;\nvarying vec2 uv;\nuniform sampler2D tex;\n\nvoid main() {\n    float diffuse = max(dot(normalize(normal), lightDir), 0.0);\n    vec3 texColor = texture2D(tex, uv).rgb;\n    gl_FragColor = vec4(texColor * diffuse, 1.0);\n}"
    },
    {
     "type": "text",
     "text": "Because shaders are just short programs running per-vertex or per-pixel on thousands of GPU cores at once, they can implement almost any visual effect: toon shading, water ripples, blur, colour grading, even the lighting and shading models from earlier lessons (Phong, texture mapping) are commonly written as shaders rather than fixed hardware features today."
    },
    {
     "type": "tip",
     "text": "Remember the split: vertex shader = runs per vertex, decides where things are (position). Fragment/pixel shader = runs per pixel, decides what colour things are. Nearly every modern visual effect is one or the other, or both."
    }
   ],
   "recap": "Shaders are small programs run on the GPU: vertex shaders position each vertex, fragment (pixel) shaders colour each pixel, and together they let programmers implement almost any visual effect instead of relying on a fixed pipeline."
  },
  "quiz": [
   {
    "q": "What does a vertex shader typically compute?",
    "options": [
     "The compression ratio of a texture",
     "The screen position of a vertex, using model, view and projection matrices",
     "The frame rate of the game",
     "The final colour of a pixel"
    ],
    "answer": 1,
    "explain": "Vertex shaders run once per vertex and are responsible for transforming it into its screen-space position."
   },
   {
    "q": "How many times does a fragment (pixel) shader typically run for a rendered triangle?",
    "options": [
     "Exactly once for the whole triangle",
     "Once for each pixel the triangle covers on screen",
     "Never, it is optional",
     "Once for each vertex only"
    ],
    "answer": 1,
    "explain": "The fragment shader executes once per covered pixel, computing that pixel's final colour."
   },
   {
    "q": "Why did GPUs move from a fixed pipeline to programmable shaders?",
    "options": [
     "To make vertex data storage smaller",
     "To remove the need for a framebuffer",
     "To let programmers write custom code for lighting, texturing and effects instead of a few built-in options",
     "To eliminate the vertex stage entirely"
    ],
    "answer": 2,
    "explain": "Shaders replace hard-coded formulas with programmable stages, enabling far more visual effects and flexibility."
   }
  ]
 },
 "computer-graphics-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Every technique in this subject sits somewhere on one trade-off: speed versus accuracy. Real-time rendering (games, VR, simulators) must produce a new frame in milliseconds — typically 16.7 ms for 60 frames per second — so it leans on rasterization, shaders, and approximations like Gouraud shading or baked lighting that look convincing without being physically exact."
    },
    {
     "type": "text",
     "text": "Offline rendering (movie visual effects, architectural walkthroughs, product renders) can spend minutes or hours per frame, so it leans on ray tracing and even more accurate methods like path tracing, which averages many random light rays per pixel to capture soft shadows, colour bleeding, and realistic reflections that would be too expensive to compute at 60 frames per second."
    },
    {
     "type": "text",
     "text": "This gap is shrinking: modern GPUs include dedicated ray-tracing hardware (RT cores) and AI-based denoising and upscaling (like DLSS), so games now mix rasterization for most of the frame with a limited amount of real ray tracing for reflections or shadows, denoised and upscaled to hit real-time speed. This hybrid approach is the current state of the art and the natural endpoint of everything covered in this subject."
    },
    {
     "type": "text",
     "text": "Looking back across this whole subject: pixels and coordinate systems gave us a canvas, primitives and transformations let us place shapes, 3D added depth and hidden-surface removal, illumination and shading made it look lit, texturing and colour models made it look real, and animation, ray tracing and shaders brought it all to life and to today's hardware."
    },
    {
     "type": "tip",
     "text": "A common interview question is exactly this trade-off: 'Why don't games just always use ray tracing?' The answer is time budget — real-time needs a full frame in milliseconds, so it approximates; offline rendering can afford to compute light almost exactly."
    }
   ],
   "recap": "Real-time rendering trades accuracy for speed (rasterization, shaders, approximated lighting), offline rendering trades speed for accuracy (ray/path tracing), and modern GPUs increasingly blend both approaches together."
  },
  "quiz": [
   {
    "q": "Why does real-time rendering typically rely on rasterization and approximate lighting rather than full ray tracing?",
    "options": [
     "Ray tracing cannot run on any GPU",
     "A frame must be produced in milliseconds, so speed is prioritized over physical accuracy",
     "Real-time rendering does not use a framebuffer",
     "Rasterization always looks more realistic"
    ],
    "answer": 1,
    "explain": "Real-time applications must hit tight frame-time budgets (like 16.7 ms for 60 FPS), favouring fast approximations."
   },
   {
    "q": "What does path tracing average per pixel to achieve realistic soft shadows and colour bleeding?",
    "options": [
     "Multiple random light rays",
     "Multiple texture resolutions",
     "Multiple vertex shaders",
     "Multiple frame rates"
    ],
    "answer": 0,
    "explain": "Path tracing samples many random light paths per pixel and averages them for physically accurate results."
   },
   {
    "q": "What is the 'hybrid' approach used by modern real-time game engines?",
    "options": [
     "Avoiding the GPU entirely",
     "Combining rasterization for most of the frame with limited real ray tracing, denoised and upscaled",
     "Using only ray tracing for every pixel",
     "Rendering every frame offline first"
    ],
    "answer": 1,
    "explain": "Modern engines mix fast rasterization with dedicated ray-tracing hardware for select effects, using denoising and upscaling to stay real-time."
   },
   {
    "q": "Which pair correctly matches use case to rendering style?",
    "options": [
     "Games -> real-time rendering (speed priority), movie VFX -> offline rendering (accuracy priority)",
     "Both always use identical techniques",
     "Neither uses rasterization or ray tracing",
     "Movie VFX -> real-time rendering, games -> offline rendering"
    ],
    "answer": 0,
    "explain": "Games need speed and use real-time techniques; movies can spend far more time per frame and use offline, more accurate techniques."
   }
  ]
 }
}

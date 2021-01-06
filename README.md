## createCanvasElement example
```
const canvas = createCanvas(400, 400);
const context = canvas.getContext('2d');

document.body.appendChild(canvas);

context.fillStyle = 'green';
context.fillRect(0, 0, canvas.width, canvas.height);

// expect canvas.width, canvas.height : [400, 400]

function createCanvas(width = 300, height = 150) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}
```

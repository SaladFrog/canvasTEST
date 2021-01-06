/*
* Dont forget to set 'document.body.appendChild(canvas);'
* after loading the canvas
*/
function createCanvas(width = 300, height = 150) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }

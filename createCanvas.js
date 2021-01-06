function createCanvas(test, settings = {}) {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  [canvas.width, canvas.height] = settings.dimensions;
  
  const dimensions = settings.dimensions;
  
  const result = test(context, dimensions);
  if (!result)
    throw new TypeError("drawing function must return a valid object");
    
  let drawing;
  drawing = result;
  setup();
  
  function setup() {
    draw();
  }
  
  function draw(dt = 0) {
    drawing({ context, dimensions });
  }
}

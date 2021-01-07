function createCanvas(test, settings = {}) {
  const canvas = createCanvasElement(400, 400);
  const context = canvas.getContext("2d");
  document.body.appendChild(canvas);
  
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
  
  function clear() {
    if (!settings.clear) {
      console.log("do not clear canvas");
    } else {
      console.log("clear canvas");
      context.clearRect(0, 0, width, height);
    }
  }
  function resize() {
    console.log("TODO: resize module");
  }
}

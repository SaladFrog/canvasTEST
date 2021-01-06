/*
 *
 */

const settings = {
  lorem: true,
  dimensions: [500, 500]
};

const test = () => {
  return ({ context, dimensions }) => {
    context.fillStyle = "green";
    context.fillRect(20, 10, 150, 100);
  };
};

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

  function draw() {
    drawing({ context, dimensions });
  }
}

createCanvas(test, settings);

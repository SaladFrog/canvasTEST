/*
 * could be turned to animation
 */
const settings = {
  lorem: true,
  dimensions: [500, 500]
};

const test = () => {
  return ({ context, dimensions }) => {
    for (let i = 0; i < 10; i++) {
      const x = i * 50;
      draw(context, x);
    }
  };

  function draw(context, x) {
    context.fillStyle = "green";
    context.fillRect(x, 20, 10, 10);
  }
};

createCanvas(test, settings);

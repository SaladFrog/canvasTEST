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

createCanvas(test, settings);

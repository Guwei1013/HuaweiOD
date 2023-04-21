/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const option = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const queue = [[sr, sc]];
  const row = image.length - 1;
  const col = image[0].length - 1;
  const visited = new Set([`${sc},${sr}`]);
  const someColor = image[sr][sc];

  while (queue.length) {
    const [y, x] = queue.shift();
    image[y][x] = newColor;
    for (let i = 0; i < option.length; i++) {
      const [dy, dx] = option[i];
      const newX = dx + x;
      const newY = dy + y;
      if (
        newY >= 0 &&
        newY <= row &&
        newX >= 0 &&
        newX <= col &&
        image[newY][newX] === someColor &&
        !visited.has(`${newX},${newY}`)
      ) {
        queue.push([newY, newX]);
        visited.add(`${newX},${newY}`);
      }
    }
  }

  return image;
};

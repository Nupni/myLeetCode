/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
  let Awin = 0, Bwin = 0;

  const checkColor = (i, text) => {
    const c1 = colors[i];
    const c2 = colors[i + 1];
    const c3 = colors[i + 2];

    return c1 === text && c2 === text && c3 === text
  }
 
  for (let i = 0; i < colors.length - 2; i++) {
    if (checkColor(i, "A")) Awin++
    else if (checkColor(i, "B")) Bwin++
  }

  if (Awin > Bwin) return true;
  return false;
};
function getRandomColor() {
  const colorWhile = Math.floor(Math.random() * 360);
  return {
    bg: `hsl(${colorWhile} 100% 75%)`,
    fg: `hsl(${colorWhile} 100% 5%)`,
  };
}

export default getRandomColor;

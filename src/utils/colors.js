function getRgbValues(color) {
  let hexColor;

  if (color.slice(0, 1) === '#') {
    hexColor = color.slice(1);
  }

  let r;
  let g;
  let b;

  if (hexColor.length < 6) {
    r = parseInt(hexColor.charAt(0) + hexColor.charAt(0), 16);
    g = parseInt(hexColor.charAt(1) + hexColor.charAt(1), 16);
    b = parseInt(hexColor.charAt(2) + hexColor.charAt(2), 16);
  } else {
    r = parseInt(hexColor.substr(0, 2), 16);
    g = parseInt(hexColor.substr(2, 2), 16);
    b = parseInt(hexColor.substr(4, 2), 16);
  }
  return { r, g, b };
}

function getContrastColor(color) {
  const hexColor = getRgbValues(color);
  const ratio = (hexColor.r * 299 + hexColor.g * 587 + hexColor.b * 114) / 1000;
  return ratio >= 128 ? '#000' : '#fff';
}

// eslint-disable-next-line import/prefer-default-export
export { getContrastColor };

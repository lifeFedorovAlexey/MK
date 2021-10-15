createElement = (tag, { classList, src, text, style }) => {
  let element = document.createElement(tag);
  if (classList) {
    element.classList.add(classList.join(" "));
  }

  if (text) {
    element.innerHTML = text;
  }

  if (src) {
    element.src = src;
    element.onerror = () => {
      element.src = DEFAULT_IMAGE_URL;
    };
  }

  if (style) {
    if (style.width) {
      element.style.width = style.width + "%";
    }
  }

  return element;
};

getRandomIntInclusive = (min, max) =>{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

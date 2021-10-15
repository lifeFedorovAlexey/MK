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

getRandomInRange = (min, max) =>{
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}

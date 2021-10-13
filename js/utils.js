createElement = (tag, { classList, src, text }) => {
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

  return element;
};

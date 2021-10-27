export const createElement = (tag, { classList, src, text, style }) => {
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

export const getRandomInRange = (min, max) =>{
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}

export const getCurrentDate = function(){
  return new Date().toLocaleTimeString('ru-Ru', { hour12: false, 
    hour: "numeric", 
    minute: "numeric",
    day:"numeric",
    month:"numeric"
  });
}

export const getWinnerText = function(player){
  return player ? player.nameCharacter + " wins" : "draw"
}

export const isEndType = function(player){
  return player ? "end" : "draw"
}

export const isBot = function(player){
  return player && player.id === "player2"
}

export const query = (selector)=>{
  return document.querySelector(selector);
}
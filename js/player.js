class Player {
  constructor(id, name) {
    this.id = `player${++id}`;
    this.nameCharacter = name;
    this.hp = 100;
    this.img =
      IMAGE_URL +
      this.nameCharacter.replaceAll(/[^a-zA-Z]+/g, "").toLowerCase() +
      ".gif";
    this.weapon = ["leftLeg", "rightHand"];
    this.element = null;
    this.progressbar = null;
    this.life = null;
    this.name = null;
    this.character = null;
    this.image = null;
    this.isDead = false;
  }
  init = () => {
    this.element = createElement("div", { classList: [this.id] });
    this.progressbar = createElement("div", {
      classList: ["progressbar"],
    });

    this.life = createElement("div", {
      classList: ["life"],
      style: { width: this.hp },
    });

    this.name = createElement("div", {
      classList: ["name"],
      text: this.nameCharacter,
    });

    this.character = createElement("div", { classList: ["character"] });
    this.image = createElement("img", { src: this.img });
  };
  render = () => {
    this.progressbar.appendChild(this.life);
    this.progressbar.appendChild(this.name);
    this.character.appendChild(this.image);
    this.element.appendChild(this.progressbar);
    this.element.appendChild(this.character);
  };
  attack = () => {
    console.log(this.name, "Fight...");
  };
  getDamage(num){
    const currentHp = this.hp - num;

    if(currentHp > 0){
      this.hp = currentHp
    }else{
      this.hp = 0
      this.isDead = true
    }
    
    this.life.style.width = this.hp+"%";
  }
}

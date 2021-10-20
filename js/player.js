class Player {
  constructor(id, name) {
    this.id = `player${++id}`;
    this.nameCharacter = name;
    this.hp = 100;
    this.states =
      PLAYERS_SPRITES.find((item) => item.player === name).states ||
      PLAYERS_SPRITES.find((item) => item.player === "NOOBSAIBOT").states;
    this.img = this.states.stance;
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
    const damage = getRandomInRange(1, 10);
    console.log(`Игрок: ${this.nameCharacter} наносит урон ${damage}`);
    return damage;
  };

  getDamage(num) {
    this.changeHP(num);

    if (!this.hp) {
      this.dead();
    }

    this.renderHP();
  }

  changeHP(num) {
    this.hp = this.hp - num > 0 ? this.hp - num : 0;
  }

  renderHP() {
    this.life.style.width = this.hp + "%";
  }

  dead() {
    this.isDead = true;
    this.image.src = this.states.dizzy;
  }
}

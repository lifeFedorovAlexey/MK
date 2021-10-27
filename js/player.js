import { PLAYERS_SPRITES } from "./dictionary.js"
import { createElement , getRandomInRange } from "./utils.js";
const HIT = {
  head: 30,
  body: 25,
  foot: 20,
}

export class Player {
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
    const damage = {};

    let checkedItems = document.querySelectorAll(".control input[type=radio]:checked");
    
    for (let item of checkedItems) {
      damage[item.name] = item.value
      item.checked = false;
    }

    damage.value = HIT[damage.hit || "head"];
    return damage
  };

  enemyAttack = () =>{
    let hit = Object.keys(HIT)[getRandomInRange(0,2)]
    let defence = Object.keys(HIT)[getRandomInRange(0,2)]
    return {hit,defence,value:HIT[hit]}
  };

  chat = (name,damage) =>{
    console.log(`Игрок: ${name} наносит урон ${damage}`)
  };

  getDamage = (num) =>{
    this.changeHP(num);
    this.renderHP();
  };

  changeHP = (num) =>{
    this.hp = this.hp - num > 0 ? this.hp - num : 0;
    this.hp ? false : this.dead();
  };

  renderHP = () =>{
    this.life.style.width = this.hp+"%";
  }

  dead = () =>{
    this.isDead = true;
    this.image.src = this.states.dizzy;
  }
}

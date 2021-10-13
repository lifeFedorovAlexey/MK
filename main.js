const IMAGE_URL = "http://reactmarathon-api.herokuapp.com/assets/";

document.addEventListener("DOMContentLoaded", () => {
  initGame();
});

initGame = () => {
  let game = {};
  game.arena = new Arena("arena");
  game.arena.addPlayers([
    { name: "SUB-ZERO", hp: 50 },
    { name: "SONYA", hp: 80 },
  ]);
};

class Arena {
  constructor(id) {
    this.id = id;
    this.container = this.getContainer();
    this.players = [];
    this.playersList = [];
  }
  getContainer = () => {
    return document.getElementById(this.id);
  };

  addPlayers = (players) => {
    this.players = [...players];
    this.players.map(({ name, hp }, id) => {
      this.createPlayer(id, name, hp);
    });
  };

  createPlayer = (id, name, hp) => {
    const player = new Player(id, name, hp);

    let playerElement = createElement("div", [player.id]);

    let progressbarElement = createElement("div", ["progressbar"]);

    let lifeElement = createElement("div", ["life"]);

    let nameElement = createElement("div", ["name"]);
    nameElement.innerHTML = player.name;

    let characterElement = createElement("div", ["character"]);

    let imageElement = createElement("img");
    imageElement.src = player.img;

    progressbarElement.appendChild(lifeElement);
    progressbarElement.appendChild(nameElement);
    characterElement.appendChild(imageElement);
    playerElement.appendChild(progressbarElement);
    playerElement.appendChild(characterElement);

    this.container.appendChild(playerElement);
    this.playersList.push(playerElement);
  };
}

class Player {
  constructor(id, name, hp) {
    this.id = `player${++id}`;
    this.name = name;
    this.hp = hp;
    this.img = this.getImgFileName(name);
    this.weapon = ["leftLeg", "rightHand"];
  }

  attack = () => {
    console.log(this.name, "Fight...");
  };

  getImgFileName = () => {
    return (
      IMAGE_URL + this.name.replaceAll(/[^a-zA-Z]+/g, "").toLowerCase() + ".gif"
    );
  };
}

createElement = (tag, classList) => {
  let element = document.createElement(tag);
  if (classList) {
    element.classList.add(classList.join(" ,"));
  }

  return element;
};

const IMAGE_URL = "http://reactmarathon-api.herokuapp.com/assets/";
const DEFAULT_IMAGE_URL = IMAGE_URL + "subzero.gif";

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
    let playerComponent = document.createElement("div");
    playerComponent.classList.add(`player${player.id}`);
    playerComponent.innerHTML = `
          <div class="progressbar">
              <div class="life"></div>
              <div class="name">${player.name}</div>
          </div>
          <div class="character">
              <img src="${player.img}" onerror="onPlayerImageError(this)"/>
          </div>`;
    this.container.appendChild(playerComponent);
  };
}

class Player {
  constructor(id, name, hp) {
    this.id = ++id;
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

onPlayerImageError = (element) => {
  element.src = DEFAULT_IMAGE_URL;
};

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

    let playerElement = createElement("div", { classList: [player.id] });
    let progressbarElement = createElement("div", {
      classList: ["progressbar"],
    });
    let lifeElement = createElement("div", { classList: ["life"] });
    let nameElement = createElement("div", {
      classList: ["name"],
      text: player.name,
    });
    let characterElement = createElement("div", { classList: ["character"] });
    let imageElement = createElement("img", { src: player.img });

    progressbarElement.appendChild(lifeElement);
    progressbarElement.appendChild(nameElement);
    characterElement.appendChild(imageElement);
    playerElement.appendChild(progressbarElement);
    playerElement.appendChild(characterElement);

    this.container.appendChild(playerElement);
    this.playersList.push(playerElement);
  };
}

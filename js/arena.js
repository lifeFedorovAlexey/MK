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
      this.createPlayer(new Player(id, name, hp));
    });
  };

  createPlayer = (player) => {
    player.init();
    player.render();
    this.container.appendChild(player.element);
    this.playersList.push(player.element);
  };
}

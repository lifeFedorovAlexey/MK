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
     this.players = [...players].map(({ name }, id) => {
      const player = new Player(id, name)
      this.createPlayer(player)
      return player
    });
  };

  createPlayer = (player) => {
    player.init();
    player.render();
    this.container.appendChild(player.element);
    this.playersList.push(player.element);
  };
}

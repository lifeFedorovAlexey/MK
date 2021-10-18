class Arena {
  constructor(id) {
    this.id = id;
    this.container = document.getElementById(id);
    this.controls = document.getElementById("controls");
    this.players = [];
    this.playersList = [];
  }

  addPlayers = (players) => {
     this.players = [...players].map(({ name }, id) => {
      const player = new Player(id, name);
      this.createPlayer(player);
      return player
    });
  };

  createPlayer = (player) => {
    player.init();
    player.render();
    this.container.appendChild(player.element);
    this.playersList.push(player.element);
  };

  addWinnerMessage(message){
    this.container.appendChild(createElement("div", {
      classList: ["winTitle"],
      text: message,
    }))
  };

  createReloadButton(){
    this.reloadButtonContainer =  createElement("div", {
      classList: ["reloadWrap"],
      text: this.nameCharacter,
    });

    this.reloadButton =  createElement("button", {
      classList: ["button"],
      text: "Restart",
    });

    this.reloadButton.addEventListener('click', function() { window.location.reload() }, false);

    this.reloadButtonContainer.appendChild(this.reloadButton)

    this.controls.appendChild(this.reloadButtonContainer)

  }


}

function reload(){
    window.location.reload()
}

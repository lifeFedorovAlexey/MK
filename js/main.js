const game = {};

document.addEventListener("DOMContentLoaded", () => {
  initGame();
});

initGame = () => {
  game.arena = new Arena("arena");
  game.randomButton = document.getElementById("randomButton")
  game.arena.addPlayers([
    { name: "SUB-ZERO" },
    { name: "SONYA"},
  ]);
};


function fight(){

  game.arena.players[0].getDamage(game.arena.players[1].attack())
  game.arena.players[1].getDamage(game.arena.players[0].attack())

  let winner = checkWinner()

  if(winner){
    game.arena.addWinnerMessage(`${winner.nameCharacter} wins`)
    game.randomButton.disabled = true;
  }

}

function checkWinner(){
  let players = game.arena.players.filter(player =>{return !player.isDead})
  return players.length === 1 ? players[0] : false 
}

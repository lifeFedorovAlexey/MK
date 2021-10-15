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
  const isFirst = getRandomIntInclusive(0, 1);
  const isSecond = isFirst ? 0 : 1

  game.arena.players[isSecond].getDamage(game.arena.players[isFirst].attack())

  if(!haveWinner()){
    game.arena.players[isFirst].getDamage(game.arena.players[isSecond].attack())
  }

  haveWinner()
}

function haveWinner(){
  let players = game.arena.players.filter(player =>{
    return !player.isDead
  })

  if(players.length === 1){
    game.arena.addWinnerMessage(`${players[0].nameCharacter} wins`)
    game.randomButton.disabled = true;
    return true
  }

  return false 
}

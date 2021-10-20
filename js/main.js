const game = {
  arena:null,
  randomButton:null
};

document.addEventListener("DOMContentLoaded", () => {
  initGame();
});

initGame = () => {
  game.arena = new Arena("arena");
  game.randomButton = document.getElementById("randomButton")
  game.arena.addPlayers([
    { name: "SUB-ZERO" },
    { name: "KANO"},
  ]);
};

function fight(){
  const isFirst = getRandomInRange(0, 1);
  const isSecond = isFirst ? 0 : 1;

  attack(isFirst ,isSecond);

  !haveWinner() 
    ? attack(isSecond, isFirst)
    : false;

  haveWinner()
}

function attack(first,second){
  game.arena.players[second].getDamage(game.arena.players[first].attack())
}

function haveWinner(){
  let players = game.arena.players.filter(player =>{
    return !player.isDead
  })

  if(players.length === 1){
    game.arena.addWinnerMessage(`${players[0].nameCharacter} wins`)
    game.randomButton.disabled = true;
    game.arena.createReloadButton();
    return true
  }

  return false 
}

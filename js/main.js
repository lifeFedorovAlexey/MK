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
  let playerID = getRandomIntInclusive(0,1);
  let damage = getRandomIntInclusive(1,10)

  console.log(`Игрок: ${game.arena.players[playerID].nameCharacter} наносит урон ${damage}`)
  
  game.arena.players[playerID].getDamage(damage)
  let winner = checkWinner()
  if(winner){
    console.log(`Победитель: ${winner.nameCharacter}`)
    game.randomButton.disabled = true;
  }
}

function checkWinner(){
  let players = game.arena.players.filter(player =>{return !player.isDead})
  return players.length === 1 ? players[0] : false 
}

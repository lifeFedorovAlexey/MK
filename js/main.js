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
  const damageFirstPlayer = getRandomIntInclusive(1,10)
  const damageSecondPlayer = getRandomIntInclusive(1,10)

  console.log(`Игрок: ${game.arena.players[0].nameCharacter} наносит урон ${damageFirstPlayer}`)
  console.log(`Игрок: ${game.arena.players[1].nameCharacter} наносит урон ${damageSecondPlayer}`)

  game.arena.players[0].getDamage(damageFirstPlayer)
  game.arena.players[1].getDamage(damageSecondPlayer)

  let winner = checkWinner()

  if(winner){
    game.arena.addWinnerMessage(`${winner.nameCharacter} win`)
    game.randomButton.disabled = true;
  }

}

function checkWinner(){
  let players = game.arena.players.filter(player =>{return !player.isDead})
  return players.length === 1 ? players[0] : false 
}

const game = {
  arena:null,
  randomButton:null
};

document.addEventListener("DOMContentLoaded", () => {
  initGame();
});

initGame = () => {
  game.arena = new Arena("arena");
  game.arena.addPlayers([
    { name: "SUB-ZERO" },
    { name: "KANO"},
  ]);
  game.arena.fightButton.addEventListener("click",fight);
  
};

function fight(event){
  event.preventDefault();
  let player = game.arena.players[0]; 
  let bot = game.arena.players[1]; 
  let playerStep = player.attack();
  let botStep = bot.enemyAttack();

  player.getDamage(calculateDamage(playerStep,botStep));
  bot.getDamage(calculateDamage(botStep,playerStep));

  checkWinner();

}

function calculateDamage(first,second){
  return first.defence === second.hit 
    ? 0 
    : second.value;
};

function checkWinner(){
  let players = game.arena.players.filter(player =>{
    return !player.isDead
  })

  if(players.length === 1){
    gameOver(players[0])
  }else if(!players.length){
    gameOver();
  }
}

function gameOver(player){
  let message = !player.nameCharacter ? "draw" : player.nameCharacter + " wins"
  game.arena.addWinnerMessage(message)
  game.arena.fightButton.disabled = true;
  game.arena.createReloadButton();
};

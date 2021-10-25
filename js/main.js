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
  game.arena.addLog("start");
  game.arena.fightButton.addEventListener("click",fight);
  
};

function fight(event){
  event.preventDefault();
  let player = game.arena.players[0]; 
  let bot = game.arena.players[1];

  let playerStep = player.attack();
  let botStep = bot.enemyAttack();

  let playerDamage = calculateDamage(botStep,playerStep);
  game.arena.addLog(playerDamage ? "hit":"defence", playerDamage);

  let botDamage = calculateDamage(playerStep,botStep)
  game.arena.addLog(botDamage ? "hit":"defence", botDamage , true);

  player.getDamage(botDamage);
  bot.getDamage(playerDamage);

  checkWinner();
}

function calculateDamage(first,second){
  return first.defence === second.hit 
    ? 0 
    : second.value;
};

function checkWinner(){
  let players = game.arena.players.filter(player => {
    return !player.isDead
  })
 
  if(players.length ===2){
    return;
  }

  gameOver(players.length ===1 ? players[0] : false);

}

function gameOver(player){
  game.arena.addWinnerMessage(getWinnerText(player));
  game.arena.addLog(isEndType(player),false, isBot(player));
  game.arena.fightButton.disabled = true;
  game.arena.createReloadButton();
};

function getWinnerText(player){
  return player ? player.nameCharacter + " wins" : "draw"
}

function isEndType(player){
  return player ? "end" : "draw"
}

function isBot(player){
  return player && player.id === "player2"
}

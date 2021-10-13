document.addEventListener("DOMContentLoaded", () => {
  initGame();
});

initGame = () => {
  let game = {};
  game.arena = new Arena("arena");
  game.arena.addPlayers([
    { name: "SUB-ZERO", hp: 50 },
    { name: "SONYA", hp: 80 },
  ]);
};

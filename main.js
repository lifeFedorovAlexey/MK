class Player {
  constructor(id, name, img, hp) {
    this.id = id;
    this.name = name;
    this.hp = hp;
    this.img = img;
    this.weapon = ["leftLeg", "rightHand"];
  }

  attack = () => {
    console.log(this.name, "Fight...");
  };
}

createPlayer = (id, name, img, hp) => {
  const player = new Player(id, name, img, hp);
  const arena = document.getElementById("arena");
  let playerComponent = document.createElement("div");
  playerComponent.classList.add(`player${player.id}`);
  playerComponent.innerHTML = `
      <div class="progressbar">
          <div class="life"></div>
          <div class="name">${player.name}</div>
      </div>
      <div class="character">
          <img src="${player.img}" />
      </div>`;
  arena.appendChild(playerComponent);
};

document.addEventListener("DOMContentLoaded", () => {
  createPlayer(
    1,
    "subZero",
    "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    50
  );

  createPlayer(
    2,
    "sonya",
    "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
    80
  );
});

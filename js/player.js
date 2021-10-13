class Player {
  constructor(id, name, hp) {
    this.id = `player${++id}`;
    this.name = name;
    this.hp = hp;
    this.img =
      IMAGE_URL +
      this.name.replaceAll(/[^a-zA-Z]+/g, "").toLowerCase() +
      ".gif";
    this.weapon = ["leftLeg", "rightHand"];
  }

  attack = () => {
    console.log(this.name, "Fight...");
  };
}

import { Player } from "./player.js";
import { LOGS } from "./dictionary.js"
import {getRandomInRange , getCurrentDate , createElement , query} from './utils.js'

export class Arena {
  constructor(id) {
    this.id = id;
    this.container = document.getElementById(id);
    this.controls = query(".control");
    this.chat = query(".chat");
    this.fightButton = query(".buttonWrap .button");
    this.players = [];
    this.playersList = [];
  }

  addPlayers = (players) => {
     this.players = [...players].map(({ name }, id) => {
      const player = new Player(id, name);
      this.renderPlayer(player);
      return player
    });
  };

  renderPlayer = (player) => {
    player.init();
    player.render();
    this.container.appendChild(player.element);
    this.playersList.push(player.element);
  };

  addWinnerMessage = (message) =>{
    this.container.appendChild(createElement("div", {
      classList: ["winTitle"],
      text: message,
    }))
  };

  addLog = (type,damage,isBot) =>{
    const log = LOGS[type][getRandomInRange(0,LOGS[type].length-1)];
    const first = this.players[isBot ? 1 : 0 ];
    const second = this.players[isBot ? 0 : 1 ];
    this.logRender(log,first,second,damage);
  };

  logRender = (log, {nameCharacter:firstName}, {nameCharacter:secondName}, damage) => {
    const logElement = `<p>${replacer(log, firstName, secondName, damage)}</p>`
    this.chat.insertAdjacentHTML('afterbegin',logElement);
  };

  createReloadButton = () =>{
    this.reloadButtonContainer = createElement("div", {
      classList: ["reloadWrap"],
      text: this.nameCharacter,
    });

    this.reloadButton = createElement("button", {
      classList: ["button"],
      text: "Restart",
    });

    this.reloadButton.addEventListener('click', reload, false);
    this.reloadButtonContainer.appendChild(this.reloadButton);
    this.container.prepend(this.reloadButtonContainer);

  }
}

function reload(){
    window.location.reload()
}

function replacer(str,first,second,damage){
  let currentStr = damage ? "(Урон: " + damage +") " + str : str;
  return currentStr
    .replace("[time]",getCurrentDate())
    .replace("[first]",first)
    .replace("[second]",second);
}

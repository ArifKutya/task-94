import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;

  }

  addBananas() {
    let food = this.banana;
    let monkey = this.emojis.map(function (element){
      return element + food;

    })
    const para = document.createElement("p");
    para.innerHTML = monkey;
    document.getElementById("emojis").appendChild(para);
  }
}

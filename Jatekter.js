import Elem from "./Elem.js";
class Jatekter {
  #lepes;
  constructor() {
    this.#lepes = 0
    const szuloElem = $("article");
    for (let index = 0; index < 9; index++) {
      const elem = new Elem(index, szuloElem);
    }
    $(window).on("elemKivalasztas", (event) => {
      console.log(event.detail);
      if (this.#lepes % 2 == 0) {
        event.detail.setElem("X");
      } else {
        event.detail.setElem("O");
      }
      this.#lepes++;
    });
  }
}

export default Jatekter;

class Elem{
    #allapot;
    constructor(index, szuloElem) {
        this.#allapot = true;
        this.index=index
        szuloElem.append(`<div class="elem"><p>&nbsp</p></div>`);
        this.divElem = $("article div:last-child");

        this.pElem = this.divElem.children("p");

        this.divElem.on("click", () =>{
            if(this.#allapot) {
                this.esemenyTrigger();
            }
            this.#allapot = false
            /* this.setElem("X"); */
            /* this.esemenyTrigger(); */
        });
    }
    setElem(ertek) {
        this.pElem.html(ertek);
    }

    esemenyTrigger(){
        const esemeny = new CustomEvent("elemKivalasztas", {detail: this});
          window.dispatchEvent(esemeny);
    }

}

export default Elem;
import Lampa from "./Lampa.js";
class JatekTer {
  #db;
  #allapotLista = [];
  #meret;
  #lepes;
  constructor() {
    const szuloElem = $("article");
    this.#meret = 9;
    for (let index = 0; index < this.#meret; index++) {

      const elem = new Lampa(index,this.allapot,szuloElem);
    }
    console.log()
    $(window).on("kapcsolas", (event) => {
      if ((elem == true)) {
        event.detail.setElem(false);
      } else {
        event.detail.setElem(true);
      }
    });
  }
  szomszedokKeresese(id){

  }
init(){

}
  ellenozes(){

  }
}
export default JatekTer;

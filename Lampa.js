class Lampa {
  #allapot;
  #id;
  #divElem;

  constructor(id, allapot, szuloElem) {
    this.#allapot = allapot;
    this.#id = id;
    szuloElem.append(`<div class ="elem">
    <span class="fel"></span>
        </div>
        `);
    this.elem = $("article div:last-child");
    this.sELEM = this.elem.children("span");
    this.#allapot = true;
    this.elem.on("click", () => {
      if (this.#allapot == true) {
        this.esemenyTrigger();
      }
      this.#allapot = false;
    });
  }
  setElem(ertek) {
    this.sELEM.html(ertek);
  }
  setAllapot(){

    this.szinBeallit()
  }
  szinBeallit(){
 if(this.#allapot == true){

 }
 else{
    
 }
  }
  esemenyTrigger() {
    const esemeny = new CustomEvent("kapcsolas", { detail: this });
    window.dispatchEvent(esemeny);
  }
}
export default Lampa;

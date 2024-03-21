
let estado_golpe ="apagado";

/**Sonidos*/
let sonido_xmen = document.querySelector("#xmen_encendido");
let sonido_boton = docment.querySelector("#xmen_click");

/* divs */
let xmen = document.querySelector(".xmen");
let boton = docment.querySelector(".xmen_boton");

/*boton.addEventListener(click, ()=>{
    controlarGolpe()
})*/
xmen_boton.addEventListener("click",controlar_golpe)

function controlar_golpe() {
    if(estado_golpe == "apagado") {
    estado_golpe = "encendido";
    sonido_golpe()
   xmen.classList.add("xmen_activo")
 }else{
    estado_golpe ="apagado";
    sonido_golpe()
    xmen.classList.remove("xmen_activo");
    }
}

function sonido_golpe() {
    if(sonido_xmen.paused) {
        sonido_boton.play();
        sonido_xmen.play();
    }else{
        sonido_boton.play();
        sonido_xmen.pause();
        sonido_xmen.currentTime=0;
    }
}

function presionarTecla(tecla, pantalla,setPantalla) {
    if (tecla.toUpperCase() === "C") {
        setPantalla("");
    }else if(tecla === "Enter"){
        setPantalla(eval(pantalla))
    }else{
        setPantalla(pantalla + tecla);
    }
}


export  {presionarTecla}
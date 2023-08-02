function presionarTecla(tecla, pantalla,setPantalla) {
    if (tecla.toUpperCase() === "C") {
        setPantalla("");
    }else if(tecla === "Enter"){
        setPantalla(eval(pantalla));
    }else if(isNaN(tecla) && (tecla !== "+" && tecla !== '-' && tecla !== '*' && tecla !== '/')){
        setPantalla(pantalla);
    }else{
        setPantalla(pantalla + tecla);
    }
}


export  {presionarTecla}
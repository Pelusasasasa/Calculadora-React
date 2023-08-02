import Boton from "./Boton"
import '../css/Teclado.css'

function Teclado({onChange}) {
  return (
    <div className="teclado">
        <Boton text={"CE"} cambiarPantalla={() => onChange("CE")}/>
        <Boton text={"/"} cambiarPantalla={() => onChange("/")}/>
        <Boton text={"*"} cambiarPantalla={() => onChange("*")}/>
        <Boton text={"-"} cambiarPantalla={() => onChange("-")}/>
        <Boton text={"7"} cambiarPantalla={() => onChange("7")}/>
        <Boton text={"8"} cambiarPantalla={() => onChange("8")}/>
        <Boton text={"9"} cambiarPantalla={() => onChange("9")}/>
        <Boton text={"+"} clase={"sumar"} cambiarPantalla={() => onChange("+")}/>
        <Boton text={"="} clase={"igual"} cambiarPantalla={() => onChange("=")}/>
        <Boton text={"4"} cambiarPantalla={() => onChange("4")}/>
        <Boton text={"5"} cambiarPantalla={() => onChange("5")}/>
        <Boton text={"6"} cambiarPantalla={() => onChange("6")}/>
        <Boton text={"3"} cambiarPantalla={() => onChange("3")}/>
        <Boton text={"2"} cambiarPantalla={() => onChange("2")}/>
        <Boton text={"1"} cambiarPantalla={() => onChange("1")}/>
        <Boton text={"0"} clase={"cero"} cambiarPantalla={() => onChange("0")}/>
        <Boton text={"."} cambiarPantalla={() => onChange(".")}/>
    </div>
  )
}

export {Teclado}
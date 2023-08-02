
import { useEffect, useState } from 'react'
import {Pantalla} from './components/Pantalla'
import {Teclado} from './components/Teclado';
import './General.css';
import { presionarTecla } from './js/funciones';

function App() {
  const [pantalla,setPantalla] = useState("");
  const [historial,setHistorial] = useState("");//Hace que quede un historial del resultado
  const [resultado,setResultado] = useState(false);//Hace que se reinicie la pantalla despues de hacer el igual
    
  function cambiarPantalla(text){
    if (text === "CE") {
      setPantalla("")
    }else if(text === "="){
      setPantalla(eval(pantalla));
      setHistorial(eval(pantalla));
      setResultado(true);
    }else{
      if (resultado) {
        setPantalla(text);
        setResultado(false);
      }else{
        setPantalla(pantalla + text);
      }
    }
    
  };



return (
    <main>
      <Pantalla pantalla={pantalla} setPantalla={setPantalla} setResultado={setResultado} historial={historial} />
      <Teclado onChange={cambiarPantalla} />
    </main>
  )
}

export default App

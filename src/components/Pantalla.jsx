import '../css/Pantalla.css'

function Pantalla({pantalla,historial,setPantalla,setResultado}) {
  function clickHistorial() {
    setResultado(false);
    setPantalla(historial);
  }
  return (
    <>
      <div className="historial">
        <p onClick={() => clickHistorial()}>{historial ? historial : "Historial"}</p>
      </div>
      <div className='pantalla'>
          <input type="text" value={pantalla} placeholder="1 + 2" />
      </div>
    </>
  )
}

export {Pantalla}
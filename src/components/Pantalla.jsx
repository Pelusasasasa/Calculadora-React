import '../css/Pantalla.css'

function Pantalla({pantalla,historial}) {
  return (
    <>
      <div className="historial">
        <input type="text" value={historial} placeholder='Historial' name="" id="" />
      </div>
      <div className='pantalla'>
          <input type="text" value={pantalla} placeholder="1 + 2" />
      </div>
    </>
  )
}

export default Pantalla
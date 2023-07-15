import '../css/Button.css'
function Boton(props) {
    const {cambiarPantalla, text, clase}  = props;
  return (
    <button onClick={cambiarPantalla} className={clase}>
      <span>{text}</span>
    </button>
  )
}

export default Boton
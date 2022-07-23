export default function Button({
  types = 'button',
  text,
  cor = 'primaria',
  concluido = false,
  verifyClick
}) {

  return(
    <button
        type={types}
        className={`btn ${cor}`}
        concluido={disable}
        onClick={verifyClick}  
    >
      {text}
    </button>
  )
}
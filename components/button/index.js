export default function Button({
  types = 'button',
  text,
  cor = 'primaria',
  disable = false,
  verifyClick
}) {
  
  return(
    <button
        type={types}
        className={`btn ${cor}`}
        disabled={disable}
        onClick={verifyClick}
    >
      {text}
    </button>
  )
}
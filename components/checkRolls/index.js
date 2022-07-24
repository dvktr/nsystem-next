export default function CheckRolls({
  salarioRef = "30",
  salarioVenc = "565,20",
  faltaRef = "9",
  faltaDesc= "-20,73",
  inssRef = "8",
  inssDesc = "-175,56",
  vtRef = "6",
  vtDesc = "-24,58",
  vaRef = "6",
  vaDesc = "-15,00",
  dterceiroRef = "",
  dterceiroVenc = "55,00",
  salariol = "413,02"
}) {
  return (
    <>
      <nav>
        <ul className="navInfosTopo">
          <li>Descrição</li>
          <li>Referência</li>
          <li>Vencimentos</li>
          <li>Descontos</li>
        </ul>

        <ul className="navInfosCC">
          <li className="salario">Salário </li>
            <div className="salarioRef padraoH4"><h4>{salarioRef}</h4></div> <div className="salarioVenc padraoH4"><h4>{salarioVenc}</h4></div>
          <li className="faltas">Faltas</li>
            <div className="faltaRef padraoH4"><h4>{faltaRef}</h4></div> <div className="faltaDesc padraoH4"><h4>{faltaDesc}</h4></div>
          <li className="inss">INSS</li>
            <div className="inssRef padraoH4"><h4>{inssRef}</h4></div> <div className="inssDesc padraoH4"><h4>{inssDesc}</h4></div>
          <li className="vt">Vale Trans.</li>
            <div className="vtRef padraoH4"><h4>{vtRef}</h4></div> <div className="vtDesc padraoH4"><h4>{vtDesc}</h4></div>
          <li className="va">Vale Ali.</li>
            <div className="vaRef padraoH4"><h4>{vaRef}</h4></div> <div className="vaDesc padraoH4"><h4>{vaDesc}</h4></div>
          <li className="dterceiro">D. Terceiro</li>
            <div className="dterceiroRef padraoH4"><h4>{dterceiroRef}</h4></div> <div className="dterceiroVenc padraoH4"><h4>{dterceiroVenc}</h4></div>
          <li className="salariol">S. Líquido</li>
            <div className="salariolValue padraoH4"><h5>{salariol}</h5></div>
        </ul>
      </nav>
    </>
  );
}

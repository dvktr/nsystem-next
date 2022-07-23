import Button from '../button/index'

export default function CheckRollsMobile({
  salarioRef = "30",
  salarioVenc = "585,20",
  faltaRef = "9",
  faltaDesc= "20,73",
  inssRef = "8",
  inssDesc = "175,56",
  vtRef = "6",
  vtDesc = "24,58",
  vaRef = "6",
  vaDesc = "15,00",
  dterceiroRef = "",
  dterceiroVenc = "55,00",
  salariol = "413,02"
}) {
  return (
    <>
      <nav>
        <ul className="navInfosCC">
          <div className="msalario padraoMobile"><h4>Salário</h4></div>
          <div className="msalarioValue padraoMobile"><h5>{salarioVenc}</h5></div>
        </ul>

        <ul className="navInfosCC">
          <div className="mfalta padraoMobile"><h4>Falta</h4></div>
          <div className="mfaltaValue padraoMobile"><h5>-{faltaDesc}</h5></div>
        </ul>

        <ul className="navInfosCC">
          <div className="minss padraoMobile"><h4>INSS</h4></div>
          <div className="minssValue padraoMobile"><h5>-{inssDesc}</h5></div>
        </ul>

        <ul className="navInfosCC">
          <div className="mvt padraoMobile"><h4>Vale Trans.</h4></div>
          <div className="mvtValue padraoMobile"><h5>-{vtDesc}</h5></div>
        </ul>

        <ul className="navInfosCC">
          <div className="mva padraoMobile"><h4>Vale Ali.</h4></div>
          <div className="mvaValue padraoMobile"><h5>-{vaDesc}</h5></div>
        </ul>

        <ul className="navInfosCC">
          <div className="mdterceiro padraoMobile"><h4>Dec. Terceiro</h4></div>
          <div className="mdterceiroValue padraoMobile"><h5>{dterceiroVenc}</h5></div>
        </ul>

        <ul className="navInfosCC">
          <div className="msalariol padraoMobile"><h4>Salário Líquido</h4></div>
          <div className="msalariolValue padraoMobile"><h5>{salariol}</h5></div>
          
        </ul>
        
      </nav>
    </>
  );
}

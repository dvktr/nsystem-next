import Image from "next/image";
import logo from "../../public/images/logo.svg";
export default function Nav({
  navEmail = "tested"
}) {
  return(
    <>
    <div className="imagemMobile">
      <Image src={logo} alt="Logotipo" className="logoMobile" />
    </div>

    
    <nav>
      <ul>
        <li className="logo">
          <Image src={logo} alt="Logotipo" />
        </li>
        <li>
          <a href="#cracha">Cracha Digital</a>
        </li>

        <li>
          <a href="#product">Contra Cheque</a>
        </li>

        <li>
          <a href="#product">Service Desk</a>
        </li>

        <li>
          <a href="/update">Atualizar Dados</a>
        </li>


        <li>
          <h3>{navEmail}</h3>
        </li>
      </ul>
    </nav>
    </>
  )
}
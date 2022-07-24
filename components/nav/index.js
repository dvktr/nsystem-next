import Image from "next/image";
import Button from "../button"
import Router from 'next/router'

import logo from "../../public/images/logo.svg";
export default function Nav({ navEmail = "tested" }) {
  const deslogar = async (chave) => {
    try {
      if (typeof window !== "undefined") {
        sessionStorage.removeItem("email");
        Router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="imagemMobile">
        <Image src={logo} alt="Logotipo" className="logoMobile" />
      </div>

      <nav className="navTopo">
        <ul className="ulTopo">
          <li className="logo">
            <Image src={logo} alt="Logotipo" />
          </li>
          <li>
            <a href="#cracha">Cracha Digital</a>
          </li>

          <li>
            <a href="#contracheque">Contra Cheque</a>
          </li>

          <li>
            <a href="#services">Service Desk</a>
          </li>

          <li>
            <a href="/update">Atualizar Dados</a>
          </li>

          <li>
            <h3>{navEmail}</h3>
            <Button
              text="Sair"
              type="submit"
              verifyClick={() => {deslogar('email')}}
            />
          </li>
        </ul>
      </nav>
    </>
  );
}

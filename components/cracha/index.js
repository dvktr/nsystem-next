import crachaFrente from '../../public/images/cracha-frente.png'
import crachaCostas from '../../public/images/cracha-costas.png'
import avatarDefault from '../../public/images/avatar.svg'
import Image from "next/image";

export default function Cracha({
  nome= "default",
  cargo= "default",
  local = "rua xxxx, xxxxxx",
  email = "default@gmail.com",
  numero = "(xx) xxxxxxxxx",
  avatar= avatarDefault
}){
  return(
    <>
     <h1 className="mobileTitle">Crachá Digital</h1>
    <ul>
     
    <section className="containerCrachaFrente">
      <Image src={crachaFrente} className="containerCrachaImage"/>
      <div className="avatarCracha">
        <Image 
          src={avatar}
          alt="Logotipo"
          className="logoAvatar"
          layout="fill"
        />
      </div>
      <div className="nomeCracha">{nome}</div>
      <div className="cargoCracha">{cargo}</div>
    </section>

    <p className="desktopTitle">Crachá Digital</p>

    <section className="containerCrachaCostas">
      <Image src={crachaCostas} className="containerCrachaImage"/>
      <div className="localCracha">{local}</div>
      <div className="emailCracha">{email}</div>
      <div className="numeroCracha">{cargo}</div>
    </section>
    </ul>
    </>


  )
}
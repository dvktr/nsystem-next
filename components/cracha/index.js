import crachaFrente from '../../public/images/cracha-frente.png'
import crachaCostas from '../../public/images/cracha-costas.png'
let avatarDefault = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxtYXNrIGlkPSJtYXNrMF8yXzQwIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iOTYiIGhlaWdodD0iOTYiPg0KPHBhdGggZD0iTTcuOTk5OTQgOTZDNy45OTk5NCA5NiAtNi4xMDM1MmUtMDUgOTYgLTYuMTAzNTJlLTA1IDg4Qy02LjEwMzUyZS0wNSA4MCA3Ljk5OTk0IDU2IDQ3Ljk5OTkgNTZDODcuOTk5OSA1NiA5NS45OTk5IDgwIDk1Ljk5OTkgODhDOTUuOTk5OSA5NiA4Ny45OTk5IDk2IDg3Ljk5OTkgOTZINy45OTk5NFpNNDcuOTk5OSA0OEM1NC4zNjUxIDQ4IDYwLjQ2OTYgNDUuNDcxNCA2NC45NzA1IDQwLjk3MDZDNjkuNDcxNCAzNi40Njk3IDcxLjk5OTkgMzAuMzY1MiA3MS45OTk5IDI0QzcxLjk5OTkgMTcuNjM0OCA2OS40NzE0IDExLjUzMDMgNjQuOTcwNSA3LjAyOTQ0QzYwLjQ2OTYgMi41Mjg1NiA1NC4zNjUxIDAgNDcuOTk5OSAwQzQxLjYzNDcgMCAzNS41MzAzIDIuNTI4NTYgMzEuMDI5NCA3LjAyOTQ0QzI2LjUyODUgMTEuNTMwMyAyMy45OTk5IDE3LjYzNDggMjMuOTk5OSAyNEMyMy45OTk5IDMwLjM2NTIgMjYuNTI4NSAzNi40Njk3IDMxLjAyOTQgNDAuOTcwNkMzNS41MzAzIDQ1LjQ3MTQgNDEuNjM0NyA0OCA0Ny45OTk5IDQ4WiIgZmlsbD0iI0RBREFEQSIvPg0KPC9tYXNrPg0KPGcgbWFzaz0idXJsKCNtYXNrMF8yXzQwKSI+DQo8Y2lyY2xlIGN4PSI0Ny45OTk5IiBjeT0iMzYiIHI9IjYwIiBmaWxsPSIjREFEQURBIi8+DQo8L2c+DQo8L3N2Zz4NCg==" 
import Image from "next/image";

export default function Cracha({
  nome= "DEFAULT",
  cargo= "DEFAULT",
  local = "sajhfg agskoçs agslkãsg ",
  email = "",
  numero = "",
  avatar = avatarDefault
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
      <div className="nomeCracha"><h2>{nome}</h2></div>
      <div className="cargoCracha"><h2>{cargo}</h2></div>
    </section>

    <p className="desktopTitle">Crachá Digital</p>

    <section className="containerCrachaCostas">
      <Image src={crachaCostas} className="containerCrachaImage"/>
      <div className="localCracha"><h2>{local}</h2></div>
      <div className="emailCracha"><h2>{email}</h2></div>
      <div className="numeroCracha"><h2>{numero}</h2></div>
    </section>
    </ul>
    </>


  )
}
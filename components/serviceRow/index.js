import Image from "next/image";

import imgStatusPendente from '../../public/images/relogio.svg'
import imgStatusAceito from '../../public/images/accept.svg'
import Button from "../button";

import Axios from 'axios'
import Script from 'next/script'
import Router from 'next/router'

export default function ServiceRow({
  data="01.02.2021",
  id="#00001",
  assunto="Perdi minha senha",
  status='1'
}){
  let imgStatus = (status == 1) ? imgStatusAceito : imgStatusPendente
  let textStatus = (status  == 1) ? 'Concluído' : 'Pendente'

  let buttonText = (status  == 1) ? 'Concluído' : 'Concluir'
  let buttonC = (status == 1) ? 'flex' : 'none'
  let buttonP = (status == 1) ? 'none' : 'flex'

  const putStatus = async (e) => {
    if (typeof window !== 'undefined') {
      let stringEmail;
      stringEmail = sessionStorage.getItem('email')
    try {
      await Axios.put("http://localhost:3002/servicedesk", {
        email: stringEmail,
        id: id,
        answer: "modificado"
      }).then(async () => {
        
        Router.push('/concluiservice')
      });
    } catch (error) {
      alert("Erro: " + error);
    }
  };
}

  return (
    <>
      <div className="rowService">
        <div className="dataService padraoRowService">
          {data}
        </div>
        <div className="idService padraoRowService">
          #{id}
        </div>
        <div className="assuntoService padraoRowService">
          {assunto}
        </div>
        <div className="statusService padraoRowService">
          <Image 
            src={imgStatus}
            alt="logoStatus"
            width="40%"
            className="logo"
          />
          <h7>{textStatus}</h7>
        </div>

          <div className="botaoServiceConcluido padraoRowService" style={{display: buttonC,}}>
              <Button
                text={buttonText}
                cor="pendente"
                disable="true"
          />
        </div>
        <div className="botaoServicePendente padraoRowService" style={{display: buttonP,}}>
            <Button
              text={buttonText}
              cor="pendente"
              verifyClick={() => {putStatus()}}
        />
        </div>

      </div>
      
    </>
  )
}
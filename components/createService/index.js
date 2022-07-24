import InputPublico from '../inputPublico/index'
import imgAvatar from '../../public/images/avatar.svg'
import imgCifrao from '../../public/images/cifrao.png'

import Button from '../button';
import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';
import Router from 'next/router'
import Axios from 'axios'

export default function CreateService({
    

}) {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  const [email, setEmail] = useState(null);
  const [service, setService] = useState("");
  const [conclusion, setConclusion] = useState("");
  const [date, setDate] = useState(null);


    if (typeof window !== 'undefined') {
      let stringEmail;
      stringEmail = sessionStorage.getItem('email')
      if(email == null) {
        setEmail(stringEmail);
        setDate(today.toLocaleDateString())
      }
  };



  const createService = async () => {
    try {
      await Axios.post("http://localhost:3002/servicedesk/add", { 
        email: email,
        service: service,
        date: date,
        status: '0',
        conclusion: conclusion
      }).then(res => {
        console.log(res);
        Router.push('/home#services')
      });
    } catch (error) {
      
    }
  }


    return (
    <>
      <div className="atualizaContainer">
        <h1>Criar Serviço</h1>
      <section className={"paginaLogin paginaPublica"}>

      <div className="conteudoPaginaPublicaUpdate">
        <form action="">
          <InputPublico
            imagem={imgAvatar}
            texto="Título"
            tipo="text"
            aoAlterarValor={(e) => setService(e.target.value)}
            valor={service}
            mensagemValidacao="Valor não permitido!"
            exibirMensagemValiacao={!service}
          />

          <InputPublico
            imagem={imgAvatar}
            texto="Texto"
            tipo="text"
            aoAlterarValor={(e) => setConclusion(e.target.value)}
            valor={conclusion}
            mensagemValidacao="Valor não permitido!"
            exibirMensagemValiacao={!conclusion}
          />


          <Button
            text={"Criar"}
            type="submit"
            verifyClick={() => {createService()}}
          />
        </form>
      </div>
    </section>
    </div>
    </>
  )
}
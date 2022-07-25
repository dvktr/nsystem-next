import InputPublico from "../inputPublico/index";
import imgAvatar from "../../public/images/avatar.svg";
import imgCifrao from "../../public/images/cifrao.png";

import Button from "../button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Router from "next/router";
import Axios from "axios";

export default function ConcluiService({}) {
  const [email, setEmail] = useState(null);
  const [id, setId] = useState(null);
  const [service, setService] = useState("");
  const [conclusion, setConclusion] = useState("");

  
  const selService = async () => {
    if (typeof window !== 'undefined') {
      let stringEmail;
      stringEmail = sessionStorage.getItem('email')

    try {
      await Axios.post('http://localhost:3002/selservice', {
        email: stringEmail,
        id: id
      }).then(async res => {
        await Axios.post("http://localhost:3002/sendemail", {
          email: stringEmail,
          service: res?.data?.service,
          conclusion: res?.data?.conclusion,
          answer: res?.data?.answer
        }).then((send) => {
            console.log(send)
        });
      })

    } catch (error) {
      console.log(error)
    }}
  }

  const getService = async () => {
    if (typeof window !== "undefined") {
      let stringEmail;
      stringEmail = sessionStorage.getItem("email");
      try {
        await Axios.post("http://localhost:3002/getserviceid", {
          email: stringEmail
        }).then(res => {
          setService(res?.data?.service)
          setId(res?.data?.id)
        });
      } catch (error) {
          console.log(error)
      }
    }
  };

  const putStatus = async (e) => {
    if (typeof window !== 'undefined') {
      let stringEmail;
      stringEmail = sessionStorage.getItem('email')
    try {
      await Axios.put("http://localhost:3002/servicedesk", {
        email: stringEmail,
        id: id,
        answer: conclusion
      }).then(async (res) => {
        selService();
        Router.push('/home#services')
      });
    } catch (error) {
      alert("Erro: " + error);
    }
  };
}

  getService()
  return (
    <>
      <div className="atualizaContainer">
        <h1>{"Serviço: " + service}</h1>
        <section className={"paginaLogin paginaPublica"}>
          <div className="conteudoPaginaPublicaUpdate">
            <form action="">
              <InputPublico
                imagem={imgAvatar}
                texto="Resposta"
                tipo="text"
                aoAlterarValor={(e) => setConclusion(e.target.value)}
                valor={conclusion}
                mensagemValidacao="Valor não permitido!"
                exibirMensagemValiacao={!conclusion}
              />

              <Button
                text={"Enviar resposta"}
                type="submit"
                verifyClick={() => {
                  putStatus()
                }}
              />
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

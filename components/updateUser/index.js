import InputPublico from '../inputPublico/index'
import imgAvatar from '../../public/images/avatar.svg'
import imgCifrao from '../../public/images/cifrao.png'

import Button from '../button';
import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';
import Router from 'next/router'
import Axios from 'axios'

export default function UpdateUser({
    

}) {
  const [id, setId] = useState("")
  const [cargo, setCargo] = useState("");
  const [email, setEmail] = useState("");
  const [local, setLocal] = useState("");
  const [numero, setNumero] = useState("");

  const [salario, setSalario] = useState("");
  const [faltas, setFaltas] = useState("");
  const [inss, setInss] = useState("");
  const [vt, setVt] = useState("");
  const [va, setVa] = useState("");
  const [dterceiro, setDterceiro] = useState("");

  const getUser = async (e) => {
    if (typeof window !== 'undefined') {
      let stringEmail;
      stringEmail = sessionStorage.getItem('email')
    //e.preventDefault();
    try {
      await Axios.post("http://localhost:3002/seluser", { 
        email: stringEmail
      }).then((res) => {
        setId(res.data.id)
        setEmail(stringEmail) 
      });
    } catch (error) {
      alert("Erro: " + error);
    }
  };
}
getUser();

  const updateUser = async () => {
    try {
      await Axios.put("http://localhost:3002/user", { 
        id: id,
        cargo: cargo,
        local: local,
        numero: numero
      }).then(() => {
        updateContraCheque();
        Router.push('/home#contracheque')
      });
    } catch (error) {
      
    }
  }

  const updateContraCheque = async () => {
    try {
      await Axios.put("http://localhost:3002/contracheque/", { 
        email: email,
        salario: salario,
        faltas: faltas,
        inss: inss,
        vt: vt,
        va: va,
        dterceiro: dterceiro,
        salariol: "0"
      }).then(res => {
        console.log(res)
      });
    } catch (error) {
      
    }
  }

    return (
    <>
      <div className="atualizaContainer">
        <h1>Atualiza Cadastro</h1>
      <section className={"paginaLogin paginaPublica"}>

      <div className="conteudoPaginaPublicaUpdate">
        <form action="">
          <InputPublico
            imagem={imgAvatar}
            texto="Cargo"
            tipo="text"
            aoAlterarValor={(e) => setCargo(e.target.value)}
            valor={cargo}
            mensagemValidacao="Valor não permitido!"
            exibirMensagemValiacao={!cargo}
          />

          <InputPublico
            imagem={imgAvatar}
            texto="Local"
            tipo="text"
            aoAlterarValor={(e) => setLocal(e.target.value)}
            valor={local}
            mensagemValidacao="Valor não permitido!"
            exibirMensagemValiacao={!local}
          />

          <InputPublico
            imagem={imgAvatar}
            texto="Telefone"
            tipo="text"
            aoAlterarValor={(e) => setNumero(e.target.value)}
            valor={numero}
            mensagemValidacao="Valor não permitido!"
            exibirMensagemValiacao={!numero}
          />

          <InputPublico
            imagem={imgCifrao}
            texto="Salario (Referência)"
            tipo="number"
            aoAlterarValor={(e) => setSalario(e.target.value)}
            valor={salario}
            mensagemValidacao="Valor não permitido!"
            exibirMensagemValiacao={!salario}
          />

          <InputPublico
            imagem={imgCifrao}
            texto="Faltas (Referência)"
            tipo="number"
            aoAlterarValor={(e) => setFaltas(e.target.value)}
            valor={faltas}
            mensagemValidacao="Valor não permitido!"
            exibirMensagemValiacao={!faltas}
          />

          <InputPublico
            imagem={imgCifrao}
            texto="INSS (Referência)"
            tipo="number"
            aoAlterarValor={(e) => setInss(e.target.value)}
            valor={inss}
            mensagemValidacao="Valor não permitido!"
            exibirMensagemValiacao={!inss}
          />

          <InputPublico
            imagem={imgCifrao}
            texto="Vale alimentação (Referência)"
            tipo="number"
            aoAlterarValor={(e) => setVa(e.target.value)}
            valor={va}
            mensagemValidacao="Valor não permitido!"
            exibirMensagemValiacao={!va}
          />

          <InputPublico
            imagem={imgCifrao}
            texto="Vale transporte (Referência)"
            tipo="number"
            aoAlterarValor={(e) => setVt(e.target.value)}
            valor={vt}
            mensagemValidacao="Valor não permitido!"
            exibirMensagemValiacao={!vt}
          />

          <InputPublico
            imagem={imgCifrao}
            texto="Décimo Terceiro (Referência)"
            tipo="number"
            aoAlterarValor={(e) => setDterceiro(e.target.value)}
            valor={dterceiro}
            mensagemValidacao="Valor não permitido!"
            exibirMensagemValiacao={!dterceiro}
          />

          <Button
            text={"Atualizar"}
            type="submit"
            verifyClick={() => {updateUser()}}
          />
        </form>
      </div>
    </section>
    </div>
    </>
  )
}
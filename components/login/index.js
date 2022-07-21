import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';
import Router from 'next/router'

import InputPublico from "../inputPublico";
import Button from "../button"
import { validarEmail, validarSenha } from '../../utils/validadores'

import Axios from "axios";

import imagemEnvelope from "../../public/images/envelope.svg";
import imagemChave from "../../public/images/chave.svg";
import imagemLogo from "../../public/images/logo.svg";
export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const armazenar = (chave, valor) => {
    localStorage.setItem(chave, valor);
  }
  

  const loginUser = async (e) => {
    //e.preventDefault();
    if (!validarFormulario()) {
      return;
    }
    try {
      await Axios.post("http://localhost:3002/login", { 
        email: email,
        senha: senha,
      }).then((res) => {
        if(res?.data?.statusCode == 200){
          if (typeof window !== 'undefined') {
            const armazenar = (chave, valor) => {
              sessionStorage.setItem(chave, valor);
            }
            armazenar('email', email)
          }
          Router.push('/home')
        } else {
          alert("Erro: " + res?.data?.error)
        }
        
      });
    } catch (error) {
      console.log(error);
    }
  };

  const validarFormulario = () => {
    return (
      validarEmail(email)
      && validarSenha(senha)
    )
  }

  return (
    <section className={"paginaLogin paginaPublica"}>
      <div className="logoContainer">
        <Image 
          src={imagemLogo}
          alt="Logotipo"
          layout="fill"
          className="logo"
        />
      </div>

      <div className="conteudoPaginaPublica">
        <form action="">
          <InputPublico
            imagem={imagemEnvelope}
            texto="E-mail"
            tipo="email"
            aoAlterarValor={(e) => setEmail(e.target.value)}
            valor={email}
            mensagemValidacao="O endereço informado está inválido!"
            exibirMensagemValiacao={email && !validarEmail(email)}
          />

          <InputPublico
            imagem={imagemChave}
            texto="Senha"
            tipo="password"
            aoAlterarValor={(e) => setSenha(e.target.value)}
            valor={senha}
            mensagemValidacao="A senha deverá conter pelo menos três caractéres!"
            exibirMensagemValiacao={senha && !validarSenha(senha)}
          />

          <Button
            text={"Login"}
            type="submit"
            disable={!validarFormulario()}
            verifyClick={() => {if(validarFormulario()) loginUser();}}
          />
        </form>

         <div className="rodapePaginaPublica">
           <p>Não possui uma conta?</p>
           <Link href="/cadastro">Faça seu cadastro agora</Link>
         </div>
      </div>
    </section>
  );
}

import InputPublico from "../../components/inputPublico";
import Button from "../../components/button";
import { UploadImagem } from "../../components/uploadImagem";
import Image from "next/image";
import Link from "next/link";
import Router from 'next/router';
import {
  validarEmail,
  validarSenha,
  validarNome,
  validarConfirmacaoDeSenha,
} from "../../utils/validadores";


import Axios from "axios";

import UsuarioService from "../../services/UsuarioService";

import imagemLogo from "../../public/images/logo.svg";
import imagemUsuarioAtivo from "../../public/images/user.svg";
import imagemAvatar from "../../public/images/avatar.svg";
import imagemEnvelope from "../../public/images/envelope.svg";
import imagemChave from "../../public/images/chave.svg";
import { useState } from "react";

const usuarioService = new UsuarioService();

export default function Cadastro() {
  const [avatar, setAvatar] = useState(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
  const [estaSubmetendo, setEstaSubmetendo] = useState(false);

  const consultar = async (chave) => {
    try {
      let stringEmail;
      stringEmail = sessionStorage.getItem('email')
      if(stringEmail != null){
        Router.push('/home')
      }
    } catch (error) {
      Router.push('/')
    }
  }

  if (typeof window !== 'undefined') {
    
    consultar(); 
  }

  const validarFormulario = () => {
    return (
      validarEmail(email) &&
      validarSenha(senha) &&
      validarNome(nome) &&
      validarConfirmacaoDeSenha(senha, confirmacaoSenha)
    );
  };

  const userVerificado = async () => {
    if(avatar == null){
        await Axios.post("http://localhost:3002/cadastro", {
          nome: nome,
          email: email,
          senha: senha,
          avatar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxtYXNrIGlkPSJtYXNrMF8yXzQwIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iOTYiIGhlaWdodD0iOTYiPg0KPHBhdGggZD0iTTcuOTk5OTQgOTZDNy45OTk5NCA5NiAtNi4xMDM1MmUtMDUgOTYgLTYuMTAzNTJlLTA1IDg4Qy02LjEwMzUyZS0wNSA4MCA3Ljk5OTk0IDU2IDQ3Ljk5OTkgNTZDODcuOTk5OSA1NiA5NS45OTk5IDgwIDk1Ljk5OTkgODhDOTUuOTk5OSA5NiA4Ny45OTk5IDk2IDg3Ljk5OTkgOTZINy45OTk5NFpNNDcuOTk5OSA0OEM1NC4zNjUxIDQ4IDYwLjQ2OTYgNDUuNDcxNCA2NC45NzA1IDQwLjk3MDZDNjkuNDcxNCAzNi40Njk3IDcxLjk5OTkgMzAuMzY1MiA3MS45OTk5IDI0QzcxLjk5OTkgMTcuNjM0OCA2OS40NzE0IDExLjUzMDMgNjQuOTcwNSA3LjAyOTQ0QzYwLjQ2OTYgMi41Mjg1NiA1NC4zNjUxIDAgNDcuOTk5OSAwQzQxLjYzNDcgMCAzNS41MzAzIDIuNTI4NTYgMzEuMDI5NCA3LjAyOTQ0QzI2LjUyODUgMTEuNTMwMyAyMy45OTk5IDE3LjYzNDggMjMuOTk5OSAyNEMyMy45OTk5IDMwLjM2NTIgMjYuNTI4NSAzNi40Njk3IDMxLjAyOTQgNDAuOTcwNkMzNS41MzAzIDQ1LjQ3MTQgNDEuNjM0NyA0OCA0Ny45OTk5IDQ4WiIgZmlsbD0iI0RBREFEQSIvPg0KPC9tYXNrPg0KPGcgbWFzaz0idXJsKCNtYXNrMF8yXzQwKSI+DQo8Y2lyY2xlIGN4PSI0Ny45OTk5IiBjeT0iMzYiIHI9IjYwIiBmaWxsPSIjREFEQURBIi8+DQo8L2c+DQo8L3N2Zz4NCg==",
      }).then(() => {
          console.log("Registrado");
          Router.push('/')
      });
      } else {

      await Axios.post("http://localhost:3002/cadastro", {
        nome: nome,
        email: email,
        senha: senha,
        avatar: avatar.preview,
      }).then(() => {
        console.log("Registrado");
        Router.push('/')
      });
    }
  }

  const addUser = async (e) => {
    //e.preventDefault();
    if (!validarFormulario()) {
      return;
    }
    setEstaSubmetendo(true);
    try {
      await Axios.post('http://localhost:3002/seluser', {
        email: email
      }).then((res) => {
        if(res.data.email != null) {
          alert('Email ja cadastrado')
        } else {
          userVerificado();
        }
      })

      
    } catch (error) {
      console.log(error);
    }
    setEstaSubmetendo(false);
  };

  /**/
  return (
    <section className={`paginaCadastro paginaPublica`}>
      <div className="logoContainer desktop">
        <Image src={imagemLogo} alt="Logotipo" layout="fill" className="logo" />
      </div>

      <div className="conteudoPaginaPublica">
        <form>
          <UploadImagem
            imagemPreviewClassName="avatar avatarPreview"
            imagemPreview={avatar?.preview || imagemAvatar.src}
            setImagem={setAvatar}
          />

          <InputPublico
            imagem={imagemUsuarioAtivo}
            texto="Nome Completo"
            tipo="text"
            aoAlterarValor={(e) => setNome(e.target.value)}
            valor={nome}
            mensagemValidacao="O nome precisa de pelo menos 3 caractéres!"
            exibirMensagemValiacao={nome && !validarNome(nome)}
          />

          <InputPublico
            imagem={imagemEnvelope}
            texto="E-mail"
            tipo="email"
            aoAlterarValor={(e) => setEmail(e.target.value)}
            valor={email}
            mensagemValidacao="O email inserido é inválido!"
            exibirMensagemValiacao={email && !validarEmail(email)}
          />
          <InputPublico
            imagem={imagemChave}
            texto="Senha"
            tipo="password"
            aoAlterarValor={(e) => setSenha(e.target.value)}
            valor={senha}
            mensagemValidacao="A senha deve conter pelo menos 3 caractéres!"
            exibirMensagemValiacao={senha && !validarSenha(senha)}
          />

          <InputPublico
            imagem={imagemChave}
            texto="Confirmar Senha"
            tipo="password"
            aoAlterarValor={(e) => setConfirmacaoSenha(e.target.value)}
            valor={confirmacaoSenha}
            mensagemValidacao="As senhas não são iguais!"
            exibirMensagemValiacao={
              confirmacaoSenha &&
              !validarConfirmacaoDeSenha(senha, confirmacaoSenha)
            }
          />

          <Button
            text={"Cadastrar"}
            type="submit"
            disable={!validarFormulario() || estaSubmetendo}
            verifyClick={() => {if(!validarFormulario() || !estaSubmetendo) addUser();}}
          />
        </form>

        <div className="rodapePaginaPublica">
          <p>Já possui uma conta?</p>
          <Link href="/">Faça seu login agora</Link>
        </div>
      </div>
    </section>
  );
}

import InputPublico from "../../components/inputPublico";
import Button from "../../components/button";
import { UploadImagem } from "../../components/uploadImagem";
import Image from "next/image";
import Link from "next/link";
import Router from 'next/router'
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

  const validarFormulario = () => {
    return (
      validarEmail(email) &&
      validarSenha(senha) &&
      validarNome(nome) &&
      validarConfirmacaoDeSenha(senha, confirmacaoSenha)
    );
  };

  const addUser = async (e) => {
    //e.preventDefault();
    if (!validarFormulario()) {
      return;
    }
    setEstaSubmetendo(true);
    try {
      await Axios.post("http://localhost:3002/cadastro", {
        nome: nome,
        email: email,
        senha: senha,
        avatar: avatar.preview,
      }).then(() => {
        console.log("Registrado");
        Router.push('/')
      });
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

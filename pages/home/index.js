import Nav from '../../components/nav/index'
import Cracha from "../../components/cracha/index"
import ContraCheque from '../../components/contraCheque/index'

import { useState } from "react";
import Axios from 'axios'
import Link from "next/link";
import Router from 'next/router';

export default function Home() {
  const [avatar, setAvatar] = useState('');
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cargo, setCargo] = useState("");
  const [local, setLocal] = useState("");
  const [numero, setNumero] = useState("");

  const consultar = async (chave) => {
    try {
      let stringEmail;
      stringEmail = sessionStorage.getItem('email')
      if(stringEmail == null){
        Router.push('/')
      }
    } catch (error) {
      Router.push('/')
    }
  }

  if (typeof window !== 'undefined') {
    
    consultar(); 
  }
  

  const getUser = async (e) => {
    if (typeof window !== 'undefined') {
      let stringEmail;
      stringEmail = sessionStorage.getItem('email')
    //e.preventDefault();
    try {
      await Axios.post("http://localhost:3002/seluser", { //parei quando deu erro no axios "not found"
        email: stringEmail
      }).then((res) => {
        console.log(res)
        setAvatar(res.data.avatar)
        setNome(res.data.nome)
        setEmail(res.data.email)
        setCargo((res.data.cargo)?.toUpperCase())
        setLocal(res.data.local)
        setNumero(res.data.numero)   
      });
    } catch (error) {
      alert("Erro: " + error);
    }
  };
}
  getUser();
  
  

  return (
    <>
      <Nav navEmail={email}/>
      <Cracha
        nome= {nome}
        cargo= {cargo}
        local = {local}
        email = {email}
        numero = {numero}
        avatar = {avatar}
      />
      <div className="separaGuia"></div>

      <ContraCheque/>
    </>
    
  );
}

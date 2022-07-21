import Nav from '../../components/nav/index'
import Cracha from "../../components/cracha/index"

import { useState } from "react";
import Axios from 'axios'
import Link from "next/link";
import Router from 'next/router';

export default function Home() {
  const [avatar, setAvatar] = useState(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cargo, setCargo] = useState("");

  if (typeof window !== 'undefined') {
    const consultar = async (chave) => {
      try {
        let stringEmail;
        stringEmail = sessionStorage.getItem('email')
        console.log(stringEmail)
        if(stringEmail == null){
          Router.push('/')
        }
      } catch (error) {
        Router.push('/')
      }
    }
    consultar(); 
  }
  

  const getUser = async (e) => {
    if (typeof window !== 'undefined') {
      let stringEmail;
      stringEmail = sessionStorage.getItem('email')
    //e.preventDefault();
    try {
      await Axios.get("http//localhost:3002/seluser", { //parei quando deu erro no axios "not found"
        email: stringEmail.toString(),
      }).then((res) => {
        if(res?.data?.statusCode == 200){
          console.log(res)
        } else {
          alert("Erro: " + res?.data?.error)
        }
        
      });
    } catch (error) {
      console.log(error);
    }
  };
}
  getUser();
  
  

  return (
    <>
      <Nav navEmail="asdf@gmail.com"/>
      <Cracha
        nome= "default"
        cargo= "default"
        local = "rua xxxx, xxxxxx"
        email = "default@gmail.com"
        numero = "(xx) xxxxxxxxx"
        
      />
    </>
    
  );
}

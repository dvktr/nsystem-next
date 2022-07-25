import ConcluiService from '../../components/concluiService/index'
import { useState } from "react";
import Axios from 'axios'
import Link from "next/link";
import Router from 'next/router';

export default function concluiService() {
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

  return (
    <>
      <ConcluiService/>
    </>   
  );
}

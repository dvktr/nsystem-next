import { useState, useRef } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/avatar'
import Button from '../components/button'
import { UploadImagem } from '../components/uploadImagem'


export default function Home() {
  const [imagem, setImagem] = useState();
  const referenciaInput = useRef(null);

  return (
    <>
      <h1>a</h1>
      <UploadImagem 
        setImagem={setImagem} 
        imagemPreview={imagem?.preview}
        aoSetarReferencia={(ref) => referenciaInput.current = ref}
      />

    <Avatar/>
    <Button text={'Login'} disable={true}/>
    </>
  )
}

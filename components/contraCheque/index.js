import CheckRolls from "../checkRolls/index";
import CheckRollsMobile from "../checkRollsMobile/index";
import Script from "next/script";
import Button from "../button/index";
import { useState } from "react";
import Axios from 'axios'

export default function ContraCheque({}) {
  const [email, setEmail] = useState(null);
  const [salario, setSalario] = useState("565,20");
  const [falta, setFalta] = useState("-20,63");
  const [inss, setInss] = useState("-175,56");
  const [va, setVa] = useState("-24,58");
  const [vt, setVt] = useState("-15,00");
  const [dterceiro, setDterceiro] = useState("23");
  const [salariol, setSalariol] = useState("413,02");

  let salarioCalc = (parseInt(salario) * 19.5);
  let faltasCalc = (parseInt(falta) * 19.5);
  let inssCalc = (parseInt(inss) * 4.09625);
  let vaCalc = (parseInt(va) * 4.09625);
  let vtCalc = (parseInt(vt) * 4.09625);
  let dterceiroCalc = (parseInt(dterceiro));

  let salariolCalc = (salarioCalc + dterceiroCalc - faltasCalc - inssCalc - vaCalc - vtCalc)?.toFixed(2)

  const consultar = async (chave) => {
    try {
      let stringEmail;
      stringEmail = sessionStorage.getItem('email')
      if(stringEmail != null && email == undefined || email == null) {
          setEmail(stringEmail)
      }
    } catch (error) {

    }
  }

  if (typeof window !== 'undefined') consultar(); 
  

  const getContraCheque = async () => {
    try {
      await Axios.post("http://localhost:3002/contracheque/", { 
        email: email,
      }).then(res => {
        setSalario(res?.data?.salario);
        setFalta(res?.data?.faltas);
        setInss(res?.data?.inss);
        setVa(res?.data?.va);
        setVt(res?.data?.vt);
        setDterceiro(res?.data?.dterceiro);
        setSalariol(res?.data?.salariol);
      });
    } catch (error) {
      
    }
  }
  getContraCheque();



  function downloadPDF() {
    var janela = window.open("", "", "width=600, height=800");
    janela.document.write("<htm><head>");
    janela.document.write("<title>PDF</title><head>");
    janela.document.write("<body>");
    janela.document.write("<h1>CONTRA CHEQUE DOWNLOAD</h1>");
    janela.document.write(`Salário:......................${salarioCalc}(+)`);
    janela.document.write("<br>");
    janela.document.write(`Falta:.........................${faltasCalc}(-)`);
    janela.document.write("<br>");
    janela.document.write(`INSS:........................${inssCalc}(-)`);
    janela.document.write("<br>");
    janela.document.write(`Vale Transporte:........${vaCalc}(-)`);
    janela.document.write("<br>");
    janela.document.write(`Vale Alimentação:....${vtCalc}(-)`);
    janela.document.write("<br>");
    janela.document.write(`Décimo Terceiro:......${dterceiroCalc}(+)`);
    janela.document.write("<br>");
    janela.document.write("------------------------------------");
    janela.document.write("<br>");
    janela.document.write(`Salário Líquido:........${salariolCalc}(=)`);
    janela.document.write("<br>");
    janela.document.write("</body></html>");
    janela.document.close();
    janela.print();
  }

  return (
    <>
      <section id="contracheque"className="containerCC">
        <h1>Contra Cheque</h1>

        <div className="containerInfo">
          <CheckRolls 
            salarioRef = {salario}
            salarioVenc = {salarioCalc}
            faltaRef = {falta}
            faltaDesc= {"-" + faltasCalc}
            inssRef = {inss}
            inssDesc = {"-" + inssCalc}
            vtRef = {vt}
            vtDesc = {"-" + vtCalc}
            vaRef = {va}
            vaDesc = {"-" + vaCalc}
            dterceiroRef = "1"
            dterceiroVenc = {dterceiro}
            salariol = {salariolCalc}
          />
          <Button
            id="buttonContraCheque"
            types="submit"
            text="Baixar"
            verifyClick={() => {
              try {
                downloadPDF();
              } catch (error) {
                console.log(error);
              }
            }}
          />
        </div>
      </section>
      
      <section className="containerCCMobile">
        <h1>Contra Cheque</h1>
        <div className="containerInfoMobile">
          <CheckRollsMobile />
          <Button
            types="submit"
            text="Baixar"
            verifyClick={() => {
              try {
                downloadPDF();
              } catch (error) {
                console.log(error);
              }
            }}
          />
        </div>
      </section>
    </>
  );
}

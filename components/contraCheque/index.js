import CheckRolls from "../checkRolls/index";
import CheckRollsMobile from "../checkRollsMobile/index";
import Script from "next/script";
import Button from "../button/index";
import { useState } from "react";

export default function ContraCheque({}) {
  const [salario, setSalario] = useState("565,20");
  const [falta, setFalta] = useState("20,63");
  const [inss, setInss] = useState("175,56");
  const [va, setVa] = useState("24,58");
  const [vt, setVt] = useState("15,00");
  const [dterceiro, setDterceiro] = useState("55,00");
  const [salariol, setSalariol] = useState("413,02");

  function downloadPDF() {
    var janela = window.open("", "", "width=600, height=800");
    janela.document.write("<htm><head>");
    janela.document.write("<title>PDF</title><head>");
    janela.document.write("<body>");
    janela.document.write("<h1>CONTRA CHEQUE DOWNLOAD</h1>");
    janela.document.write(`Salário:......................${salario}(+)`);
    janela.document.write("<br>");
    janela.document.write(`Falta:.........................${falta}(-)`);
    janela.document.write("<br>");
    janela.document.write(`INSS:........................${inss}(-)`);
    janela.document.write("<br>");
    janela.document.write(`Vale Transporte:........${va}(-)`);
    janela.document.write("<br>");
    janela.document.write(`Vale Alimentação:....${vt}(-)`);
    janela.document.write("<br>");
    janela.document.write(`Décimo Terceiro:......${dterceiro}(+)`);
    janela.document.write("<br>");
    janela.document.write("------------------------------------");
    janela.document.write("<br>");
    janela.document.write(`Salário Líquido:........${salariol}(=)`);
    janela.document.write("<br>");
    janela.document.write("</body></html>");
    janela.document.close();
    janela.print();
  }

  return (
    <>
      <section className="containerCC">
        <h1>Contra Cheque</h1>

        <div className="containerInfo">
          <CheckRolls />
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

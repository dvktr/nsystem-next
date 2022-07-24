import ServiceRow from '../serviceRow/index'
import ServiceNav from '../navService/index'
import Button from '../button';
import Axios from 'axios'
import { useState } from "react";

import Router from 'next/router'

export default function ServiceDesk({}) {

  let exibirServiceDisplay = 'flex'
  const [serviceList, setServiceList] = useState();
  
  const getServices = async (e) => {
    if (typeof window !== 'undefined') {
      let stringEmail;
      stringEmail = sessionStorage.getItem('email')
    try {
      await Axios.post("http://localhost:3002/servicedesk", {
        email: stringEmail
      }).then((res) => {
        setServiceList(res.data) 
      });
    } catch (error) {
      alert("Erro: " + error);
    }
  };
}

getServices();


  return (
    <> 
      <div id="services"className="containerService">
      
        <h1>Service Desk</h1>
        <button className="botaoCriarServico" onClick={() => {Router.push('/addService')}}>+</button>
        <div className="serviceContainerBg">
          <div className="serviceContainer">
            <ServiceNav/>

            {serviceList?.slice(0)?.reverse()?.map((val, key) => {
                return <ServiceRow
                          data={val.date}
                          id={`${val.id}`}
                          assunto={val.service}
                          status={val.status}
                      />
              })
            }

          </div>
        </div>
      </div>
    </>
  );
}

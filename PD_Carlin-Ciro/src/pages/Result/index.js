import './styles.css';

import carlinAranha from '../../assets/carlin.png'

import Input from '../../components/Input';
import Form from '../../components/Form';
import { useState } from 'react';
import Modal from 'react-modal';
import { getLista } from '../../utils/getLista';

import teia from '../../assets/teia.png';

export default function Result() {
  const [distance, setDistance] = useState(undefined);
  const [modalOpen, setModalOpen] = useState(false);
  const [missions, setMissions] = useState([]);
  const [result, setResult] = useState([]);

  function handleResult() {
    const res = getLista([{}, ...missions], distance);
    console.log(res);
    setResult(res);
    setModalOpen(true);
  }

  return (
    <div className='result'>
     
      <div className='result-container'>
          <p>O sistema criado pelo CIRO-DENUNCIAS deve ser utilizado da seguinte forma: Adicione a distância máxima a ser percorrida pelo CARLIN-ARANHA na noite, após isso adicione denúncia por denúncia colocando o nome do chamado, a distância do chamado em relação a FGA(quartel general do nosso Heroi) e o seu nível de urgencia. Após esses passos só ver a ordem das denuncias a serem atendidas.
          </p>
          <img alt='img' src={carlinAranha} className='carlin' />
          <img alt='img' src={carlinAranha} className='ciro' />
          
          <Input customStyles={{
            marginTop: '1.5rem',
          }} type='number' label='Distância máxima a ser percorrida em KM' input={distance} placeholder='Distância total' onChange={(value) => setDistance(value)} />
          
         
          <button className="botao" onClick={() => handleResult()}>Ver resultado</button>
          
          <Form onSubmit={(mission) => {
            setMissions([mission, ...missions])
            window.scrollTo(0, document.body.scrollHeight*4)
          }} />
          
          <h2>Lista de denuncias:</h2>
          
          <div className='denuncias'>
           
            {
              missions.map((mission) => {
                if(!mission.call) return null
                return (
                  <div key={ mission.call } className='call-container' >
                   
                    <p>Denúncia: {mission.call}</p>
                    <p>Distância:{mission.distance} km</p>
                    <p>Urgência: {mission.urgency}</p>
                 
                  </div>
                );
              })
            }
          </div>
          


      </div>
      <Modal 
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
          >

            <div className='result-modal-content'>
              <p>Segue abaixo a lista das missões que serão priorizadas pelo CARLIN-ARANHA considerando a urgência para defender melhor o GAMA </p>
              
              <div className='missions-list'>
                {result.map((mission) => {
                    return (
                      <div>

                        <p>Chamado: {mission.call}</p>
                        <p>Urgência: {mission.urgency}</p>

                      </div>
                    );
                  })}
              </div>

            </div>

          </Modal>
      <img className='teia' src = {teia}/>
    </div>
    
  )
}

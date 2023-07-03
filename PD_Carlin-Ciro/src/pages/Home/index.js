import './styles.css';
import teia from '../../assets/teia.png';

import carlinAranha from '../../assets/calrinAranha.png';
import aranha from '../../assets/aranha.png';
import ciro from '../../assets/ciroDenuncias.png';

export default function Home() {
  return(
    <div className='home' >
      <div className='logo'>
        <img  className="carlin" src = { carlinAranha }/>
        <img  className="aranha" src = { aranha }/>
        <img  className="ciro" src = { ciro}/>
        
      </div>
      <p> As noites do GAMA estão cada vez mais perigosas, a sorte da nossa cidade é que
         possuimos a dupla CARLIN-ARANHA e o seu "cara cadeira" CIRO-DENUNCIAS para combater o crime.
         O CIRO-DENUNCIAS desenvolveu um sistema para auxiliar o combate ao crime selecionando quais 
         denuncias deverão ser atendidas primeiro. Clique em continuar e faça sua lista de denuncias </p>
        <img className='teia' src={ teia } />
        <a href='/result'>Continuar</a>
    </div>
  )
}

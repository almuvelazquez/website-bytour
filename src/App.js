import './App.scss';
import Agenciacarousel from './agenciacarousel';
import VideoHome from './videohome';
import SobreNosotros from './sobrenosotros';
import UneteAbyTour from './uneteabytour';
import TecnologiaTecnoturis from './tecnologíatecnoturis';
import Franquicias from './franquicias';
import Contacto from './contacto';

function App() {
  return (
    <div className="App">
      <VideoHome/>
      <SobreNosotros/>
      <Agenciacarousel/>
      <UneteAbyTour/>
      <TecnologiaTecnoturis/>
      <Franquicias />
      <Contacto/>
    </div>
  );
}

export default App;

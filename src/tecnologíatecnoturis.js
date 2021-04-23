import './App.scss';
import BotonSaberMas from './botonsabermas';

function TecnologiaTecnoturis() {
  return (
    <>
      <div className="tecnologiaTecnoturis-container">
          <span className="unete-title">TECNOLOGÍA TECNOTURIS</span>
          <span className="tecnologia-text">Contamos con la <span className="bold">única plataforma del mercado con un concepto 360</span>, que en un mismo entorno engloba metabuscadores, envío de presupuestos, comunicación con tu cliente, con el proveedor, módulo de informes, módulo de CRM, multidestino propio y exclusivo, cierre de expedientes, facturas…</span>
          <span className="tecnologia-text">Ahora estás trabajando con varias herramientas de coste elevado y no comunicadas entre sí; a partir de ahora, eso es historia con la plataforma 360 <span className="bold">TecnoTURIS</span>.</span>
          <span className="tecnologia-text">Tendrás tu propia web y APP para móviles y tablets con tu marca, que te diferenciará de tu competencia.</span>
          <span className="tecnologia-text">La plataforma es <span className="bold">GRATIS y exclusiva para las agencias de byTour</span>.</span>
      </div>
      <video preload="auto" webkit-playsinline playsinline loop autoPlay controls-off muted className="video-home-item" poster="Assets/multimedia/thumbnails/d8d12-00000001.jpg">
          <source type="video/mp4" src="http://tecnoturis.com/assets/multimedia/herramienta_360.mp4"/>
      </video>
      <a name="franquiciasyfreelance"></a>
      <a href="http://tecnoturis.com/" target="_blank">
        <BotonSaberMas className="tecnologiatecnoturis-botonsabermas"/>
      </a>
    </>

  );
}

export default TecnologiaTecnoturis;
import { Fragment } from 'react';
import './App.scss';
import BotonUnete from './botonunete';

function UneteAbyTour() {
  return (
    <Fragment>
      <div className="unete-container">
          <div className="unete-image">
              
          </div>
          <div className="unete-description">
              <span className="unete-title">ÚNETE A BYTOUR</span>
              <span className="unete-text">Crea tu agencia por 3.900 €, llave en mano. Entra en el grupo de gestión con más proyección del mercado nacional. Más de 350 agencias han confiado en nosotros en los dos últimos años. Las claves : tecnología, producto y servicio.
                  <ul >
                      <li>Es un negocio <span className="bold">sin riesgo.</span></li>
                      <li>Con una <span className="bold">mínima inversión </span>inicial.</li>
                      <li><span className="bold">Sin experiencia</span> ni formación previa.</li>
                      <li>Con <span className="bold">tu propia marca.</span></li>
                      <li><span className="bold">Comisiones y rappeles</span> íntegros para ti.</li>
                      <li>Escuela propia para <span className="bold">formación</span> inicial y continua.</li>
                  </ul>
              </span>
          </div>
      </div>
      <a name="tecnologiatecnoturis"></a>
      <a href="#contacto">
        <BotonUnete/>
      </a>
    </Fragment>
  );
  }

export default UneteAbyTour;  

import './App.scss';

function Contacto() {
  return (
    <>
        <div className="contacto-container">
            <div className="contacto-left">
                <h2 className="contacto-title">CONTACTO</h2>
                <span className="contacto-text"> Vereda de los Barros 2A BIS </span>
                <span className="contacto-text">Edificio Éfeso, Oficina 5</span>
                <span className="contacto-text">28925, Madrid</span>
                
                <span className="contacto-text">Teléfono</span>
                <span className="contacto-text">Mail</span>
            </div>
            <iframe className="googleMaps" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=vereda%20de%20los%20barros%202A%20BIS&key=AIzaSyA9FlzV0zTssLRaJoF-NTvuzgiLG0C_QTQ"></iframe>        
        </div>
        
    </>

  );
}

export default Contacto;
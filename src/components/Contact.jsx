import "../css/Contact.css"
import whatappLogo from "../img/2.png"

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Hablemos</h1>
            <p className="contact-details">¡Estamos aquí para ayudarte! Contáctanos mediante los siguientes detalles:</p>
            <ul className="contact-details">
                <li>Dirección: Calle Principal 123, Ciudad, País</li>
                <li>Correo electrónico: info@miempresa.com</li>
                <li>Teléfono: +1 234 567 890</li>
            </ul>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <img className="wsp" src={whatappLogo} alt=""/>
            </a>
        </div>
    );
};

export default Contact;
import React from 'react'
import "../Css/Contact.css";

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-left">
                <div className="contact-left-content">
                    <h2 className="contact-title">ÚNETE AL CLUB EN JULIO</h2>
                    <p className="contact-text">Suscríbete hoy mismo para recibir los últimos productos, eventos, noticias y promociones de EA SPORTS FC y EA por correo electrónico, siguiendo la política de privacidad y cookies de EA.</p>
                </div>
            </div>
            <div className="contact-right">
                <form className="contact-form">
                    <div className="contact-form-content">
                        <input className="contact-input nombre" type="text" placeholder="Nombre" />
                        <input className="contact-input apellidos" type="text" placeholder="Apellidos" />
                        <input className="contact-input correo" type="text" placeholder="Correo electrónico" />
                    </div>

                    <p className="contact-text">
                        Al hacer clic en el botón "Únete", aceptas recibir correos electrónicos sobre productos, eventos y promociones de EA SPORTS FC y EA. Consulta nuestra política de privacidad y cookies para obtener más detalles.
                    </p>

                    <button className="contact-button">Únete</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
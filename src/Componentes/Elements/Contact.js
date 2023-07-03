import React from 'react'
import "../Css/Contact.css";

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-left">
                <div className="contact-left-content">
                    <h2 className="contact-title">ÚNETE AL <span>CAMBIO</span></h2>
                    <p className="contact-text"><span>Suscríbete</span> hoy mismo para recibir los últimos eventos, noticias y promociones de <span>VISUALI</span> por correo electrónico, siguiendo la política de privacidad y cookies.</p>
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
                        Al hacer clic en el botón "Únete", aceptas recibir correos electrónicos sobre eventos, noticias y promociones de <span>VISUALI</span>. Consulta nuestra política de privacidad y cookies para obtener más detalles.
                    </p>

                    <button className="contact-button">Únete</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
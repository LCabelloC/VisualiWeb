import { useState, useRef } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import "../Css/Contact.css";

const Contact = () => {
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const inputRefs = useRef([]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Guardar los datos en Firestore
        const db = getFirestore();
        try {
            await addDoc(collection(db, "usuarios"), {
                nombre,
                apellidos,
                correo
            });
            console.log("Datos guardados en Firestore correctamente");
            setNombre("");
            setApellidos("");
            setCorreo("");
            setMensaje("¡Enviado con éxito!");
        } catch (error) {
            console.error("Error al guardar los datos en Firestore", error);
            setMensaje("Error al enviar el formulario. Inténtalo de nuevo más tarde.");
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.key === 'Enter') {
            handleFormSubmit(e);
            inputRefs.current[index].blur();
        }
    };

    const registerInputRef = (ref, index) => {
        inputRefs.current[index] = ref;
    };

    return (
        <section id="contact">
            <div className="contact-left">
                <div className="contact-left-content">
                    <h2 className="contact-title">ÚNETE AL <span>CAMBIO</span></h2>
                    <p className="contact-text"><span>Suscríbete</span> hoy mismo para recibir los últimos eventos, noticias y promociones de <span>VISUALI</span> por correo electrónico, siguiendo la política de privacidad y cookies.</p>
                </div>
            </div>
            <div className="contact-right">
                <form className="contact-form" onSubmit={handleFormSubmit}>
                    <div className="contact-form-content">
                        <input required onKeyDown={(e) => handleKeyPress(e, 0)} ref={(ref) => registerInputRef(ref, 0)} className="contact-input nombre" type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        <input required onKeyDown={(e) => handleKeyPress(e, 1)} ref={(ref) => registerInputRef(ref, 1)} className="contact-input apellidos" type="text" placeholder="Apellidos" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
                        <input required onKeyDown={(e) => handleKeyPress(e, 2)} ref={(ref) => registerInputRef(ref, 2)} className="contact-input correo" type="email" placeholder="Correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                    </div>

                    {mensaje && <p className="contact-message">{mensaje}</p>}

                    <p className="contact-text" style={{marginTop: mensaje.length===0 ? "3rem" : "0"}}>
                        Al hacer clic en el botón "Únete", aceptas recibir correos electrónicos sobre eventos, noticias y promociones de <span>VISUALI</span>. Consulta nuestra política de privacidad y cookies para obtener más detalles.
                    </p>

                    <button className="contact-button" type="submit">Únete</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
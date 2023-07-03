import React from 'react'
import { FaLinkedin } from 'react-icons/fa';

const Persona = (props) => {
    const { nombre, foto, puesto, descripcion, url } = props;
    return (
        <div className="persona">
            <div className='foto' style={{ backgroundImage: `url(${foto})` }} />
            <a href={url} target="_blank" rel="noopener noreferrer" className="nombre-linkedin">
                <h3 className='persona-nombre'>{nombre}</h3>
                <FaLinkedin size={22} color="var(--text)" className='linkedin' />
            </a>
            <h4 className='persona-puesto'>{puesto}</h4>
            <div className="persona-desc">
                <p className='persona-estudios'>Ingeniería Informática</p>
                <p className='persona-descripcion'>{descripcion}</p>
            </div>
        </div>
    )
}

export default Persona
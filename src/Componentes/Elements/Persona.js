import React from 'react'

const Persona = (props) => {
    const { nombre, foto, puesto, descripcion, url } = props;
    return (
        <div className="persona">
            <a href={url} target="_blank" rel="noopener noreferrer" className='foto' style={{ backgroundImage: `url(${foto})` }} />
            <h3 className='persona-nombre'>{nombre}</h3>
            <h4 className='persona-puesto'>{puesto}</h4>
            <div className="persona-desc">
                <p className='persona-estudios'>Ingeniería Informática</p>
                <p className='persona-descripcion'>{descripcion}</p>
            </div>
        </div>
    )
}

export default Persona
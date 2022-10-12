import React, { useState } from 'react';

const Clock = () => {
    const [adtosPersona, setDatosPersona] = useState({
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    });

    return(
        <div>
            <h2>
                Hora Actual: {datosPersona.fecha.toLocaleTimeString()} 
            </h2>
            <h3>{datosPersona.nombre} {datosPersona.apellidos}</h3>
            <h1>Edad: {datosPersona.edad}</h1>
        </div>
    )
}

export default Clock;
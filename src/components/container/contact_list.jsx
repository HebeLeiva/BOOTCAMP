import React from 'react';
import { Contacto } from '../../models/contact.class'
import ContactoComponent from '../pure/contacto'

const ContactListComponent = () => {

    const defaultContact = new Contacto('Ejemplo Nombre', 'Ejemplo Apellido', 'nombre@gmail.com', false);

    return (
        <div>
            <div>
                Contacto:         
            </div>
            <ContactoComponent contacto = {defaultContact} />
        </div>
    );
}

export default ContactListComponent;

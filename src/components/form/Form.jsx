import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import Tostadita from './Tostadita';


const Form = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [feedback, setFeedback] = useState("")

    const handleName = (e) => { setName(e.target.value) }
    const handleEmail = (e) => { setEmail(e.target.value) }
    const handleTelefono = (e) => { setTelefono(e.target.value) }

    const enviarDatos = (e) => {
        e.preventDefault()
        if (name === '' || email === '' || telefono === '') {
            alert('Completa el formulario')
            setFeedback('')
        } else {
            console.log({
                Nombre: name,
                Email: email,
                Telefono: telefono
            });
            setFeedback("Muchas gracias, datos enviados")
        }
    }

    if (feedback !== '') {
        return <p>{feedback}</p>
    }

    const validaDatos = (e) => {

        if (['a', 'e', 'i', 'o', 'u'].includes(e.key.toLowerCase())) {
            e.preventDefault();
            
            toast.custom((t) => <Tostadita t={t} />)
        }
    }
    return (
        <>
        <h1>Validacion de formularios</h1>
            <form onSubmit={enviarDatos}>
                <input type="text" placeholder='Nombre' value={name} onChange={handleName} /><br/>
                <input type="email" placeholder='Email' value={email} onChange={handleEmail} /><br/>
                <input type="text" placeholder='Numero Telefonico' value={telefono} onChange={handleTelefono} />
                <button type='submit'>Enviar</button>
            </form>
        <br/>
        <br/>
            <h1>Actividad</h1>
            <h3>Form no permite vocales</h3>
            <form onSubmit={validaDatos}>
                <input type="text" name="vocales" id="vocales" placeholder='No ingrese vocales' onKeyDown={validaDatos} />
            </form>

            <Toaster
        containerStyle={{
          top: 80,
          left: 20,
          bottom: 20,
          right: 20,
        }}
        toastOptions={{
          duration: 1500,
        }}
      />
        </>
    )
}

export default Form
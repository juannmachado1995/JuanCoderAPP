import { serverTimestamp } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CartContext } from '../../context/CartContext'

const CheckOut = () => {
  const { cart, clear, cartTotal } = useContext(CartContext)
  const [orden, setOrden] = useState("")
  const { register, handleSubmit, formState: { errors }, getValues } = useForm()

  const handdleOrder = (data) => {
    let orden = {
      user: {
        nombre: data.nombre,
        correo: data.email
      },
      items: cart,
      total: cartTotal(),
      date: serverTimestamp
    }
    clear();
    setOrden(orden)
  }

  console.log(orden, "ASSSSSS");
  return (
    <>
      {orden ? <div>
        <h1>PEDIDO REALIZADO CON EXITO!!!</h1>
      </div>
        :
        <div>
          <h1>Checkout</h1>
          <form onSubmit={handleSubmit(handdleOrder)}>
            <label htmlFor="">Nombre</label>
            <input className='form-control' type="text" name='nombre' {...register("nombre", { required: true, minLength: 4 })} />
            {errors?.nombre?.type === 'required' && <p>Nombre es requerido</p>}

            <label htmlFor="">Email</label>
            <input className='form-control' type="email" name='email' />

            <label htmlFor="">Confirmar email</label>
            <input className='form-control' type="email" name='emailConfirm' />

            <button className='btn btn-success'>Confirmar compra</button>
          </form>
        </div>
      }
    </>
  )
}

export default CheckOut
import React, { useContext } from 'react'
import {CartContext} from '../../context/CartContext'
import CartView from '../CartView/CartView'

const Cart = () => {

    const { cart } = useContext(CartContext)

    return (
        <>
            {cart.length > 0 ? <CartView/> : <h1>No hay item agregados</h1>}
        </>
    )
}

export default Cart

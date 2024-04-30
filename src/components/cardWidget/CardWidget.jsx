import React, { useContext } from 'react'
import Badge from 'react-bootstrap/Badge'
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from '../../context/CartContext';

const CardWidget = (props) => {
  const {cart,cartQuantity} = useContext(CartContext)
  console.log(cart, "ACCCCCCCCCCCART");
  return (
    <>
    <TiShoppingCart className='cartIcon'/>
    {cartQuantity() > 0 && <Badge className='cartCantidad' bg="danger">{cartQuantity()}</Badge>}
    </>
  )
}

export default CardWidget
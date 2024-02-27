import React from 'react'
import Badge from 'react-bootstrap/Badge'
import { TiShoppingCart } from "react-icons/ti";

const CardWidget = (props) => {
  return (
    <>
    <TiShoppingCart className='cartIcon'/>
    <Badge className='cartCantidad' bg="danger">{props.counter}</Badge>
    </>
  )
}

export default CardWidget
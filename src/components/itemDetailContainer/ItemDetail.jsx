import React from 'react'
import ItemCount from '../itemCount/ItemCount'


const ItemDetail = ({producto}) => {
    
  return (
    <>
    <h2>Detalle de: {producto.nombreProducto} </h2>
    <img/>
    <p></p>
    <ItemCount stock={producto.stock}/>
   
    </>
  )
}

export default ItemDetail
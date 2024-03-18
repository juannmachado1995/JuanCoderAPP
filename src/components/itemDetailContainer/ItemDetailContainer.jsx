import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getOneProduct } from '../../mock/fakeApi'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const {itemId} = useParams()

    const [producto,setProducto] = useState({})

    useEffect(()=>{
        getOneProduct(itemId)
        .then((res)=>{ 
        setProducto(res);
        
    })
        .catch((error)=> console.log(error))
    },[itemId])


  return (
    <div>
        <h1>Detalle de producto:</h1>
        <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer
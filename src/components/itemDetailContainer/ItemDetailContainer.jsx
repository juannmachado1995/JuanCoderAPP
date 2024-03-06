import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getOneProduct } from '../../mock/fakeApi'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [producto,setProducto] = useState({})

    useEffect(()=>{
        getOneProduct('002')
        .then((res)=>{
        console.log("RES" , res) 
        setProducto(res);
        console.log("PRODUCTO ENCONTRADO" , producto)
    })
        .catch((error)=> console.log(error))
    },[])


  return (
    <div>
        <h1>ItemDetailContainer</h1>
        <ItemDetail producto={producto}/>

    </div>
  )
}

export default ItemDetailContainer
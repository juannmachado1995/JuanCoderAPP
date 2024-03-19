import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getOneProduct } from '../../mock/fakeApi'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from '../loader/Loader'

const ItemDetailContainer = () => {

  const [cargando,setCargando] = useState(false)
  const {itemId} = useParams()

    const [producto,setProducto] = useState({})


    useEffect(() => {
      setCargando(true);
      getOneProduct(itemId)
        .then((res) => {
          setProducto(res);
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setCargando(false);
        });
    }, [itemId]);


  return (
    <div>
        {cargando ? <Loader/> : <ItemDetail producto={producto}/>}
    </div>
  )
}

export default ItemDetailContainer
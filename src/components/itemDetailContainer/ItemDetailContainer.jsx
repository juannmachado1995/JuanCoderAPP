import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getOneProduct } from '../../mock/fakeApi'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from '../loader/Loader'
import { collection, doc, getDoc } from 'firebase/firestore'
import { dataBase } from '../../service/firebase'

const ItemDetailContainer = () => {

  const [cargando, setCargando] = useState(false)
  const { itemId } = useParams()
  const [producto, setProducto] = useState({})


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



  // // //FIREBASE
  // useEffect(() => {
  //   setCargando(true)

  //   const collectionProduct = collection(dataBase, "librosJuanReads")
  //   const referenciaDoc = doc(collectionProduct, itemId)

  //   getDoc(referenciaDoc)
  //     .then((res) => {
  
  //       setProducto({id:res.id, ...res.data})
  //     })
  //     .catch((error) => console.log(error))
  //     .finally(() => {
  //       setCargando(false);
  //     });
  // }, [itemId])


  return (
    <div>
      {cargando ? <Loader /> : <ItemDetail producto={producto} />}
    </div>
  )
}

export default ItemDetailContainer
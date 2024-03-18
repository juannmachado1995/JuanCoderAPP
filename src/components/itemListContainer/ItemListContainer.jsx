import React , {useEffect, useState} from 'react'
import { getProducts } from '../../mock/fakeApi';
import ItemList from './ItemList';
import './itemListContainer.css'
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {

  const [loading,setLoading] = useState(true)
  const {categoria} = useParams()
  const [productos,setProductos] = useState([]);

  useEffect(()=>{
    getProducts()
    .then((res)=>{
      if(categoria){
        setProductos(res.filter((producto) => producto.categoria === categoria))
      }
      else {
        setProductos(res)
      }
    })
    .catch((error)=> console.log(error,"ERROR"))
    .finally(() => setLoading(false))
  },[categoria])
 
  if(loading){
    return <h1>Cargando...</h1>
  }

  return (
    <>
  <h1>{categoria}</h1>
    <h1 className='bienvenida-libreria'>{props.greeting}</h1>

    <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer
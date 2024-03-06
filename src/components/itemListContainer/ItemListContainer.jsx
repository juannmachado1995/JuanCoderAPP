import React , {useEffect, useState} from 'react'
import { getProducts } from '../../mock/fakeApi';
import ItemList from './ItemList';
import './itemListContainer.css'

const ItemListContainer = (props) => {

  const [productos,setProductos] = useState([]);

  useEffect(()=>{
    getProducts()
    .then((res)=> setProductos(res))
    .catch((error)=> console.log(error,"ERROR"))
  },[])
 
  return (
    <>
    <h1 className='bienvenida-libreria'>{props.greeting}</h1>
    <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer
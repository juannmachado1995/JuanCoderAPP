import React , {useEffect, useState} from 'react'
import ItemCount  from '../itemCount/itemCount';
import { getProducts } from '../../mock/fakeApi';
import ItemList from './ItemList';

const ItemListContainer = (props) => {

  const [productos,setProductos] = useState([]);

  useEffect(()=>{
    getProducts()
    .then((res)=> setProductos(res))
    .catch((error)=> console.log(error,"ERROR"))
  },[])
 

 

  return (
    <>
    <h1>{props.greeting}</h1>
    <ItemCount stock={11}/>
    <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer
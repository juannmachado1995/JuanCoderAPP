import React , {useEffect, useState} from 'react'
import { getProducts } from '../../mock/fakeApi';
import ItemList from './ItemList';
import ItemCount from '../navbar/itemCount/ItemCount';

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
    <ItemCount/>
    <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer
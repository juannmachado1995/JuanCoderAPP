import React , {useEffect, useState} from 'react'
import { getProducts } from '../../mock/fakeApi';
import ItemList from './ItemList';
import './itemListContainer.css'
import { useParams } from 'react-router-dom';
import Loader from '../loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { dataBase } from '../../service/firebase';

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
  
 


// // //FIREBASE
// useEffect(() => {

//   //Cohectamos con la collectio de BBDD
//   const productos = categoria ? query(collection(dataBase,"librosJuanReads"),where("categoria","==",categoria)) : collection(dataBase,"librosJuanReads")
//   //se Piden los documentos
//   getDocs(productos)
//   .then((res)=>{
//     const listaProductos = res.docs.map((producto)=>{
//       return {
//         id:producto.id,
//         ...producto.data()
//       }
//     })
//     setProductos(listaProductos)
//   })
//   .catch((error)=> console.log(error,"ERROR"))
//   .finally(() => setLoading(false))
// },[categoria])



  if(loading){
    return <Loader/>
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
import React from 'react'

const Promises = () => {

    const getProducts = () => {
        return new Promise ((resolve,reject)=>{
            let error = true
            
            if(error){
                reject ("Esto es un mjs de error")
            }
            else{
                resolve("Esto es una resolucion")
            }
        }
        )
    }

    const productos = [
        {id: "2" , name : "prdocutto" , stock: '10'},
        {id: "2" , name : "prdocutto" , stock: '10'},
        {id: "2" , name : "prdocutto" , stock: '10'},
        {id: "2" , name : "prdocutto" , stock: '10'},
        {id: "2" , name : "prdocutto" , stock: '10'}
    ]

    const getProductsTimeOut = () => {
        return new Promise ((resolve,reject)=>{
            let error = false
            //simulamos que tarda mucho la respuesta
            setTimeout(()=>{
                if(error){
                    reject('Tarda mucho tiempo')
                }
            else{
                resolve(productos)
            }
        },3000)
    })
    }
    
    //getProducts().then((res)=> console.log(res)).catch((error)=>console.log(error))
    //getProductsTimeOut().then((res)=> console.log(res)).catch((error)=>console.log(error))
    

  return (
    <div>promises</div>
  )
}

export default Promises
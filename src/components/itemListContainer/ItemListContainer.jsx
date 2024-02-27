import React from 'react'

const ItemListContainer = (props) => {
    console.log(props);
  return (
    <>
    <h1>{props.greeting}</h1>
    </>
  )
}

export default ItemListContainer
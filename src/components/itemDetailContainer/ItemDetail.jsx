import React, { useState } from 'react'
import ItemCount from '../itemCount/ItemCount'
import { Col, Row, Card, Button } from 'react-bootstrap'; 

const ItemDetail = ({ producto }) => {

  const [compra, setCompra] = useState(false)

  const onAdd = (cantidad) => {
    console.log("Compraste un item ", cantidad);
    setCompra(true)
  }

  return (
    <>
<div className="d-flex justify-content-center">

<Col xs={11} md={11} lg={11} className="mb-4">
<h1>Detalle de producto:</h1>
  <Card>
    <Row>
      <Col xs={12} lg={4}> 
        <Card.Img variant="top" src={producto.urlImagen} />
      </Col>
      <Col xs={12} lg={8}>
        <Card.Body>
          <Card.Title>{producto.nombreProducto}</Card.Title>
          <Card.Text>{producto.descripcion}</Card.Text>
          <p className="text-muted">Autor: {producto.autor} <br /> 
          Categoría: {producto.categoria}</p>
          <Button variant="outline-primary" className="me-2 mb-2">
            ${producto.precio}
          </Button>
          <Button variant="outline-success" className="mb-2">
            Stock: {producto.stock}
          </Button>
          {compra && <p>Producto {producto.nombreProducto} agregado al carrito 😊</p>}
          { !compra && producto.stock < 10 && <p>Apurate a agregar el producto al carrito !!! 🙌</p>}
          {compra ? <button>Ir al carrito</button> : <ItemCount stock={producto.stock} onAdd={onAdd} />}
        </Card.Body>
      </Col>
    </Row>
  </Card>
</Col>
</div>
    </>
  )
}

export default ItemDetail
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const CartView = () => {
    const { cart, clear, cartTotal, removeItem } = useContext(CartContext);

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio Unitario</th>
                        <th>Cantidad</th>
                        <th>Precio Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id}>
                            <td>{item.nombreProducto}</td>
                            <td>{item.precio}</td>
                            <td>{item.quantity}</td>
                            <td>{item.precio * item.quantity}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => removeItem(item.id)}>Eliminar item</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <h1>TOTAL A PAGAR ${cartTotal()}</h1>
            <div>
                <button className='btn btn-danger' onClick={clear}>Vaciar Carrito</button>
                <br/>
                <br/>
                <Link to='/checkout'><button className='btn btn-success'>TERMINAR COMPRA</button></Link>
            </div>
        </>
    );
}

export default CartView;

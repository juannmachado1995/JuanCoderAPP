import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import './ItemCount.css';

const ItemCount = (props) => {

    const onAdd = props.onAdd
    const stock = props.stock

    //const [count, setCount] = useState(1)

    const {count, restar,sumar} = useCounter(stock)

/*
    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

*/

    return (
        <>
            <div className="item-count-caja">
                <div className="botones">
                    <button onClick={restar}>-</button>
                    <span className="item-contador">{count}</span>
                    <button onClick={sumar}>+</button>
                </div>
                <button className="boton-comprar" onClick={() => {onAdd(count)}}>Comprar</button>
            </div>
        </>
    )
}

export default ItemCount
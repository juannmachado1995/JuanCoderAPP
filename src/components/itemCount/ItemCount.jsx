import React, { useState } from 'react'

const ItemCount = (props) => {
    const stock = props.stock
    const [count, setCount] = useState(1)
    const onAdd = () => {
        console.log("compraste un item")
    }

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



    return (
        <>

            <div>
                <button  onClick={restar}>-</button>
                <span>{count}</span>
                <button onClick={sumar}>+</button>
            </div>
            <button onClick={onAdd}>Comprar</button>

        </>
    )
}

export default ItemCount
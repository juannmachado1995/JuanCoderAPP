import { createContext } from "react";
import ItemListContainer from "../components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/itemDetailContainer/ItemDetailContainer";
import Navbarapp from "../components/navbar/Navbarapp"
import { useState } from "react";



export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (producto, cantidad) => {
        if (isIntCart(producto.id)) {
            setCart(cart.map((item) => {
                if (producto.id === item.id) {
                    return { ...item, quantity: item.quantity + cantidad }
                }
                else {
                    return item;
                }
            }))
        }
        else {
            setCart([...cart, { ...producto, quantity: cantidad }])
        }
    }

    const clear = () => {
        setCart([])
    }

    const isIntCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id != id))
    }

    const cartQuantity = () => {
        return cart.reduce((acc, item) => acc += item.quantity, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, item) => (acc += item.precio * item.quantity), 0)
    }

    const itemQuantity = (id) => {
        const itemInCart = cart.find((item) => item.id === id)
        if (itemInCart) {
            return itemInCart.quantity
        } else {
            return 0
        }
    }


    return (
        <CartContext.Provider value={{ cart, addItem, clear, isIntCart, removeItem, cartQuantity, cartTotal, itemQuantity }}>
            {children}
        </CartContext.Provider>
    )

}

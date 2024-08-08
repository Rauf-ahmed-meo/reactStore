import { createContext, useEffect, useState } from "react";


export const GlobalContext = createContext(null)

export default function GlobalState({ children }) {
    const [products, setproducts] = useState([])
    const [CartProducts, setCartProducts] = useState([])

    async function GetData() {
        let res = await fetch("https://fakestoreapi.com/products")
        let data = await res.json()
        if (data) {
            setproducts(data)
        }
    }

    function addToCart(id) {
        if (CartProducts.find(item => item.id === id)) {
            setCartProducts(CartProducts.filter((item) => item.id !== id))
        } else {
            setCartProducts([...CartProducts, products.find(item => item.id === id)])
        }
    }


    useEffect(() => {
        GetData()
    }, [])

    return (
        <GlobalContext.Provider value={{ products, setproducts, CartProducts, setCartProducts, addToCart }}>
            {children}
        </GlobalContext.Provider>

    )

}
import { useState } from "react";
import { cartContext } from "./cartContext";



const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        let newCart;
        let product = cart.find((prod) => prod.id === item.id);
        
        if(product){
            product.quantity += quantity;
            if(product.stock < product.quantity){
                alert('Ya agregaste todo el stock disponible a tu carrito')
                return;
            }
            newCart = [...cart];
        }else {
            product = {
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: quantity,
                description: item.description,
                imageId: item.imageId,
                category: item.categoryId,
                stock: item.stock,                
            };
            newCart = [...cart, product]
        }       
        setCart(newCart);        
    }
    
    const removeItem = (productId) =>{        
        setCart(cart.filter((product)=> product.id !== productId))      
    }

    const isInCart =(id)=>{
        return cart.some((item) => item.id === id)

    }

    const clear = () =>{
        setCart([]);
    }

    return (
        <cartContext.Provider key='contexto'value={{ cart, addItem, clear, removeItem }}>
            {children}
        </cartContext.Provider>
    )
};

export default CartProvider
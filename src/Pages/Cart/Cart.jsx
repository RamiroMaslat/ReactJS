import './Cart.css'
import { useContext, useEffect, useState } from "react"
import { cartContext } from "../../context/cartContext"
import { collection, addDoc, getFirestore, doc, updateDoc } from 'firebase/firestore'

const Cart = () => {
  const { cart, removeItem, clear } = useContext(cartContext);
  const [order, setOrder] = useState({});
  const db = getFirestore();

  useEffect(() => {
    setOrder({
      buyer: {
        name: 'carlos',
        phone: '15 8899 6666',
        email: 'test@test.com.ar'
      },
      items: cart.map((product) => {
        const { title, price, id, quantity } = product
        return { title, price, id, quantity }
      }),
      total: cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    })
  }, [cart]);




  if (cart.length === 0) {
    return (
      <h2 className='emptyCart'>No hay productos en tu carrito</h2>
    )
  }

  const createOrder = () => {
    console.log(cart)    
    const querySnapshot = collection(db, 'orders')
    
    addDoc(querySnapshot, order)
      .then((response) => {
        updateStockProduct();
        alert(`Orden de compra generada con exito. Su numero de orden es ${response.id}`)
      })
      .catch(error => console.log(error))
  }

  const updateStockProduct = () => {
    cart.forEach((product)=>{
      console.log(product)
      const querySnapshot = doc(db, 'items', product.id);

      updateDoc(querySnapshot, {        
        stock: product.stock - product.quantity,        
      })
      .then((response)=>{
        
      })
      .catch((error)=>{console.log(error)})
    })
  }

  return (
    <div>
      <h1 className='cartTitle'>Carrito</h1>
      <ul className='cartContainer'>        
        {cart.map((product) => (
          <li key={product?.id}>
            <h2 className='cartProductTitle' >{product.title}</h2>
            <img className="itemCartImg" src={`/img/${product.imageId}`} alt={`${product.id}`}></img>
            <h4>{product.category}</h4>
            <h4>Cantidad: {product.quantity}</h4>
            <h4>Precio: ${product.price}</h4>
            <button className="eliminarProducto" onClick={() => removeItem(product.id)}>Eliminar producto</button>
          </li>
        ))}
      </ul>

      <div className='finalizarCarrito'>
        <button className="vaciarCarrito" onClick={() => clear()}>
          Vaciar Carrito
        </button>
        <button className="finalizarCompra" onClick={() => createOrder()}>
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}

export default Cart
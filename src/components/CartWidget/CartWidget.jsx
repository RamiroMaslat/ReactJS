import './CartWidget.css'
import ImgCart from '../CartWidget/carrito.jpg'
import { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../context/cartContext'

const CartWidget = () => {
  const { cart } = useContext(cartContext);
  const [total, setTotal] = useState(0)
  useEffect(() => {
    setTotal(
      cart?.reduce((prev, curr) => {
        return prev + curr.quantity;
      }, 0)
    );
  }, [cart]);
  
  return (
    <div className='cartImgContainer'>
      <img className='cartImg' src={ImgCart} alt="" />
      <p className='cartQuantity'>{total}</p>

    </div>
  )
}

export default CartWidget
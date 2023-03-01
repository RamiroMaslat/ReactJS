import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useState, useContext } from 'react';
import { cartContext } from '../../context/cartContext';

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(cartContext);
  const [contador, setContador] = useState(1);
  const stock = product.stock
  return (
    <div>
      <li className='producto'>
        <h2 className='tituloProducto'>{product.title}</h2>
        <img className='imagenProducto' src={`/img/${product.imageId}`} alt={product.title}></img>
        <h3>{product.categoryId}</h3>
        <h3 className='descripcion'>{product.description}</h3>
        <h4>Stock: {product.stock}</h4>
        <h4>Precio: ${product.price}</h4>
        <ItemCount contador={contador} actualizaValor={setContador} stock={stock} />
        <div>
          <button className='agregarCarrito' onClick={()=> addItem(product, contador)}>Agregar al Carrito</button>
        </div>
      </li>

    </div>
  )
}

export default ItemDetail
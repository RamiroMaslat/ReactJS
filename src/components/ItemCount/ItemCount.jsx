import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({contador, actualizaValor, stock}) => {

    

    const onAdd = () => {
        if(stock === contador){
            alert('No puedes agregar mas productos de los que hay disponibles');
            return;
        }
        actualizaValor(contador + 1)
    };

    const restarItem = () => {
        if (contador === 1) {
            return;
        }
        actualizaValor(contador - 1)
    };

    return (
        <div className="counter">
            <div className="controllers">
                <button className='menos' onClick={() => restarItem()}>-</button>
                <div>
                    <span>{contador}</span>
                </div>
                <button className='mas' onClick={() => onAdd()}>+</button>

            </div>            
        </div>
    )
}

export default ItemCount

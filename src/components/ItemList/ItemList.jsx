import Item from "../Item/Item"
import './ItemList.css'
import { Link } from "react-router-dom"



const ItemList = ({productos}) => {
  return (
    <div className="seccionProductos">
        {productos.map((producto)=>(
              <Link className="link" key={producto.id} to={`/item/${producto.id}`}>
                <Item producto={producto} />
              </Link>
                
            ))}
    </div>
  )
}

export default ItemList
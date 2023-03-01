    import './Item.css'
    const Item = ({producto}) => {
      return (
        <li className='producto'>
            <h2 className='productTitle'>{producto.title}</h2>
            <img className='imgItem' src={`/img/${producto.imageId}`} alt={producto.title}></img>
            <h3>{producto.categoryId}</h3>
            <h3 className='descripcion'>{producto.description}</h3>
        </li>
      )
    }
    
    export default Item
import './NavBar.css'
import Links from '../Links/Links'
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='NavBar'>
      <Link to='/cart'>
        <CartWidget /> 
      </Link>               
      <Links />        
    </div>
  )
}

export default NavBar
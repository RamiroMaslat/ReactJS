import './Links.css'
import { NavLink } from 'react-router-dom'
const Links = () => {
    return (
        <div className="linksContainer">
            <li className='links'>
                <NavLink className='links' to='/'>
                    <p>Todo</p>
                </NavLink>

            </li>
            <li className='links'>
                <NavLink className='links' to="/category/hombre">
                    <p>Hombre</p>
                </NavLink>

            </li>
            <li >
                <NavLink className='links' to="/category/mujer">
                    <p>Mujer</p>
                </NavLink>

            </li>


        </div>
    )
}


export default Links

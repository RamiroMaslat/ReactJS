import './Footer.css'
import igLogo from '../Footer/igLogo.png'
import wppLogo from './wppLogo.png'
import fbLogo from './fbLogo.png'
const Footer = () => {
    return (
        <div className="footer">
            <a href="https://web.whatsapp.com/"> <img className='footerLogoSocialMedia' src={wppLogo} /></a>
            <a href="https://www.facebook.com/"> <img className='footerLogoSocialMedia' src={fbLogo} /></a>
            <a href="https://www.instagram.com/"> <img className='footerLogoSocialMedia' src={igLogo} /></a>
            <p><strong>Dirección:</strong> Avenida Congreso y Avenida Cabildo // <strong> Teléfono:</strong> 15 8899 6666</p>
            <p><strong>Todos los derechos reservados</strong></p>
        </div>
    )
}

export default Footer
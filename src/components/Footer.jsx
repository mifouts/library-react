import React from 'react'
import Logo from '../assets/Library.svg';

export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row row__column">
                <Link to="/">
                    <figure className='footer__logo'>
                        <img src={Logo} className='footer__logo--img' alt="" />
                    </figure>
                </a>
                <div className="footer__list">
                    <Link to="/" className='footer__link'>
                      Home  
                    </a>
                    <span className='footer__link no__cursor'>About</span>
                    <Link to="/books" className='footer__link'>Books</a>
                    <Link to="/cart" className='footer__link'>Cart</a>
                </div>
                <div className="footer__copyright">Copyright &copy; 2022 Library</div>
            </div>
        </div>
    </footer>
  )
}

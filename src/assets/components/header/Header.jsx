import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
// import icons
import {BsFillCartFill} from 'react-icons/bs';

function Header() {
  const [isActive, setIsActive] = useState(false);
  // event listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 140 ? setIsActive(true) : setIsActive(false);
    })
  })
  return (
    <>
      <header className={`header`}>
        <div className="container">
          <div className="df jcsb aic">
            <Link to='/'><img src="http://placehold.it/250x100" /></Link>
            <Link className="info" to='/'>
              <img className='block' src="http://placehold.it/90x60" /> 
              <span>Доставляем по всему Казахстану</span>
            </Link>
            <div className="contacts">
              <a className='contacts__phone block' href="tel:87088309633">87088309633</a>
              <a className='contacts__phone block' href="tel:87088309636">87088309636</a>
              <a className='contacts__email block' href="mailto:i.html06@gmail.com">i.html06@gmail.com</a>
            </div>
            <Link className='cart' to='/'>
              <div className="cart__top df aic">
                <BsFillCartFill className='cart__img' />
                <span>0,00 kzt</span>
              </div>
              <button className="cart__btn">оформить</button>
            </Link>
          </div>
        </div>
      </header>
      <header className={`${isActive ? 'fixed-header' : null} 'header__bottom'`}>
        <div className="container">
          <div className="df jcsb aic">
            <nav className="header__bottom-nav">
              <ul className="header__bottom-list df aic">
                <li className="header__list-item"><a href="#" className="header__list-link">каталог</a></li>
                <li className="header__list-item"><a href="#" className="header__list-link">услуги</a></li>
                <li className="header__list-item"><a href="#" className="header__list-link">доставка</a></li>
                <li className="header__list-item"><a href="#" className="header__list-link">оплата</a></li>
                <li className="header__list-item"><a href="#" className="header__list-link">производство</a></li>
                <li className="header__list-item"><a href="#" className="header__list-link">сертификаты</a></li>
                <li className="header__list-item"><a href="#" className="header__list-link">гарантии</a></li>
                <li className="header__list-item"><a href="#" className="header__list-link">контакты</a></li>
              </ul>
            </nav>
            <div className="header__bottom-right">
              <input className='header__bottom-input' type="text" placeholder='найти товары' />
              <button type='submit' className='header__bottom-button'>поиск</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
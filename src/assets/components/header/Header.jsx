import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
// import cart context
import { CartContext } from '../../contexts/CartContext';
// import icons
import {BsFillCartFill} from 'react-icons/bs';

function Header() {
  const {total} = useContext(CartContext);

  const [isScrolled, setisScrolled] = useState(false);

  // event listener to active menu
  useEffect(() => {
    const burger = document.body.querySelector('.header__burger');
    const list = document.body.querySelector('.header__bottom-list');
    burger.addEventListener('click', (e) => {
      burger.classList.toggle('header__burger--active');
      list.classList.toggle('header__bottom-list--active')
    })
  })
  
  // event listener to scrollerd
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (screen.width > 900) {
        window.scrollY > 140 ? setisScrolled(true) : setisScrolled(false);
      } else {
        window.scrollY > 240 ? setisScrolled(true) : setisScrolled(false);
      }
    })
  })
  return (
    <>
      <header className={`header`}>
        <div className="container">
          <div className="header__wrapper">
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
            <Link className='header__cart' to='/cart'>
              <div className="cart__top df aic">
                <BsFillCartFill className='cart__img' />
                <span>{total.toFixed(2)} kzt</span>
              </div>
              <button className="cart__btn">оформить</button>
            </Link>
          </div>
        </div>
      </header>
      <header className={`${isScrolled ? 'fixed-header' : null} 'header__bottom'`}>
        <div className="container">
          <div className="header__bottom-wrapper df jcsb aic">
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
              <div className="header__burger">
                <span className="header__burger-span header__burger-span--1"></span>
                <span className="header__burger-span header__burger-span--2"></span>
                <span className="header__burger-span header__burger-span--3"></span>
              </div>
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
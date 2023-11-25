import { useEffect, useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
// import cart context
import { CartContext } from '../../contexts/CartContext';
import { ProductContext } from '../../contexts/ProductContext';
// import icons
import {BsFillCartFill} from 'react-icons/bs';
import zIndex from '@mui/material/styles/zIndex';

function Header() {
  // get total price for cart in header
  const {total} = useContext(CartContext);
  // get products from product context for filteing products
  const {products} = useContext(ProductContext);

  // const [isScrolled, setisScrolled] = useState(false);

  
  // // event listener to scrollerd
  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if (screen.width > 900) {
  //       window.scrollY > 140 ? setisScrolled(true) : setisScrolled(false);
  //     } else {
  //       window.scrollY > 240 ? setisScrolled(true) : setisScrolled(false);
  //     }
  //   })
  // })

  // event listener to active menu
  useEffect(() => {
    const burger = document.body.querySelector('.header__burger');
    const list = document.body.querySelector('.header__bottom-list');
    burger.addEventListener('click', (e) => {
      burger.classList.toggle('header__burger--active');
      list.classList.toggle('header__bottom-list--active');
      document.body.classList.toggle('overflow-hidden');
    })
  })

  let filteredProducts;
  const handleSearch = () => {
    const input = document.body.querySelector('.header__bottom-input');
    filteredProducts = products.filter(product =>
      product.title.toLowerCase().includes(input.value)
    );


    console.log(filteredProducts)
  }

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
      {/* `${isScrolled ? 'fixed-header' : null} */}
      <header className={'header__bottom'}>
        <div className="container">
          <div className="header__bottom-wrapper df jcsb aic">
            <nav className="header__bottom-nav">
              <ul className="header__bottom-list df aic">
                <li className="header__list-item">
                  <NavLink 
                    to='/' 
                    className={({ isActive }) =>
                      isActive ? "header__list-link header__list-link--active" : "header__list-link"
                    }>
                      главная
                   </NavLink></li>
                <li className="header__list-item">
                  <NavLink 
                    to='/about' 
                    className={({ isActive }) =>
                      isActive ? "header__list-link header__list-link--active" : "header__list-link"
                    }>
                      о компании
                   </NavLink></li>
                <li className="header__list-item">
                  <NavLink to='/catalog' className={({ isActive }) =>
                      isActive ? "header__list-link header__list-link--active" : "header__list-link"
                    }>каталог</NavLink></li>
                <li className="header__list-item"><NavLink to='/services' className={({ isActive }) =>
                      isActive ? "header__list-link header__list-link--active" : "header__list-link"
                    }>услуги</NavLink></li>
                <li className="header__list-item"><NavLink to='/how-to-buy' className={({ isActive }) =>
                      isActive ? "header__list-link header__list-link--active" : "header__list-link"
                    }>как купить</NavLink></li>
                <li className="header__list-item"><NavLink to='/delivery' className={({ isActive }) =>
                      isActive ? "header__list-link header__list-link--active" : "header__list-link"
                    }>доставка</NavLink></li>
                <li className="header__list-item"><NavLink to='/contacts' className={({ isActive }) =>
                      isActive ? "header__list-link header__list-link--active" : "header__list-link"
                    }>контакты</NavLink></li>
              </ul>
              <div className="header__burger">
                <span className="header__burger-span header__burger-span--1"></span>
                <span className="header__burger-span header__burger-span--2"></span>
                <span className="header__burger-span header__burger-span--3"></span>
              </div>
            </nav>
            <div className="header__bottom-right">
              <input className='header__bottom-input' type="text" placeholder='найти товары' />
              <Link onClick={() => handleSearch()} to='/' className='header__bottom-button'>поиск</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
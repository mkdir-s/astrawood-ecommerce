import { useEffect } from 'react';
import './index.scss';
import {Link} from 'react-router-dom';
// import down arrow from react icons
import {BsArrowDown} from 'react-icons/bs';

function Aside() {

  useEffect(() => {
    const elems = document.querySelectorAll('.aside__list-link');
    elems.forEach(element => {
      element.addEventListener('click', (event) => {
        if (element.nextElementSibling) {
          event.preventDefault();
          element.nextElementSibling.classList.toggle('aside__sublist--opened');
        }
      })
    }) 
  })
  

  return (
    <aside className="aside">
      <h3 className="aside__title">Каталог товаров</h3>
      <div className="aside__wrapper">
        <ul className="aside__list">
          <li className="aside__list-item">
            <Link className='aside__list-link' to='/'>Одноразовые пломбы</Link>
          </li>
          <li className="aside__list-item df aic">
            <a className='aside__list-link' href="#">Пломбы для пломбиратора</a>
            <ul className="aside__sublist">
              <Link className='aside__sublist-link' to='/'>Подпункт</Link>
              <Link className='aside__sublist-link' to='/'>Подпункт</Link>
              <Link className='aside__sublist-link' to='/'>Подпункт</Link>
            </ul>
            <BsArrowDown className="aside__list-link--cur"></BsArrowDown> 
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
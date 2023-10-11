import { useEffect } from 'react';
import './index.scss';
import {Link} from 'react-router-dom';

function Aside() {

  useEffect(() => {
    const elems = document.querySelectorAll('.aside__list-link');
    elems.forEach(element => {
      element.addEventListener('click', () => {
        if (element.nextElementSibling) {
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
          <li className="aside__list-item">
            <Link className='aside__list-link' to='/'>Пломбы для пломбиратора</Link> 
            <ul className="aside__sublist">
              <Link className='aside__sublist-link' to='/'>Подпункт</Link>
              <Link className='aside__sublist-link' to='/'>Подпункт</Link>
              <Link className='aside__sublist-link' to='/'>Подпункт</Link>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
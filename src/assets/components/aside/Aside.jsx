import { useEffect } from 'react';
import './index.scss';
import {Link} from 'react-router-dom';
// import down arrow from react icons

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

  useEffect(() => {
    const asideTitle = document.querySelector('.aside__title');

    asideTitle.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('.aside__list').classList.toggle('.aside__list--opened');
    })
  })

  return (
    <aside className="aside">
      <h3 className="aside__title">Каталог товаров <img className='aside__title-img' src="../../../public/angleArrow-icon.png" alt="" /></h3>
      <div className="aside__wrapper">
        <ul className="aside__list">
          <li className="aside__list-item">
            <Link className='aside__list-link' to='/'>Одноразовые пломбы</Link>
          </li>
          <li className="aside__list-item df aic">
            <a className='aside__list-link aside__list-sublink' href="#">Пломбы для пломбиратора</a>
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
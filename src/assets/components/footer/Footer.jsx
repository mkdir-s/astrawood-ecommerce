import './index.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer-nav">
          <ul className="footer-nav__list">
            <li className="footer-nav__list-item"><a className='footer-nav__list-link' href="#">Главная </a></li>
            <li className="footer-nav__list-item"><a className='footer-nav__list-link' href="#">Каталог</a></li>
            <li className="footer-nav__list-item"><a className='footer-nav__list-link' href="#">Услуги</a></li>
            <li className="footer-nav__list-item"><a className='footer-nav__list-link' href="#">Оплата и доставка</a></li>
            <li className="footer-nav__list-item"><a className='footer-nav__list-link' href="#">Новости</a></li>
            <li className="footer-nav__list-item"><a className='footer-nav__list-link' href="#">Производство</a></li>
            <li className="footer-nav__list-item"><a className='footer-nav__list-link' href="#">О нас</a></li>
            <li className="footer-nav__list-item"><a className='footer-nav__list-link' href="#">Дилерам</a></li>
            <li className="footer-nav__list-item"><a className='footer-nav__list-link' href="#">Контакты</a></li>
          </ul>
        </nav>
        <div className="footer-bottom df jcsb aic">
          <div className="footer-bottom__left">
            <p className="footer-bottom__left-descr">Обращаем ваше внимание на то, что данный Интернет-сайт носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации.</p>
          </div>
          <div className="footer-bottom__right">
            <div className="contacts footer-bottom__right-contacts">
              <a className='contacts__phone block' href="tel:87088309633">87088309633</a>
              <a className='contacts__phone block' href="tel:87088309636">87088309636</a>
              <a className='contacts__email block' href="mailto:i.html06@gmail.com">i.html06@gmail.com</a>
            </div>
            <p className="footer-bottom__copy">Copyright (С) Penal-Plomba 2023. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
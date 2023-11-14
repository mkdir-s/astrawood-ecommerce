import React from 'react';
// import styles
import './index.scss';

function Services() {
  return (
    <section className="services">
      <h1 className="services__title">Услуги</h1>
      <div className="services__items">
        <div className="services__item">
          <div className="services__item-wrapper df jcsb aic">
            <img src="http://placehold.it/250x100" alt="item" />
            <div className="services__item-info">
              <h4 className="services__info-title">1. Изготовление пеналов для ключей различной длины и диаметра.</h4>
              <p className="services__info-descr">Вы можете заказать алюминиевые пеналы, со штоком и без, цилиндрической формы. Хранение ключей в пеналах – залог надежного контроля доступа в различные помещения вашей компании. Для опломбирования используют печать с гравировкой или пломбы номерные пластмассовые.</p>
            </div>
          </div>
        </div>
        <div className="services__item">
          <div className="services__item-wrapper df jcsb aic">
            <img src="http://placehold.it/250x100" alt="item" />
            <div className="services__item-info">
              <h4 className="services__info-title">2. Изготовление опечатывающих устройств с различной длиной штока и флажка.</h4>
              <p className="services__info-descr">Вы можете заказать алюминиевые пеналы, со штоком и без, цилиндрической формы. Хранение ключей в пеналах – залог надежного контроля доступа в различные помещения вашей компании. Для опломбирования используют печать с гравировкой или пломбы номерные пластмассовые.</p>
            </div>
          </div>
        </div>
        <div className="services__item">
          <div className="services__item-wrapper df jcsb aic">
            <img src="http://placehold.it/250x100" alt="item" />
            <div className="services__item-info">
              <h4 className="services__info-title">3. Нанесение гравировки на пломбираторы для пломб и пломбиры (металлические печати).</h4>
              <p className="services__info-descr">Вы можете заказать алюминиевые пеналы, со штоком и без, цилиндрической формы. Хранение ключей в пеналах – залог надежного контроля доступа в различные помещения вашей компании. Для опломбирования используют печать с гравировкой или пломбы номерные пластмассовые.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
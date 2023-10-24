import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
// import cart context
import { CartContext } from '../../contexts/CartContext';
// import close icon from react-icons
import {BsXLg} from 'react-icons/bs';

function CartItem({id, title, price, image, amount}) {

  const {increaseAmount, decreaseAmount, total, removeFromCart} = useContext(CartContext);


  return (
    <div className="cart__item">
      <div className="df jcsb aic">
        <Link to={`/product/${id}`} className="cart__item-left cart__left df aic">
          <img src={image} alt={title} className="cart__left-img" />
          <h3 className="cart__left-title">{title}</h3>
        </Link>
        <div className="cart__amount">
          <span>{amount}</span>
          <div className=".cart__amount-buttons">
            <button className='cart__amount-button cart__amount-button--plus' onClick={() => increaseAmount(id)}>+</button>
            <button className='cart__amount-button cart__amount-button--minus' onClick={() => decreaseAmount(id)}>-</button>
          </div>
        </div>
        <div className="cart__price">
          <span className='cart__price-top'>{price}₸ за ед.</span>
          <span className='cart__price-bottom'>{(price * amount).toFixed(2)}₸ итого</span>
        </div>
        <div className="cart__close">
          <BsXLg onClick={() => removeFromCart(id)} className="cart__close-icon"></BsXLg>
        </div>
      </div>
    </div>
  )
}

export default CartItem
import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
// import cart context
import {CartContext} from '../../contexts/CartContext';
// import cart item component
import CartItem from '../../components/cartItem/CartItem';

function Cart() {
  const {cart, total, clearCart} = useContext(CartContext);
  console.log(cart);

  return (
    <>
      {/* if cart is empty */}
      {cart.length == 0 ?
        <div className='cart__info'>
          <span>Ваша корзина пуста</span>
          <Link className='cart__info-button' to='/'>Посмотреть товары</Link>
        </div>
       : 
        <div className="cart">
            {cart.map(item => (
              <CartItem key={item.id} title={item.title} price={item.price} amount={item.amount} image={item.image} id={item.id}></CartItem>
            ))}
            <div className="cart__conc df jcsb aic">
              <p className="cart__conc-total">Итоговая цена: {total.toFixed(2)} ₸</p>
              <button onClick={() => clearCart()} className="cart__conc-button">Удалить все товары</button>
            </div>
        </div>
      }
    </>
  )
}

export default Cart
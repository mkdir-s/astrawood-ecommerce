import { useContext, useState } from 'react';
import './index.scss';
import {Link} from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
// import cart context
import { CartContext } from '../../contexts/CartContext';

function ProductItem({product}) {
  const { addToCart, isAdded } = useContext(CartContext);
  const {id, image, title, price} = product;

  return (
    <div className="item">
      {/* item content */}
      <Link to={`/product/${id}`}><img className='item__img' src={image} alt="категория" /></Link>
      <div className="item__bottom">
        <Link to={`/product/${id}`} className="item__title">{title}</Link>
        <div className="item__bottom-price">{price} ₸</div>
      </div>
      {/* item side buttons (add, view) */}
      <div className="item__side">
        <button onClick={() => addToCart(product, product.id)} className='item__side-plus'><BsPlus /></button>
        <Link to={`/product/${id}`} className='item__side-view'><BsEyeFill /></Link>
      </div>
      
    </div>
  );
}

export default ProductItem;
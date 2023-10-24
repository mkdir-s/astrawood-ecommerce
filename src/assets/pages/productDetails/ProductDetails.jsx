import './index.scss';
import React, {useContext} from 'react';
// import useParams
import {useParams} from 'react-router-dom';
// import cart context
import {CartContext} from '../../contexts/CartContext';
// import product context
import { ProductContext } from '../../contexts/ProductContext';
// import loading icon, snackbar and alert from material ui
import { CircularProgress } from '@mui/material';
import {Alert} from '@mui/material';
import {Snackbar} from '@mui/material';

function ProductDetails() {
  // get the product id from the url
  const {id} = useParams();
  const {products} = useContext(ProductContext);
  const {addToCart, isAdded} = useContext(CartContext);


  // get the single product based on the id
  const product = products.find(item => {
    return item.id === parseInt(id);
  })

  // if product is not found
  if (!product) {
    return <section className='loading--section'>
      <span>Загрузка товара...</span> 
      <CircularProgress className='loading--bar' />
    </section>
  }

  // desctructure product 
  const {title, price, description, image} = product;
  return (
    <section className="product">
      <div className="df aic">
        <img className='product__img' src={image} alt={title} />
        <div className="product__info">
          <h3 className="product__info-title">{title}</h3>
          <p className="product__info-descr">{description}</p>
          <p className="product__info-price">{price} ₸</p>
          <button onClick={() => addToCart(product, product.id)} className="product__info-button">Добавить в корзину</button>
        </div>
      </div>
      {isAdded ? 
        <Snackbar open={isAdded}>
        <Alert severity="success" sx={{ width: '100%' }}>
          Успешно добавлено в корзину!
        </Alert>
        </Snackbar> 
        : null}  
    </section>
  )
}

export default ProductDetails
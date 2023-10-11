import React, {useState, useEffect, createContext} from 'react';

export const CartContext = createContext();

function CartProvider({ children }) {
  // cart state
  const [cart, setCart] = useState([]);

  // item amount state
  const [itemAmount, setItemAmount] = useState(0);

  // total price state
  const [total, setTotal] = useState(0);

  // add to cart
  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1};
    // check if the item is already in the cart
    const cartItem = cart.find(item => {
      return item.id === id;
    })
    // if cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map(item => {
        if (item.id === id) {
          return {...item, amount: cartItem.amount + 1};
        } else {
          return item;
        }
      })
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  }

  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id;
    })
    setCart(newCart)
  }

  // clear cart
  const clearCart = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, itemAmount, total}}>{children}</CartContext.Provider>
  )
}

export default CartProvider;
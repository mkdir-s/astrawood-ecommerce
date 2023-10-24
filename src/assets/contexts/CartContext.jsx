import React, {useState, useEffect, createContext} from 'react';

export const CartContext = createContext();

function CartProvider({ children }) {
  // var for flashing notification about saving item in cart
  const [isAdded, setIsAdded] = useState(false);

  // cart state
  const [cart, setCart] = useState([]);

  // item amount state
  const [itemAmount, setItemAmount] = useState(0);

  // total price state
  const [total, setTotal] = useState(0);

  // update price amount (total)
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  })

  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart])

  // flashing notification about saving item in cart
  const onSaveToCart = () => {
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  }

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
    onSaveToCart();
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

  // increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find(item => item.id === id);
    addToCart(cartItem, id);
  }
  
  // decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find(item => item.id === id);
    if (cartItem) {
      const newCart = cart.map(item => {
        if (item.id === id) {
          return{...item, amount: cartItem.amount - 1};
        } else {
          return item;
        }
      })
      setCart(newCart);
    } 

      if (cartItem.amount < 2) {
        removeFromCart(id);
      }
  }

  return (
    <CartContext.Provider value={{cart, addToCart, isAdded, removeFromCart, clearCart, itemAmount, total, increaseAmount, decreaseAmount}}>{children}</CartContext.Provider>
  )
}

export default CartProvider;
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// product provider
import ProductProvider from './assets/contexts/ProductContext.jsx';
import CartProvider from './assets/contexts/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </ProductProvider>
  </CartProvider>
)

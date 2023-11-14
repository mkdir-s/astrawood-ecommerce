import React from 'react';
// import react router dom
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import pages
import Home from './assets/pages/home/Home';
import ProductDetails from './assets/pages/productDetails/ProductDetails';
import Cart from './assets/pages/cart/Cart';
import About from './assets/pages/about/About';
import Services from './assets/pages/services/Services';
import Delivery from './assets/pages/delivery/Delivery';
import Catalog from './assets/pages/catalog/Catalog';
import HowToBuy from './assets/pages/howToBuy/HowToBuy';
import Contacts from './assets/pages/contacts/Contacts';
//import components
import Header from './assets/components/header/Header';
import Aside from './assets/components/aside/Aside';
import Footer from './assets/components/footer/Footer';
// import main styles
import './reset.scss';
import './app.scss';



const App = () => {
  return (
    <>
      <Router basename={import.meta.env.BASE_URL}>
        <Header />
        <div className="container main__container">
          <Aside />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/product/:id' element={<ProductDetails />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/delivery' element={<Delivery />}></Route>
            <Route path='/catalog' element={<Catalog />}></Route>
            <Route path='/how-to-buy' element={<HowToBuy />}></Route>
            <Route path='/contacts' element={<Contacts />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App;

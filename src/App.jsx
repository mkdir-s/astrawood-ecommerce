import React from 'react';
// import react router dom
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import pages
import Home from './assets/pages/home/Home';
//import components
import Header from './assets/components/header/Header';
import Aside from './assets/components/aside/Aside';
import Footer from './assets/components/footer/Footer';
import ProductDetails from './assets/pages/productDetails/ProductDetails';
// import main styles
import './reset.scss';
import './app.scss';


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <div className="container df">
          <Aside />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/product/:id' element={<ProductDetails />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App;

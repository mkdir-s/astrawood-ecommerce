import { useContext } from 'react';
// import product context
import { ProductContext } from '../../contexts/ProductContext';
import { CartContext } from '../../contexts/CartContext';
// import components
import Header from '../../components/header/Header';
import ProductItem from '../../components/productItem/ProductItem';
// import styles
import './index.scss';
// import skeleton, alert and snackbar from Material UI
import { Skeleton } from '@mui/material';
import {Alert} from '@mui/material';
import {Snackbar} from '@mui/material';

function Home() {
  // get products from product context
  const { products } = useContext(ProductContext);
  // get isAded for notification about saving item in cart
  const { isAdded } = useContext(CartContext);


  // if there are products - show them. else show 6 skeletons
  let shownProducts = [];
  if (products.length > 0) {
    shownProducts.push(products.map(product => {
      return <ProductItem product={product} key={product.id} />
    }))
  } else {
    for (let i=0; i < 6; i++) {
      shownProducts.push(<Skeleton variant="rounded" width={280} height={300} key={i} />)
    }
  }


  return (
      <main className="main">
        <h1 className="main__title">Устройства опечатывания и пломбирования</h1>
        <p className="main__descr">Вот уже более пятнадцати лет «Penal-Plomba.ru» - является крупнейшим поставщиком устройств для опечатывания и опломбирования автотранспорта, грузов, помещений, оборудования и т.д.. За годы работы нас оценили тысячи коммерческих и некоммерческих организаций не только на территории России, но и за её пределами. Принципы и позиции Penal-Plomba.ru нацелены на развитие прочных и долговременных партнерских отношений с каждым клиентом.</p>
        <div className="main-items">
          {/* show every product of products/skeletons */}
          {shownProducts.map(product => {
            return product;
          })}
        </div>
        {isAdded ? 
        <Snackbar open={isAdded}>
        <Alert severity="success" sx={{ width: '100%' }}>
          Успешно добавлено в корзину!
        </Alert>
        </Snackbar> 
        : null}  
      </main>
    );
}

export default Home;
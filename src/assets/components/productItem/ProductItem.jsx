import './index.scss';
import {Link} from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';

function ProductItem({product}) {
  const {id, image, title} = product;
  return (
    <div className="item">
      {/* item content */}
      <Link to='/'><img className='item__img' src={image} alt="категория" /></Link>
      <Link to='/' className="item__title">{title}</Link>
      {/* item side buttons (add, view) */}
      <div className="item__side">
        <button className='item__side-plus'><BsPlus /></button>
        <Link to='/' className='item__side-view'><BsEyeFill /></Link>
      </div>
    </div>
  );
}

export default ProductItem;
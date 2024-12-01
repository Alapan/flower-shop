import { NavLink } from 'react-router-dom';
import OrderTable from '../components/OrderTable';
import './styles/Cart.css';

const Cart = () => {
  return (
    <>
      <h2>Items in your cart</h2>
      <OrderTable />
      <div className='checkout-container-cls'>
        <NavLink to='/myaccount' className='checkout'>
          Proceed to checkout
        </NavLink>
      </div>

    </>
  );
};

export default Cart;

import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import OrderTable from '../../components/OrderTable';
import { CartContext } from '../../layouts/RootLayout';
import { AuthContext } from '../../auth/AuthWrapper';
import { getTotalPrice } from '../../utils';

const CurrentOrder = () => {
  const { cartProducts, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const [ savedOrder, setSavedOrder ] = useState(null);

  const createOrder = () => {
    fetch('http://localhost:8000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: user.name,
        products: cartProducts,
        totalPrice: getTotalPrice(cartProducts),
        orderDate: new Date().toISOString()
      })
    }).then((response) => response.json())
    .then((order) => {
      setSavedOrder(order);
      clearCart();
    });
  };

  return (
    <>
      {
        cartProducts.length ? (
          <>
            <h2>Your current order</h2>
            <OrderTable />
            <button onClick={createOrder}>Complete Order</button>
          </>
        ) : <p>Your cart is currently empty</p>
      }
      {
        savedOrder ? (
          <>
            <p>
              Order created successfully!
              <NavLink to={`/myaccount/${savedOrder.id}`}>View your order details here</NavLink>
            </p>
          </>
        ) : null
      }
    </>
  );
};

export default CurrentOrder;

import { Fragment } from 'react';
import { useLoaderData } from 'react-router-dom';

const AllOrders = () => {
  const orders = useLoaderData();
  return (
    <>
      <h2>Your orders history</h2>
      {orders.map((order) => (
        <div key={order.id}>
          <h3>Order ID: {order.id}</h3>
          <p>Order placed: {order.orderDate}</p>
          <p>Products</p>
          <div>
            {order.products.map((product) => (
              <Fragment key={product.id}>
                <div>{product.name} (* {product.selectedQuantity}) - {product.totalPriceForItem}</div>
              </Fragment>
            ))}
          </div>
          <p>Total Price - {order.totalPrice}</p>
        </div>
      ))}
    </>
  );
};

export default AllOrders;

export const ordersLoader = async () => {
  const res = await fetch('http://localhost:8000/orders');
  const orders = await res.json();
  return orders.sort((o1, o2) => new Date(o2.orderDate) - new Date(o1.orderDate))
};

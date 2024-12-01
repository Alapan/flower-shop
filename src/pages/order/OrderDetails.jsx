import { Fragment } from 'react';
import { useLoaderData } from 'react-router-dom';

const OrderDetails = () => {
  const order = useLoaderData();

  return(
    <>
      <h2>Your order</h2>
      <p><b>Order Id:</b> {order.id}</p>
      {order.products.map((product) => (
        <Fragment key={product.id}>
          <div>
            <b>Name: </b>
            <span>{product.name}</span>
          </div>
          <div>
            <b>Description: </b>
            <span>{product.description}</span>
          </div>
          <div>
            <b>Quantity: </b>
            <span>{product.selectedQuantity}</span>
          </div>
          <div>
            <b>Price: </b>
            <span>{product.totalPriceForItem}</span>
          </div>
        </Fragment>
      ))}
      <div>
        <b>Total Price: </b>
        <span>{order.totalPrice}</span>
      </div>
    </>
  );
};

export default OrderDetails;

export const orderDataLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:8000/orders/${id}`);
  return res.json();
};

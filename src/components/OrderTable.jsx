import { useContext } from 'react';
import { CartContext } from '../layouts/RootLayout';
import { getTotalPrice } from '../utils';

const OrderTable = () => {
  const { cartProducts } = useContext(CartContext);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.selectedQuantity}</td>
              <td>{product.totalPriceForItem}</td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td></td>
            <td>{getTotalPrice(cartProducts)}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
};

export default OrderTable;
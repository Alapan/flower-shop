import { Outlet } from 'react-router-dom';

const ShopLayout = () => {
  return (
    <>
      <h2>Available flowers</h2>
      <Outlet />
    </>
  );
};

export default ShopLayout;

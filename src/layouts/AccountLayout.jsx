import { NavLink, Outlet } from 'react-router-dom';

const AccountLayout = () => {
  return (
    <>
      <nav>
        <NavLink to='/myaccount' className='nav-link-item'>Current Order</NavLink>
        <NavLink to='/myaccount/all-orders' className='nav-link-item'>Order History</NavLink>
        <NavLink to='/myaccount/profile' className='nav-link-item'>Profile</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default AccountLayout;

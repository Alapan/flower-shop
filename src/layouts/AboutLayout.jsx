import { NavLink, Outlet } from "react-router-dom";

const AboutLayout = () => {
  return (
    <>
      <p>Our flower shop is based in Dundee, Scotland and was established in 2023. You can buy our products in-store or have them delivered to your home.</p>
      <nav>
        <NavLink to='delivery-information' className='nav-link-item'>Delivery information</NavLink>
        <NavLink to='contact-us' className='nav-link-item'>Contact us</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default AboutLayout;

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RootLayout from './layouts/RootLayout';
import NotFound from './pages/NotFound';
import ShopLayout from './layouts/ShopLayout';
import Flowers, { flowersLoader } from './pages/Flowers';
import FlowerDetails, { flowerDetailsLoader } from './pages/FlowerDetails';
import AboutLayout from './layouts/AboutLayout';
import DeliveryInformation from './pages/about/DeliveryInformation';
import ContactUs from './pages/about/ContactUs';
import AuthWrapper from './auth/AuthWrapper';
import Login from './pages/Login';
import ProtectedRoute from './auth/ProtectedRoute';
import CartLayout from './layouts/CartLayout';
import Cart from './pages/Cart';
import CurrentOrder from './pages/order/CurrentOrder';
import OrderDetails, { orderDataLoader } from './pages/order/OrderDetails';
import AllOrders, { ordersLoader } from './pages/order/AllOrders';
import UserProfile from './pages/UserProfile';
import AccountLayout from './layouts/AccountLayout';
import SignUp from './pages/SignUp';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<ShopLayout />}>
          <Route
            index
            element={<Flowers />}
            loader={flowersLoader}
          />
          <Route
            path=':id'
            element={<FlowerDetails />}
            loader={flowerDetailsLoader}
          />
        </Route>
        <Route path='about' element={<AboutLayout />}>
          <Route path='delivery-information' element={<DeliveryInformation />}/>
          <Route path='contact-us' element={<ContactUs />} />
        </Route>
        <Route path='login' element={<Login />}/>
        <Route path='signup' element={<SignUp />} />
        <Route path='myaccount' element={
          <ProtectedRoute>
            <AccountLayout />
          </ProtectedRoute>}
        >
          <Route index element={<CurrentOrder />} />
          <Route
            path=':id'
            element={<OrderDetails />}
            loader={orderDataLoader}
          />
          <Route
            path='all-orders'
            element={<AllOrders />}
            loader={ordersLoader}
          />
          <Route path='profile' element={<UserProfile />} />
        </Route>
        <Route path='cart' element={<CartLayout />}>
          <Route
            index
            element={<Cart />}
          />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return (
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
  )
}

export default App;

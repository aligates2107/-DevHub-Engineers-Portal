import Header from './components/Common/Header/Header'
import Footer from './components/Common/Footer/Footer'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header />
      {/* This is where the child routes will render */}
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;

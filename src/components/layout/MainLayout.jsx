import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../common/Navbar';
import CustomCursor from '../common/CustomCursor';
import Footer from '../common/Footer';

const MainLayout = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default MainLayout;
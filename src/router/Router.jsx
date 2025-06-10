import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

// Lazy loaded pages
const Home = lazy(() => import('../pages/Home'));
const NewTravelPlan = lazy(() => import('../pages/NewTravelPlan'));
const UpcomingTravels = lazy(() => import('../pages/UpcomingTravels'));
const Memories = lazy(() => import('../pages/Memories'));
const GroupTravel = lazy(() => import('../pages/GroupTravel'));
const TravelDetails = lazy(() => import('../pages/TravelDetails'));

// Loading fallback
const PageLoader = () => (
  <div className="page-loader">
    <div className="loader-spinner"></div>
    <p>Loading...</p>
  </div>
);

const Router = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="new-travel-plan" element={<NewTravelPlan />} />
          <Route path="upcoming-travels" element={<UpcomingTravels />} />
          <Route path="upcoming-travels/:id/details" element={<TravelDetails />} />
          <Route path="memories" element={<Memories />} />
          <Route path="group-travel" element={<GroupTravel />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
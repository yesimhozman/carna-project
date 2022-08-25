import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Library from './pages/Library';
import Review from './pages/Review';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Exercise from './pages/Exercise';
import Courses from './pages/Courses';
import DashboardApp from './pages/DashboardApp';
import Chat from './pages/Chat';
import DictionaryCarna from './pages/Dictionary';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'courses', element: <Courses /> },
        { path: 'review', element: <Review /> },
        { path: 'library', element: <Library /> },
        {  path: 'exercise',
        element: <Exercise /> },
        {  path: 'chat',
        element: <Chat /> },
        {  path: 'dictionary',
        element: <DictionaryCarna /> },
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}

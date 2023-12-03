import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import UserDetail from './Pages/UserDetail';
import ProtectedRoute from './hoc/ProtectedRoute';
import { Navigate } from 'react-router-dom';

export const routes = [
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/home',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/users/:id',
    element: (
      <ProtectedRoute>
        <UserDetail />
      </ProtectedRoute>
    ),
  },
];

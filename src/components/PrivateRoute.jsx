import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from 'Redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const refresh = useSelector(selectIsRefreshing);

  const Redirect = !isLoggedIn && !refresh;

  return Redirect ? <Navigate to={redirectTo} /> : Component;
};

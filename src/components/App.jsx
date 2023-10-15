import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './globalStyles';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { ContactsBook } from './ContactsBook';
import { RegForm } from './RegForm/RegForm';
import { LoginForm } from './LoginForm/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'Redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Home } from './Home';
import { selectIsRefreshing } from 'Redux/auth/selectors';
import { TailSpin } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();
  const refresh = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      {refresh ? (
        <TailSpin
          height="100"
          width="100"
          color="#0A433E"
          radius="5"
          wrapperStyle={{position: "absolute", top: "calc(50% - 50px)", left: "calc(50% - 50px)"}}
        />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path="contacts"
              element={
                <PrivateRoute component={<ContactsBook />} redirectTo="/" />
              }
            />
            <Route
              path="/registration"
              element={
                <RestrictedRoute
                  component={<RegForm />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LoginForm />}
                  redirectTo="/contacts"
                />
              }
            />
          </Route>
        </Routes>
      )}
      <GlobalStyles />
    </>
  );
};

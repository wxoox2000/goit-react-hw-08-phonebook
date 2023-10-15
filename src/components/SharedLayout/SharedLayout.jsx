import { Outlet } from 'react-router-dom';
import { Greeting, Head, NavItem, RegLoginWrap, SiteNav, Wrap } from './SharedLayout.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'Redux/auth/selectors';
import { logOut } from 'Redux/auth/operations';
import { AddBtn } from 'components/ContactForm/ContactForm.styled';

export const SharedLayout = () => {
  const loggedIn = useSelector(selectIsLoggedIn);
  const name = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <Wrap>
      <Head>
        <SiteNav>
          <RegLoginWrap>
            <NavItem to="/">Home</NavItem>
            {loggedIn && <NavItem to="contacts">Contacts</NavItem>}
          </RegLoginWrap>
          <RegLoginWrap>
            {loggedIn ? (
              <>
                <Greeting>Hello {name.name}</Greeting>
                <AddBtn onClick={() => dispatch(logOut())}>Log out</AddBtn>
              </>
            ) : (
              <>
                <NavItem to="/registration">Registration</NavItem>
                <NavItem to="/login">Login</NavItem>
              </>
            )}
          </RegLoginWrap>
        </SiteNav>
      </Head>
      <Outlet />
    </Wrap>
  );
};

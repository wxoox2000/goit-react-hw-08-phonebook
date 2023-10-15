import { selectIsLoggedIn } from "Redux/auth/selectors";
import { useSelector } from "react-redux";

export const Home = () => {
    const loggedIn = useSelector(selectIsLoggedIn);

  return (
    <p style={{textAlign: "center", fontSize: 40, marginTop: 40}}>
      {loggedIn
        ? 'Go to contacts section to manage your contacts'
        : 'Register or log in to use the service'}
    </p>
  );
};

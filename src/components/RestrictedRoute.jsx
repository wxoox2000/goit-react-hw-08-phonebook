import { selectIsLoggedIn } from "Redux/auth/selectors"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({component: Component, redirectTo= "/"}) => {
    const loggedIn = useSelector(selectIsLoggedIn);
    return loggedIn ? <Navigate to={redirectTo}/> : Component

}
import { useSelector } from "react-redux";
const {user} = useSelector((state) => state.auth)

function requireAuth(nextState, replace, next) {
    if (!user) {
      replace({
        pathname: "/login",
        state: {nextPathname: nextState.location.pathname}
      });
    }
    next();
  }

  export default requireAuth;
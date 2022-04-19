import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const {user} = useSelector((state) => state.auth)
const navigate = useNavigate()

function requireAuth() {
        if(!user) {
            navigate('/login');
            toast('Login required to view forum', {
                position: toast.POSITION.TOP_CENTER})
        
    }
  }

  export default requireAuth;
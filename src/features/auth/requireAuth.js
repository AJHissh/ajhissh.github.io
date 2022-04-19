import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



function RequireAuth() {
    const navigate = useNavigate()
    const {user} = useSelector((state) => state.auth)
    if(!user) {
        navigate('/login');
        toast('Login required to view forum', {
            position: toast.POSITION.TOP_CENTER})
        
    }
  }

  export default RequireAuth;
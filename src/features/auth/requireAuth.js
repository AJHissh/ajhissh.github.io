import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import React from "react";
import {useLocalState} from "../util/useLocalStorage";

function RequireAuth({children}) {
    const [jwt, setJwt] = useLocalState("", "jwt");
  return jwt ? children : <Navigate to="/login" />
  };

  export default RequireAuth;
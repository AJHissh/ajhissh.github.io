import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import React from "react";


function RequireAuth({children}) {
    const [jwt, setJwt] = require('jsonwebtoken');
  return jwt ? children : <Navigate to="/login" />
  };

  export default RequireAuth;
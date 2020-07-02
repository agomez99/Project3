import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/authContext/authContext";
import Title from "../Components/Title/Title";
import TextField from '@material-ui/core/TextField';

import { Button } from "@material-ui/core";
import './style.css';

const Login = (props) => {
  const { loginUser, userAuth, errors, clearErrors } = useContext(AuthContext);

  useEffect(() => {
    if (userAuth) {
      props.history.push("/blog");
    }
  }, [userAuth, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    clearErrors();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({ email, password });
    clearErrors();
  };

  return (
    <div className="login">
      <Title />
      <h4>Login</h4>
      <form className="login-form"onSubmit={handleSubmit}>
      <div>

        <TextField
          variant="outlined"
          label="Email Address"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          inputProps={{ "aria-label": "description" }}
        />
        </div>
      <br></br>
        <TextField
          variant="outlined"
          label="Password"

          autoFocus
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
          inputProps={{ "aria-label": "description" }}
        />
        <br></br>
        <div className="login-btn">
        <Button 
          type="submit"
          value="Login"
          variant="contained"
          color="primary"
        >
          Login
        </Button>
        </div>
      </form>
      <div className="question">
        {errors !== null && (
          <button className="danger">
            {errors.msg ? errors.msg : errors.error[0].msg}
            <span onClick={() => clearErrors()}>X</span>
          </button>
        )}
        <p>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

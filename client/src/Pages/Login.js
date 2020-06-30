import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/authContext/authContext";
import Title from "../Components/Title/Title";
import { Input } from "@material-ui/core";
import { Button } from "@material-ui/core";

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

      <form noValidate autoComplete="on">
        <Input
          placeholder="Email"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          inputProps={{ "aria-label": "description" }}
        />
      </form>
      <form noValidate autoComplete="on">
        <Input
          placeholder="Password"
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
          inputProps={{ "aria-label": "description" }}
        />
      </form>
      <div className="login-btn">
      <form onSubmit={handleSubmit}>
        <Button
          type="submit"
          value="Login"
          variant="contained"
          color="primary"
        >
          Login
        </Button>
      </form>
      </div>
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

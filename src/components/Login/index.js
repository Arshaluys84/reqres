import { useState } from "react";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";

import "./index.css";

export const Login = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({ mail: "", password: "" });
  const onChangeHandler = (event) => {
    setLoginData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (loginData.mail.length < 5 || loginData.password.length < 5) {
      return;
    }

    onLogin(true);
    setLoginData({ mail: "", password: "" });
  };

  return (
    <div className="login">
      <form onSubmit={submitHandler}>
        <label htmlFor="login">Mail:</label>
        <Input
          type="email"
          id="login"
          placeholder="Enter your mail"
          name="mail"
          value={loginData.mail}
          onChange={onChangeHandler}
        />
        <label htmlFor="password">Password:</label>
        <Input
          type="password"
          id="password"
          placeholder="More 5 symbols"
          name="password"
          value={loginData.password}
          onChange={onChangeHandler}
        />
        <Button>Login</Button>
      </form>
    </div>
  );
};

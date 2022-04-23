import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { onChangeHandler, URL } from "../../helpers/config";

import { Button } from "../UI/Button";
import { Input } from "../UI/Input";

import "./index.css";

export const Login = ({ onLogin }) => {
  const [error, setError] = useState("");
  const [isValidated, setIsValidated] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    if (loginData.email.length < 5 || loginData.password.length < 5) {
      return;
    }

    fetch(`${URL}login`, {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-type": "Application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        for (const key in data) {
          if (key === "token" && data[key]) {
            onLogin(true);
            setLoginData({ mail: "", password: "" });
            setIsValidated(true);
            navigate("/");
          } else {
            setError(data[key]);
            setIsValidated(false);
          }
        }
      });
  };

  return (
    <div className="login">
      <form onSubmit={submitHandler}>
        <label htmlFor="login">Mail:</label>
        <Input
          type="email"
          id="login"
          placeholder="Enter your mail"
          name="email"
          value={loginData.email}
          onChange={(e) => onChangeHandler(e, setLoginData)}
        />
        <label htmlFor="password">Password:</label>
        <Input
          type="password"
          id="password"
          placeholder="More 5 symbols"
          name="password"
          value={loginData.password}
          onChange={(e) => onChangeHandler(e, setLoginData)}
        />

        <Button>Login</Button>
      </form>
      {!isValidated && <p>{error}</p>}
    </div>
  );
};

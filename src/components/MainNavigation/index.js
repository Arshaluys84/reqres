import { Link } from "react-router-dom";

import "./index.css";

export const MainNavigation = ({ isLogin, onLogin }) => {
  const onLogoutHandler = () => {
    onLogin(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Reqres</Link>
      </div>
      <nav>
        <ul>
          <li>
            <span onClick={onLogoutHandler}>
              {!isLogin ? "Login" : "Logout"}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

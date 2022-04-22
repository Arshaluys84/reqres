import { useEffect, useState } from "react";
import { Login } from "./components/Login";

import { Pagination } from "react-pagination-bar";
import "react-pagination-bar/dist/index.css";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pagePostsLimit = 6;

  const onLoginHandler = (loginProps) => {
    setIsLogin(loginProps);
  };

  return (
    <div className="App">
      {!isLogin && <Login onLogin={onLoginHandler} />}
      {isLogin && (
        <div>
          helllooooo
          <Pagination
            initialPage={currentPage}
            itemsPerPage={pagePostsLimit}
            onPageСhange={(pageNumber) => setCurrentPage(pageNumber)}
            totalItems={30}
            pageNeighbours={2}
          />
        </div>
      )}
    </div>
  );
};

export default App;

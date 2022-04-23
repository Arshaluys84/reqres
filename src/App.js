import { useCallback, useEffect, useState } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { URL } from "./helpers/config";
import { UsersTable } from "./components/UsersTable";
import { UserDetail } from "./components/UserDetail";

import { Pagination } from "react-pagination-bar";

import "react-pagination-bar/dist/index.css";
import "./App.css";

const App = () => {
  const [singleUser, setSingleUser] = useState(1);
  const [isLogin, setIsLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersData, setUsersData] = useState([]);
  const [pagePostsLimit, setPagePostsLimit] = useState(5);
  const [totalItems, setTotalItems] = useState(5);

  const fetchData = useCallback(async () => {
    const resp = await fetch(`${URL}users?page=${currentPage}`);
    const data = await resp.json();
    console.log(data);
    setUsersData(data.data);
    setCurrentPage(data.page);
    setPagePostsLimit(data.per_page);
    setTotalItems(data.total);
  }, [currentPage]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  let navigate = useNavigate();

  const onLoginHandler = (loginProps) => {
    setIsLogin(loginProps);
  };

  const userHandler = (userId) => {
    setSingleUser(userId);
    navigate(`/table/${userId}`);
  };

  let Home = () => {
    return (
      <>
        <UsersTable userHandler={userHandler} usersData={usersData} />
        <Pagination
          initialPage={currentPage}
          itemsPerPage={pagePostsLimit}
          onPageСhange={(pageNumber) => setCurrentPage(pageNumber)}
          totalItems={totalItems}
          pageNeighbours={2}
        />
      </>
    );
  };

  return (
    <div className="App">
      {!isLogin && <Login onLogin={onLoginHandler} />}
      {isLogin && (
        <>
          <Routes>
            <Route
              path="/table/:id"
              element={<UserDetail userId={singleUser} />}
            />
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;

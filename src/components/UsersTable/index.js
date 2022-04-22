import React, { useEffect, useState } from "react";
import { URL } from "../../helpers/config";
import { Button } from "../UI/Button";

import "./index.css";

export const UsersTable = () => {
  const [usersData, setUsersData] = useState([]);
  const fetchData = async () => {
    const resp = await fetch(`${URL}users`);
    const data = await resp.json();
    console.log(data.data);
    setUsersData(data.data);
  };
  useEffect(() => {
    // fetch(`${URL}users`, {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((resp) => resp.json())
    //   .then((data) =>{

    //   });
    fetchData();
  }, []);
  return (
    <div>
      <div className="table-container">
        <table className="table">
          <thead className="table-head">
            <tr>
              <th>Index</th>
              <th>Avatar</th>
              <th>FullName</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {usersData.map((user) => (
              <tr
                key={user.id}
                // onClick={() => history.push(`/user/${user.id}`)}
              >
                <td>
                  <span className="table-id">{user.id}</span>
                </td>
                <td>
                  <span className="table-fullname">
                    <img src={user.avatar} alt={user.first_name} />
                  </span>
                </td>
                <td>
                  <span className="table-id">
                    {user.first_name} {user.last_name}
                  </span>
                </td>
                <td>
                  <span className="table-id">{user.email}</span>
                </td>
                <td>
                  <div className="table-actions">
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

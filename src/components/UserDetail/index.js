import React, { useCallback, useEffect, useState } from "react";
import { URL } from "../../helpers/config";

import "./index.css";

export const UserDetail = ({ userId }) => {
  const [singleUser, setSingleUser] = useState(1);
  const fetchUser = useCallback(async () => {
    const resp = await fetch(`${URL}users/${userId}`);
    const data = await resp.json();
    setSingleUser(data.data);
    console.log(data);
  }, [userId]);
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return (
    <div className="item">
      <div className="image">
        <img src={singleUser.avatar} alt={singleUser.first_name} />
      </div>
      <div className="content">
        <h3>
          {singleUser.first_name} {singleUser.last_name}
        </h3>
        <h2>{singleUser.email}</h2>
      </div>
    </div>
  );
};

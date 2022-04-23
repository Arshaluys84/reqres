import { useState } from "react";
import { Backdrop } from "../UI/Backdrop";
import { Button } from "../UI/Button";
import { CreatingModal } from "../UI/CreatingModal";
import { DeletingModal } from "../UI/DeletingModal";
import { EditingModal } from "../UI/EditingModal";

import "./index.css";

export const UsersTable = ({ userHandler, usersData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [userData, setUserData] = useState({});

  const onClickHandler = (user) => {
    userHandler(user.id);
  };
  const onEditHandler = (user) => {
    setUserData(user);
    setIsEditing(true);
  };

  const onModalSubmitHandler = (isClicked) => {
    setIsEditing(isClicked);
    setIsDeleting(isClicked);
    setIsCreating(isClicked);
  };

  const onDeleteHandler = (user) => {
    setIsDeleting(true);
  };

  const onCreateHandler = (user) => {
    setIsCreating(true);
  };

  return (
    <div>
      <div className="create-user">
        <Button btn="create-btn" onClick={onCreateHandler}>
          Create user
        </Button>
      </div>
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
              <tr key={user.id}>
                <td>
                  <span className="table-id">{user.id}</span>
                </td>
                <td>
                  <span className="table-fullname">
                    <img
                      src={user.avatar}
                      alt={user.first_name}
                      onClick={() => onClickHandler(user)}
                    />
                  </span>
                </td>
                <td>
                  <span
                    className="table-id"
                    onClick={() => onClickHandler(user)}
                  >
                    {user.first_name} {user.last_name}
                  </span>
                </td>
                <td>
                  <span
                    className="table-id"
                    onClick={() => onClickHandler(user)}
                  >
                    {user.email}
                  </span>
                </td>
                <td>
                  <div className="table-actions">
                    <Button onClick={() => onEditHandler(user)}>Edit</Button>
                    <Button onClick={() => onDeleteHandler(user)}>
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isEditing && <Backdrop />}
      {isEditing && (
        <EditingModal
          user={userData}
          onModalSubmitHandler={onModalSubmitHandler}
        />
      )}
      {isDeleting && <Backdrop />}
      {isDeleting && (
        <DeletingModal
          user={userData}
          onModalSubmitHandler={onModalSubmitHandler}
        />
      )}
      {isCreating && <Backdrop />}
      {isCreating && (
        <CreatingModal
          user={userData}
          onModalSubmitHandler={onModalSubmitHandler}
        />
      )}
    </div>
  );
};

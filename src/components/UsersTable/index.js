import { useState } from "react";
import { Backdrop } from "../UI/Backdrop";
import { Button } from "../UI/Button";
import { DeletingModal } from "../UI/DeletingModal";
import { Modal } from "../UI/Modal";

import "./index.css";

export const UsersTable = ({ userHandler, usersData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [userData, setUserData] = useState({});
  const onClickHandler = (user) => {
    userHandler(user.id);
  };
  const onEditHandler = (user) => {
    setUserData(user);
    setIsEditing(true);
  };

  const onModalSubmitHandler = (isEdit) => {
    setIsEditing(isEdit);
    setIsDeleting(isEdit);
  };
  const onDeleteHandler = (user) => {
    setIsDeleting(true);
  };
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
                  <span className="table-id">{user.email}</span>
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
        <Modal user={userData} onModalSubmitHandler={onModalSubmitHandler} />
      )}
      {isDeleting && <Backdrop />}
      {isDeleting && (
        <DeletingModal
          user={userData}
          onModalSubmitHandler={onModalSubmitHandler}
        />
      )}
    </div>
  );
};

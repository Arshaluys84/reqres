import { URL } from "../../../helpers/config";
import { Button } from "../Button";

import "./index.css";

export const DeletingModal = ({ user, onModalSubmitHandler }) => {
  const onCancelHandler = () => {
    onModalSubmitHandler(false);
  };
  const onConfirmHandler = () => {
    fetch(`${URL}users/${user.id}`, {
      method: "DELETE",
    }).then((data) => {
      onModalSubmitHandler(false);
    });
  };

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <Button btn="btn--alt" onClick={onCancelHandler}>
        Cancel
      </Button>
      <Button onClick={onConfirmHandler}>Confirm</Button>
    </div>
  );
};

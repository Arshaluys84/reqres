import { useState } from "react";
import { URL } from "../../../helpers/config";
import { Button } from "../Button";
import { Input } from "../Input";

import "./index.css";

export const Modal = ({ user, onModalSubmitHandler }) => {
  const [editingData, setEditingData] = useState({
    name: user.first_name,
    job: user.job || "",
  });

  const onChangeHandler = (event) => {
    setEditingData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (editingData.name.length < 3 || editingData.job.length < 5) {
      return;
    }
    fetch(`${URL}users/${user.id}`, {
      method: "PATCH",
      body: JSON.stringify(editingData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        console.log(editingData, user.id);
        onModalSubmitHandler(false);
      });
    console.log(editingData, user.id);
  };
  return (
    <form onSubmit={submitHandler} className="modal">
      <label htmlFor="name">Name:</label>
      <Input
        type="name"
        id="name"
        placeholder="Edit name"
        name="name"
        value={editingData.name}
        onChange={onChangeHandler}
      />
      <label htmlFor="job">Job:</label>
      <Input
        type="text"
        id="job"
        placeholder="job"
        name="job"
        value={editingData.job}
        onChange={onChangeHandler}
      />

      <Button>Save</Button>
    </form>
  );
};

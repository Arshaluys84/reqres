import { useState } from "react";
import {
  fetchDataHandler,
  onChangeHandler,
  URL,
} from "../../../helpers/config";
import { Button } from "../Button";
import { Input } from "../Input";

import "./index.css";

export const CreatingModal = ({ onModalSubmitHandler }) => {
  const [newUserData, setNewUserData] = useState({
    name: "",
    job: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();

    if (newUserData.name.length < 1 || newUserData.job.length < 5) {
      return;
    }

    fetchDataHandler({
      url: `${URL}users`,
      method: "POST",
      body: newUserData,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        onModalSubmitHandler(false);
      });
  };

  return (
    <form onSubmit={submitHandler} className="modal">
      <label htmlFor="name">Name:</label>
      <Input
        type="name"
        id="name"
        placeholder="more 1 letter"
        name="name"
        value={newUserData.name}
        onChange={(e) => onChangeHandler(e, setNewUserData)}
      />
      <label htmlFor="job">Job:</label>
      <Input
        type="text"
        id="job"
        placeholder="more 5 letters"
        name="job"
        value={newUserData.job}
        onChange={(e) => onChangeHandler(e, setNewUserData)}
      />

      <Button>Create</Button>
    </form>
  );
};

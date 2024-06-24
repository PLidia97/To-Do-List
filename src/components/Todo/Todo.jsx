import React from "react";
import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

const Todo = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="todo">
      <p>{props.taskText}</p>
      <div className="icons">
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => props.editTask(props.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={handleClickOpen} />
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          {"Do you really want to delete this task"}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={() => props.deleteTask(props.id)} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Todo;

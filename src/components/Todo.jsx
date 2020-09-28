import React from "react";
import PropTypes from "prop-types";

const Todo = (props) => {
  return (
    <div className="todo">
      <span className="todo-text">{props.teks}</span>
    </div>
  );
};

Todo.PropTypes = {
  teks: PropTypes.string.isRequired
};

export default Todo;

import React from "react";

import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      teks: "Belajar Reacts 1"
    },
    {
      teks: "Belajar Reacts 2"
    },
    {
      teks: "Belajar Reacts 3"
    },
    {
      teks: "Belajar Reacts 4"
    },
    {
      teks: "Belajar Reacts 5"
    }
  ];

  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo teks={todo.teks} />;
      })}
    </section>
  );
};

export default Todos;

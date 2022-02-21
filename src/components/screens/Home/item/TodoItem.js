import React from "react";
import Check from "./Check";
import { BsTrash } from "react-icons/bs";

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div className="bg-zinc-800 flex items-center justify-between mb-2 p-4 rounded-2xl">
      <div className="flex justify-start">
        <button onClick={() => changeTodo(todo._id)}>
          <Check isCompleted={todo.isCompleted} />
        </button>
        <button onClick={() => changeTodo(todo._id)}>
          <span
            className={`text-left ${todo.isCompleted ? "line-through" : ""}`}
          >
            {todo.title}
          </span>
        </button>
      </div>
      <button onClick={() => removeTodo(todo._id)}>
        <BsTrash size={22} className="text-gray-500 hover:text-gray-200 ml-3" />
      </button>
    </div>
  );
};

export default TodoItem;

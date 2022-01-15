import React, { useState } from "react";
import TodoItem from "./item/TodoItem";
import CreateTodoField from './create-todo-fields/CreateTodoField'

const data = [
  {
    _id: 23,
    title: "Finish the essay coloboration",
    isCompleted: false,
  },
  {
    _id: 2333,
    title: "Read next chapter of the book and tra-la-lalalalalalalalalalalalalalalalala  ",
    isCompleted: false,
  },
  {
    _id: 23233,
    title: "Send the finished assignment kfjhgkdsfhg skldjhfskjhg",
    isCompleted: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = id => {
    const copy = [...todos]
    const current = copy.find(t => t._id === id)
    current.isCompleted = !current.isCompleted
    setTodos(copy)
  };



  const removeTodo = id => {
    const copy = [...todos]
    setTodos(copy.filter(t => t._id !== id))
  }

  return (
    <div className="text-gray-300 mx-auto p-3 w-4/5">
      <h1 className="font-bold text-2xl text-center mb-10">
        ToDo for beginners
      </h1>
      <CreateTodoField setTodos={setTodos} />
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo} />
      ))}
    </div>
  );
};

export default Home;

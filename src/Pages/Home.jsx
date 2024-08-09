import React, { useEffect, useState } from "react";
import { completeTodo, remove, get, deleteTodo } from "../utils/LocalStorage";
import { useNavigate } from "react-router-dom";
import AddNew from "./AddNew";
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import NewUser from "../components/NewUser";

export default function Home() {
  const [newUser, setNewUser] = useState(true);
  const [todo, setTodo] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  //   add new task
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const fetchData = () => {
    const data = get();
    if (data.name === "") {
      setNewUser(true);
    } else {
      setNewUser(false);
      let com = data.todos.filter((to) => to.completed === true);
      let to = data.todos.filter((to) => to.completed === false);
      setTodo(to);
      setCompleted(com);
      setUserName(data.name);
    }
  };

  useEffect(() => {
    fetchData();
    return () => {
      setNewUser(true);
      setUserName("");
    };
  }, []);

  const handleRemove = (e) => {
    e.preventDefault();
    remove();
    fetchData();
    navigate("/");
  };

  const handleDelete = (todo) => {
    deleteTodo(todo);
    console.log("task deleted");
    fetchData();
  };

  const handleCompleted = (todo) => {
    completeTodo(todo);
    console.log("task deleted");
    fetchData();
  }

  if (newUser) {
    return <NewUser setAdd={setNewUser} setName={setUserName} />;
  }

  return (
    <div className="bg min-h-screen flex justify-center items-center p-8">
      <div className="bg-white shadow-xl p-8 rounded-xl w-full max-w-5xl">
        <div className="font-title">
          <h3 className="text-3xl mb-2">Hii {userName}</h3>
          <p>{new Date().toLocaleDateString()} </p>
        </div>
        <div className="bg-orange-50 p-8 my-8 rounded-xl shadow-md">
          <h2 className="font-title mb-6 text-xl">Task To Do</h2>
          {todo.length === 0 ? (
            <div className="">No tasks yet</div>
          ) : (
            <ul>
              {todo.map((todo, index) => (
                <li
                  key={index}
                  className={`${
                    todo.color === "Red"
                      ? "bg-red-300"
                      : todo.color === "Green"
                      ? "bg-green-300"
                      : todo.color === "Blue"
                      ? "bg-blue-300"
                      : "bg-orange-300"
                  } p-4 rounded-md mb-2 shadow-sm relative flex justify-between gap-2 pr-32 cursor-pointer hover:bg-opacity-80 transition-all duration-200`}
                >
                  <div className="font-bold">{todo.title}</div>
                  <div>{todo.description}</div>
                  <div className="text-sm text-gray-600">
                    {todo.date} {todo.time}
                  </div>
                  <div className="absolute right-3 top-3 text-2xl">
                    <button
                      className="mr-6 text-red-700 scale-100 hover:scale-125 transition-all duration-200"
                      onClick={() => {
                        handleDelete(todo.title);
                      }}
                    >
                      <MdDelete />
                    </button>
                    <button onClick={()=>{handleCompleted(todo.title)}} className="mr-6 text-green-700 scale-100 hover:scale-125 transition-all duration-200">
                      <TiTick />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <h2 className="font-title mt-10 mb-6 text-xl">Completed</h2>
          {completed.length === 0 ? (
            <div className="">No Completed tasks yet</div>
          ) : (
            <ul>
              {completed.map((todo, index) => (
                <li
                  key={index}
                  className={`${
                    todo.color === "Red"
                      ? "bg-red-300"
                      : todo.color === "Green"
                      ? "bg-green-300"
                      : todo.color === "Blue"
                      ? "bg-blue-300"
                      : "bg-orange-300"
                  } p-4 rounded-md mb-2 shadow-sm relative flex justify-between gap-2 pr-24 cursor-pointer hover:bg-opacity-80 transition-all duration-200`}
                >
                  <div className="font-bold">{todo.title}</div>
                  <div>{todo.description}</div>
                  <div className="text-sm text-gray-600">
                    {todo.date} {todo.time}
                  </div>
                  <div className="absolute right-3 top-3 text-2xl">
                    <button
                      className="mr-6 text-red-700 scale-100 hover:scale-125 transition-all duration-200"
                      onClick={() => {
                        handleDelete(todo.title);
                      }}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="float-right text-nowrap">
          <button
            onClick={openModal}
            className="border hover:border-orange-600 border-white rounded-xl hover:text-orange-600 text-white hover:bg-white bg-orange-600 px-6 py-2 font-title duration-300 transition-all w-32 mr-8"
          >
            Add Task
          </button>
          <button
            onClick={handleRemove}
            className="border border-orange-600 hover:border-white rounded-xl text-orange-600 hover:text-white bg-white hover:bg-orange-600 px-6 py-2 mr-6 font-title duration-300 transition-all w-32"
          >
            Delete All
          </button>
        </div>

        <AddNew show={showModal} onClose={closeModal} refresh={fetchData} />
      </div>
    </div>
  );
}

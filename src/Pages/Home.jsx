import React, { useEffect, useState } from "react";
import { save, remove, get } from "../utils/LocalStorage";
import { useNavigate } from "react-router-dom";
import AddNew from "./AddNew";

export default function Home() {
  const [newUser, setNewUser] = useState(true);
  const [username, setUserName] = useState("");
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  //   add new task
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const data = get();
    if (data.name === "") {
      setNewUser(true);
    } else {
      setUserName(data.name);
    }
  }, []);

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
      <AddNew show={showModal} onClose={closeModal} />
    </div>
  );
}

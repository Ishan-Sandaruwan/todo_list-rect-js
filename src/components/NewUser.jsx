import React, { useState } from "react";
import { save } from "../utils/LocalStorage";

export default function NewUser({ setAdd, setName }) {
  const [username, setUserName] = useState("");
  return (
    <div className="bg-orange-100 w-full h-screen flex items-center justify-center">
      <div className="bg-white shadow-xl w-full max-w-xl rounded-xl p-8">
        <h2 className="font-title text-orange-600 text-xl text-center mb-12">
          Welocme to Todo List
        </h2>
        <label className="font-title mr-4">Enter Your Name</label>
        <input
          required
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          className="px-4 py-1 border-2 rounded-lg focus:outline-orange-300 mb-8"
        />
        <button
          //   onClick={handleSubmit}
          className="border hover:border-orange-600 border-white rounded-xl hover:text-orange-600 text-white hover:bg-white bg-orange-600 px-6 py-2 font-title duration-300 transition-all w-32 float-right"
          onClick={(e) => {
            e.preventDefault();
            save(username);
            setName(username);
            setAdd(false);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

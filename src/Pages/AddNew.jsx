import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { save } from "../utils/LocalStorage";

export default function AddNew({ show, onClose }) {
  const initialValue = {
    title: "",
    description: "",
    date: "",
    time: "",
    color: "",
  };

  const [formData, setFormData] = useState(initialValue);

  const handleChange = (e) => {
    setFormData((prevDate) => ({
      ...prevDate,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCansel = (e) => {
    e.preventDefault();
    setFormData(initialValue);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    save(formData);
    onClose();
  };

  if (!show) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-orange-600 bg-opacity-10 flex justify-center items-center">
      <div className="relative bg-white rounded-xl shadow-lg max-w-xl w-full border-t-2 border-orange-500 ">
        <button
          className="absolute top-4 right-4 text-2xl text-orange-600"
          onClick={onClose}
        >
          <IoClose className="rotate-0 hover:rotate-180 transition-all duration-500" />
        </button>
        <h2 className="font-title text-orange-600 bg-orange-100 p-4">
          Add New Task
        </h2>
        <form action="" className="p-6 flex flex-col gap-1 text-slate-600">
          <label className="font-title">Title</label>
          <input
            required
            type="text"
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="px-4 py-1 border rounded-lg focus:outline-orange-200 mb-4"
          />
          <label className="font-title">Description</label>
          <textarea
            name="description"
            placeholder="description"
            value={formData.description}
            onChange={handleChange}
            className="px-4 py-1 border rounded-lg focus:outline-orange-200 mb-6"
          ></textarea>
          <div className="w-full flex justify-between ">
            <label className="font-title">Due Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="p-1 border rounded-lg focus:outline-orange-200 mb-4"
            />
            <label className="font-title">Due Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="p-1 border rounded-lg focus:outline-orange-200 mb-4"
            />
          </div>
          <div>
            <label className="font-title mr-4">Color</label>
            <select
              name="color"
              className="py-1 px-2 border rounded-lg focus:outline-orange-200 mb-4"
              onChange={handleChange}
            >
              <option value={"Red"} className="text-red-500">
                Red
              </option>
              <option value={"Orange"} className="text-orange-500">
                Orange
              </option>
              <option value={"Yellow"} className="text-yellow-500">
                Yellow
              </option>
              <option value={"Green"} className="text-green-500">
                Green
              </option>
              <option value={"Blue"} className="text-blue-500">
                Blue
              </option>
              <option value={"purple"} className="text-purple-500">
                purple
              </option>
            </select>
          </div>

          <div className="font-title text-center">
            <button
              onClick={handleCansel}
              className="border border-orange-600 hover:border-white rounded-xl text-orange-600 hover:text-white bg-white hover:bg-orange-600 px-6 py-2 mr-6 font-title duration-300 transition-all w-32"
            >
              Cansel
            </button>
            <button
              onClick={handleSubmit}
              className="border hover:border-orange-600 border-white rounded-xl hover:text-orange-600 text-white hover:bg-white bg-orange-600 px-6 py-2 font-title duration-300 transition-all w-32"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// import React from 'react';
// const Modal = ({ show, onClose, children }) => {
//   if (!show) {
//     return null;
//   }
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-8 rounded shadow-lg max-w-sm w-full">
//         <button className="float-right" onClick={onClose}>Close</button>
//         <div>{children}</div>
//       </div>
//     </div>
//   );
// };
// export default Modal;

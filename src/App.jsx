import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import './App.css';
import Home from "./Pages/Home";
// import AddNew from "./Pages/AddNew";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/addNew" element={<AddNew/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

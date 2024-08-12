import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import "./App.css";
import Home from "./Pages/Home";
import { Reducer } from "./utils/Reducer";

export default function App() {
  return (
    <Reducer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Reducer>
  );
}

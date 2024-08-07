import React from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="bg-orange-100">
      <div className="max-w-5xl mx-auto h-screen flex gap-4 items-center p-4">
        <div className="flex-1 ">
          <h1 className="font-title text-5xl font-bold mb-12">
            TO-DO
            <br /> LIST
          </h1>
          <p className="mb-24 w-[85%]">
            Boost your productivity with our intuitive to-do list app. Add,
            prioritize, and track tasks effortlessly. Stay organized and achieve
            your goals with ease.
          </p>
          <button
            className="border-2 border-orange-100 hover:border-black rounded-xl text-orange-100 hover:text-black bg-black hover:bg-orange-100 px-6 py-2 mr-6 font-title duration-300 transition-all"
            onClick={() => {
              navigate("/home");
            }}
          >
            Get Start
          </button>
          <button onClick={()=>{window.open('https://my-portfolio-git-main-ishan-sandaruwans-projects.vercel.app/','_blank')}} className="border-2 hover:border-orange-100 border-black rounded-xl hover:text-orange-100 text-black hover:bg-black bg-orange-100 px-6 py-2 font-title duration-300 transition-all">
            Contact Me
          </button>
        </div>
        <div className="flex-1">
          <img src="hero.png" alt="" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
}

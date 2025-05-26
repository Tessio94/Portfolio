import React from "react";

const Tracker = () => {
  return (
    <div className="flex flex-col">
      <div
        className="text-xl font-extrabold text-slate-200 border-2  border-slate-200 py-1 px-2"
        id="roles"
      >
        Role I'm searching for...
      </div>
      <div
        className="text-xl text-slate-200 border-[1px]  border-slate-200 py-1 px-2"
        id="frontend"
      >
        Frontend developer
      </div>
      <div
        className="text-xl text-slate-200 border-[1px] border-t-0 border-slate-200 py-1 px-2"
        id="fullstack"
      >
        Fullstack developer
      </div>
      <div
        className="text-xl font-extrabold text-slate-200 border-2  border-slate-200 py-1 px-2"
        id="currently"
      >
        I'm currently working on
      </div>
      <div
        className="text-xl text-slate-200 border-[1px] border-t-0 border-slate-200 py-1 px-2"
        id="futuro"
      >
        Futuro projects
      </div>
      <div
        className="text-xl text-slate-200 border-[1px] border-t-0 border-slate-200 py-1 px-2"
        id="personal"
      >
        Personal projects
      </div>
      <div
        className="text-xl text-slate-200 border-[1px] border-t-0 border-slate-200 py-1 px-2"
        id="personal"
      >
        List of my projects
      </div>
      <div
        className="text-xl font-extrabold text-slate-200 border-2  border-slate-200 py-1 px-2"
        id="skills"
      >
        My skills include
      </div>
      <div
        className="text-xl text-slate-200 border-[1px] border-t-0 border-slate-200 py-1 px-2"
        id="web"
      >
        Stack
      </div>
      <div
        className="text-xl text-slate-200 border-[1px] border-t-0 border-slate-200 py-1 px-2"
        id="design"
      >
        Frameworks & Libraries
      </div>
      <div
        className="text-xl text-slate-200 border-[1px] border-t-0 border-slate-200 py-1 px-2"
        id="architecture"
      >
        Additional
      </div>
    </div>
  );
};

export default Tracker;

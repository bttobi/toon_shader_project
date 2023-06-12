import React from "react";

const EditParameters = () => {
  return (
    <div className="mx-10 mb-10 mt-24 flex w-1/2 flex-col items-center justify-start overflow-auto rounded-lg bg-cyan-900 px-10 text-white shadow-lg shadow-black">
      <p className="mt-4 w-full text-center text-3xl">CONTROLS</p>
      <p className="mt-8 text-center font-bold">Material:</p>
      <div className="flex w-64 flex-col items-start">
        <div className="mt-4 flex justify-center gap-4">
          <label>enable toon shader:</label>
          <input className="toggle-primary toggle" type="checkbox" />
        </div>
        <div className="mt-4 flex justify-center gap-4">
          <label>color:</label>
          <input type="color" />
        </div>
        <div className="mt-4 flex justify-center gap-4">
          <label>opacity:</label>
          <input className="input h-7 w-28" type="number" />
        </div>
        <div className="mt-4 flex justify-center gap-4">
          <label className="flex items-center ">texture:</label>
          <select className="select-primary select">
            <option>none</option>
            <option>bricks</option>
          </select>
        </div>
      </div>
      <p className="mt-4 text-center font-bold">Shape</p>
      <div className="flex w-64 flex-col items-start">
        <div className="mt-4 flex justify-center gap-4">
          <label className="flex items-center">type:</label>
          <select className="select-primary select">
            <option>Torus</option>
            <option>Box</option>
            <option>Sphere</option>
          </select>
        </div>
      </div>
      <p className="mt-8 text-center font-bold">Spotlight</p>
      <div className="flex w-64 flex-col items-start">
        <div className="mt-4 flex justify-center gap-4">
          <label>color:</label>
          <input type="color" />
        </div>
        <div className="mt-4 flex justify-center gap-4">
          <label className="">intensity:</label>
          <input className="input h-7" type="number" min={0} max={10000} />
        </div>
      </div>
      <p className="mt-8 text-center font-bold">Fog</p>
      <div className="flex w-64 flex-col items-start">
        <div className="mt-4 flex justify-center gap-4">
          <label>enable fog:</label>
          <input className="toggle-primary toggle" type="checkbox" />
        </div>
        <div className="mt-4 flex justify-center gap-4">
          <label className="">color:</label>
          <input className="h-7" type="color" />
        </div>
      </div>
      <p className="mt-8 text-center font-bold">Transparency:</p>
      <div className="flex w-64 flex-col items-start">
        <div className="mt-4 flex justify-center gap-4">
          <label>enable transparency:</label>
          <input className="toggle-primary toggle" type="checkbox" />
        </div>
        <div className="mb-4 mt-4 flex justify-center gap-4">
          <label>opacity:</label>
          <input className="input h-7 w-28" type="number" />
        </div>
      </div>
    </div>
  );
};

export default EditParameters;

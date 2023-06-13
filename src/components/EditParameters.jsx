import { useState, useContext, useEffect, useRef } from "react";
import { ParametersContext } from "../contexts/ParametersContext";

const EditParameters = () => {
  const { setShape } = useContext(ParametersContext);
  const shapeTypeRef = useRef(null);
  const rotateSpeedXInputRef = useRef(null);
  const rotateSpeedYInputRef = useRef(null);
  const rotateSpeedZInputRef = useRef(null);
  const enableToonInputRef = useRef(null);
  const materialColorInputRef = useRef(null);
  const materialTextureInputRef = useRef(null);
  const spotLightColorInputRef = useRef(null);
  const spotLightIntensityInputRef = useRef(null);
  const spotLightXInputRef = useRef(null);
  const spotLightYInputRef = useRef(null);
  const spotLightZInputRef = useRef(null);
  const enableFogInputRef = useRef(null);
  const fogColorInputRef = useRef(null);
  const enableTransparencyInputRef = useRef(null);
  const transparencyOpacityInputRef = useRef(null);
  const [resetToggle, setResetToggle] = useState(false);

  const setParameters = () => {
    setShape(
      shapeTypeRef.current.value,
      rotateSpeedXInputRef.current.value,
      rotateSpeedYInputRef.current.value,
      rotateSpeedZInputRef.current.value,
      enableToonInputRef.current.checked,
      materialColorInputRef.current.value,
      materialTextureInputRef.current.value,
      spotLightColorInputRef.current.value,
      spotLightIntensityInputRef.current.value,
      spotLightXInputRef.current.value,
      spotLightYInputRef.current.value,
      spotLightZInputRef.current.value,
      enableFogInputRef.current.checked,
      fogColorInputRef.current.value,
      enableTransparencyInputRef.current.checked,
      transparencyOpacityInputRef.current.value
    );
  };

  const reset = () => {
    shapeTypeRef.current.value = "Torus Knot";
    rotateSpeedXInputRef.current.value =
      rotateSpeedXInputRef.current.defaultValue;
    rotateSpeedYInputRef.current.value =
      rotateSpeedYInputRef.current.defaultValue;
    rotateSpeedZInputRef.current.value =
      rotateSpeedZInputRef.current.defaultValue;
    enableToonInputRef.current.checked =
      enableToonInputRef.current.defaultChecked;
    materialColorInputRef.current.value =
      materialColorInputRef.current.defaultValue;
    materialTextureInputRef.current.value = "none";
    spotLightColorInputRef.current.value =
      spotLightColorInputRef.current.defaultValue;
    spotLightIntensityInputRef.current.value =
      spotLightIntensityInputRef.current.defaultValue;
    spotLightXInputRef.current.value = spotLightXInputRef.current.defaultValue;
    spotLightYInputRef.current.value = spotLightYInputRef.current.defaultValue;
    spotLightZInputRef.current.value = spotLightZInputRef.current.defaultValue;
    enableFogInputRef.current.checked =
      enableFogInputRef.current.defaultChecked;
    fogColorInputRef.current.value = fogColorInputRef.current.defaultValue;
    enableTransparencyInputRef.current.checked =
      enableTransparencyInputRef.current.defaultChecked;
    transparencyOpacityInputRef.current.value =
      transparencyOpacityInputRef.current.defaultValue;
  };

  useEffect(() => {
    setShape(
      shapeTypeRef.current.value,
      rotateSpeedXInputRef.current.value,
      rotateSpeedYInputRef.current.value,
      rotateSpeedZInputRef.current.value,
      enableToonInputRef.current.checked,
      materialColorInputRef.current.value,
      materialTextureInputRef.current.value,
      spotLightColorInputRef.current.value,
      spotLightIntensityInputRef.current.value,
      spotLightXInputRef.current.value,
      spotLightYInputRef.current.value,
      spotLightZInputRef.current.value,
      enableFogInputRef.current.checked,
      fogColorInputRef.current.value,
      enableTransparencyInputRef.current.checked,
      transparencyOpacityInputRef.current.value
    );
  }, [resetToggle]);

  useEffect(() => {
    setShape(
      shapeTypeRef.current.value,
      rotateSpeedXInputRef.current.value,
      rotateSpeedYInputRef.current.value,
      rotateSpeedZInputRef.current.value,
      enableToonInputRef.current.checked,
      materialColorInputRef.current.value,
      materialTextureInputRef.current.value,
      spotLightColorInputRef.current.value,
      spotLightIntensityInputRef.current.value,
      spotLightXInputRef.current.value,
      spotLightYInputRef.current.value,
      spotLightZInputRef.current.value,
      enableFogInputRef.current.checked,
      fogColorInputRef.current.value,
      enableTransparencyInputRef.current.checked,
      transparencyOpacityInputRef.current.value
    );
  }, []);

  return (
    <div
      id="edit-parameters"
      className="mb-14 mt-16 flex flex-col items-center"
    >
      <p className="mt-8 text-center text-3xl text-white">CONTROLS</p>
      <form
        onChange={setParameters}
        className="mx-10 mb-10 mt-4 flex flex-col items-center justify-start overflow-y-auto rounded-lg bg-cyan-900 px-4 pb-4 text-white shadow-lg shadow-black"
      >
        <p className="my-2 text-center font-bold">Shape</p>
        <div className="flex flex-col items-center">
          <div className="align-center mt-1 flex gap-1">
            <select
              className="select-primary select select-sm"
              ref={shapeTypeRef}
              defaultValue={"Torus Knot"}
            >
              <option>Box</option>
              <option>Sphere</option>
              <option>Capsule</option>
              <option>Circle</option>
              <option>Cone</option>
              <option>Cylinder</option>
              <option>Dodecahedron</option>
              <option>Icosahedron</option>
              <option>Octahedron</option>
              <option>Plane</option>
              <option>Ring</option>
              <option>Tetrahedron</option>
              <option>Torus</option>
              <option>Torus Knot</option>
              <option>Tube</option>
            </select>
          </div>
        </div>
        <p className="mb-2 mt-8 text-center font-bold">Rotation</p>
        <div className="flex w-64 flex-col items-start">
          <div className="mt-1 flex flex-col justify-center gap-1">
            <div>
              <label>X velocity: </label>
              <input
                className="input h-7 "
                ref={rotateSpeedXInputRef}
                type="number"
                min={-100}
                max={100}
                defaultValue={0}
                step={"0.001"}
              />
            </div>
            <div>
              <label>Y velocity: </label>
              <input
                className="input h-7 "
                ref={rotateSpeedYInputRef}
                type="number"
                min={-100}
                max={100}
                defaultValue={-0.01}
                step={"0.001"}
              />
            </div>
            <div>
              <label>Z velocity: </label>
              <input
                className="input h-7 "
                ref={rotateSpeedZInputRef}
                type="number"
                min={-100}
                max={100}
                defaultValue={0}
                step={"0.001"}
              />
            </div>
          </div>
        </div>
        <p className="mb-2 mt-8 text-center font-bold">Material</p>
        <div className="flex w-64 flex-col items-start">
          <div className="mt-1 flex justify-center gap-1">
            <label>enable toon shader:</label>
            <input
              className="toggle-primary toggle"
              ref={enableToonInputRef}
              defaultChecked={true}
              type="checkbox"
            />
          </div>
          <div className="mt-1 flex justify-center gap-1">
            <label>color:</label>
            <input
              ref={materialColorInputRef}
              type="color"
              defaultValue={"#0e342a"}
            />
          </div>
          <div className="mt-1 flex justify-center gap-1">
            <label className="flex items-center ">texture:</label>
            <select
              className="select-primary select select-xs"
              ref={materialTextureInputRef}
              defaultValue={"none"}
            >
              <option>none</option>
              <option>bricks</option>
            </select>
          </div>
        </div>
        <p className="mb-2 mt-8 text-center font-bold">Spotlight</p>
        <div className="flex w-64 flex-col items-start">
          <div className="mt-1 flex justify-center gap-1">
            <label>color:</label>
            <input
              ref={spotLightColorInputRef}
              type="color"
              defaultValue={"#ffffff"}
            />
          </div>
          <div className="mt-1 flex justify-center gap-1">
            <label className="">intensity:</label>
            <input
              className="input h-7 "
              ref={spotLightIntensityInputRef}
              type="number"
              min={0}
              max={1000}
              defaultValue={10}
              step={"0.1"}
            />
          </div>
          <div className="mt-1 flex flex-col justify-center gap-1">
            <div>
              <label>X: </label>
              <input
                className="input h-7 "
                ref={spotLightXInputRef}
                type="number"
                min={0}
                max={100}
                defaultValue={0}
                step={"0.01"}
              />
            </div>
            <div>
              <label>Y: </label>
              <input
                className="input h-7 "
                ref={spotLightYInputRef}
                type="number"
                min={0}
                max={100}
                defaultValue={0}
                step={"0.01"}
              />
            </div>
            <div>
              <label>Z: </label>
              <input
                className="input h-7 "
                ref={spotLightZInputRef}
                type="number"
                min={0}
                max={100}
                defaultValue={5}
                step={"0.01"}
              />
            </div>
          </div>
        </div>
        <p className="mb-2 mt-8 text-center font-bold">Fog</p>
        <div className="flex w-64 flex-col items-start">
          <div className="mt-1 flex justify-center gap-1">
            <label>enable fog:</label>
            <input
              className="toggle-primary toggle"
              ref={enableFogInputRef}
              type="checkbox"
              defaultChecked={false}
            />
          </div>
          <div className="mt-1 flex justify-center gap-1">
            <label className="">color:</label>
            <input
              className="h-7"
              ref={fogColorInputRef}
              type="color"
              defaultValue={"#fd0000"}
            />
          </div>
        </div>
        <p className="mb-2 mt-8 text-center font-bold">Transparency</p>
        <div className="flex w-64 flex-col items-start">
          <div className="mt-1 flex justify-center gap-1">
            <label>enable transparency:</label>
            <input
              className="toggle-primary toggle"
              ref={enableTransparencyInputRef}
              type="checkbox"
              defaultChecked={false}
            />
          </div>
          <div className="mt-1 flex justify-center gap-1">
            <label>opacity:</label>
            <input
              className="input h-7 w-28"
              ref={transparencyOpacityInputRef}
              type="number"
              min={0}
              max={1}
              defaultValue={0.5}
              step={"0.01"}
            />
          </div>
        </div>
      </form>
      <button
        className="btn w-min border-none bg-red-500 text-white hover:bg-red-300"
        onClick={() => {
          reset();
          setResetToggle(!resetToggle);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default EditParameters;

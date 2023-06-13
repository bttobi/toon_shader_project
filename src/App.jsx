import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import "./index.css";
import MainSceneShow from "./scenes/MainSceneShow";
import EditParameters from "./components/EditParameters";
import Navbar from "./components/Navbar";
import { ParametersProvider } from "./contexts/ParametersContext";
import Modal from "./components/Modal";

const App = () => {
  return (
    <ParametersProvider>
      <Navbar />
      <main className="align-center flex h-full flex-col justify-evenly pb-4 lg:flex-row">
        <Suspense
          fallback={
            <p className="text-3xl font-bold text-red-500">
              UNABLE TO LOAD 3D MODEL - PLEASE REFRESH THE PAGE
            </p>
          }
        >
          <div className="canvas-wrapper align-center flex flex-col items-center justify-center lg:mt-0">
            <Canvas shadows className="cursor-grab">
              <MainSceneShow />
            </Canvas>
            <label
              htmlFor="my_modal_7"
              className="b-4 btn-info btn mt-4 w-36 border-none bg-teal-700 text-white"
            >
              How does toon shader work?
            </label>
            <div className="mx-16">
              <p className="mt-4 text-center text-xs font-bold lg:text-xl">
                Tip: you can use scroll wheel to zoom-in and zoom-out
              </p>
              <p className="mb-4 mt-2 text-center text-xs font-bold lg:text-xl">
                You can also move the camera by using mouse right-click and
                dragging the element
              </p>
              <div className="visible flex justify-center lg:hidden">
                <a href="#edit-parameters">
                  <BsFillArrowDownCircleFill size={38} />
                </a>
              </div>
            </div>
          </div>
        </Suspense>
        <EditParameters />
        <Modal />
      </main>
    </ParametersProvider>
  );
};

export default App;

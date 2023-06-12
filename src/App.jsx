import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./index.css";
import MainSceneShow from "./components/MainSceneShow";
import EditParameters from "./components/EditParameters";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <main className="align-center flex h-full justify-center gap-8">
        <Navbar />
        <Suspense fallback={null}>
          <div className="h-full w-1/2 flex-grow">
            <Canvas className="h-96 w-96" shadows>
              <MainSceneShow />
            </Canvas>
          </div>
        </Suspense>
        <EditParameters />
      </main>
    </>
  );
};

export default App;

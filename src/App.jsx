import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./components/Box";
import Lights from "./components/Lights";

function App() {
  return (
    <>
      <Main />

      <Canvas>
        <ambientLight />
        <pointLight position={[1, 1, 1]} />
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
        <Box position={[-3.2, 0, 0]} />
        <Box position={[3.2, 0, 0]} />
        <OrbitControls
          enableDamping={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Lights />
      </Canvas>
    </>
  );
}

function Main() {
  return (
    <>
      <div className="pointer-events-none fixed z-20 flex h-screen w-full items-center justify-center bg-slate-200 [--tw-bg-opacity:0.2]">
        <h1 className="font-sulphur text-8xl font-light">React Three.js</h1>
      </div>
    </>
  );
}

export default App;

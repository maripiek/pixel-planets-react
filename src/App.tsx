import { Canvas } from "@react-three/fiber";
import Moon from "./Planets/Moon";

export default function App() {

  return (
    <Canvas camera={{fov: 30}}>
      <color attach="background" args={['#656874']} />
      <Moon />
    </Canvas>
  );
}

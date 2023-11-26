import { Canvas } from "@react-three/fiber";
import Moon from "./Planets/Moon";

export default function App() {

  return (
    <Canvas camera={{fov: 20}}>
      <color attach="background" args={['#656874']} />
      <Moon />
    </Canvas>
  );
}

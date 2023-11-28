import { Canvas } from "@react-three/fiber";
import { useControls } from 'leva';
import { useState } from "react";
import Earth from "./Planets/Earth";
import GasGiant from "./Planets/GasGiant";
import IcePlanet from "./Planets/IcePlanet";
import LavaPlanet from "./Planets/LavaPlanet";
import Moon from "./Planets/Moon";

export default function App() {
  const [planet, setPlanet] = useState('sunset')

  function renderPlanet(planetName: string){
    switch(planetName){
      case "Moon": {
        return <Moon />;
      }
      case "Earth": {
        return <Earth />;
      }
      case "Ice Planet": {
        return <IcePlanet />;
      }
      case "Lava Planet": {
        return <LavaPlanet />;
      }
      case "Gas Giant": {
        return <GasGiant />;
      }
      default: {
        return <div />
      }
    }
  }

  useControls({
    Planet: {
      value: "Moon",
      options: ["Moon", "Earth", "Ice Planet", "Lava Planet", "Gas Giant"],
      onChange: (value) => setPlanet(value)
    }
  })

  return (
    <Canvas camera={{fov: 30}}>
      <color attach="background" args={['#656874']} />
      {renderPlanet(planet)}
    </Canvas>
  );
}

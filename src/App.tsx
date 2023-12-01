import { Canvas } from "@react-three/fiber";
import { useControls } from 'leva';
import { useState } from "react";
import DryPlanet from "./planets/DryPlanet";
import Earth from "./planets/Earth";
import GasGiant from "./planets/GasGiant";
import GasGiantRing from "./planets/GasGiantRing";
import IcePlanet from "./planets/IcePlanet";
import LavaPlanet from "./planets/LavaPlanet";
import Moon from "./planets/Moon";
import Star from "./planets/Star";

export default function App() {
  const [planet, setPlanet] = useState('sunset')

  function renderPlanet(planetName: string){
    switch(planetName){
      case "Moon": {
        return <Moon/>;
      }
      case "Earth": {
        return <Earth/>;
      }
      case "Ice Planet": {
        return <IcePlanet/>;
      }
      case "Lava Planet": {
        return <LavaPlanet/>;
      }
      case "Gas Giant": {
        return <GasGiant/>;
      }
      case "Gas Giant Ring": {
        return <GasGiantRing/>;
      }
      case "Star": {
        return <Star/>;
      }
      case "Dry Planet": {
        return <DryPlanet/>;
      }
      default: {
        return <div/>
      }
    }
  }

  useControls({
    Planet: {
      value: "Star",
      options: ["Moon", "Earth", "Ice Planet", "Lava Planet", "Gas Giant", "Gas Giant Ring", "Star", "Dry Planet"],
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

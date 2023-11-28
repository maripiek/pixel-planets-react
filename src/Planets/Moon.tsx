import { useFrame } from "@react-three/fiber";
import React from "react";
import BasePlanet from "../Layers/BasePlanetLayer";
import Craters from "../Layers/CratersLayer";

export default function Moon() {

  const myGroup = React.useRef<any>()
  
  useFrame(({ clock }) => {
    myGroup.current.children.forEach((layer: { material: { uniforms: { [x: string]: { value: number; }; }; }; }) => {
      if(layer.material.uniforms["time"]){
        layer.material.uniforms["time"].value = clock.getElapsedTime();
      }
    })
  });

  return(
    <group ref={myGroup}>
      <BasePlanet />
      <Craters />
    </group>

  );
}
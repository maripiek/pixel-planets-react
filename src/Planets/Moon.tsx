import { useFrame } from "@react-three/fiber";
import React from "react";
import BasePlanet from "../Layers/BasePlanet";
import CraterLayer from "../Layers/CraterLayer";

export default function Moon() {

  const myGroup = React.useRef<any>()
  
  useFrame(({ clock }) => {
    myGroup.current.children.forEach((layer: { material: { uniforms: { [x: string]: { value: number; }; }; }; }) => {
      layer.material.uniforms["time"].value = clock.getElapsedTime()
    })
  });

  return(
    <group ref={myGroup}>
      <BasePlanet />
      <CraterLayer />
    </group>

  );
}
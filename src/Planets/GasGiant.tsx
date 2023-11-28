import { useFrame } from "@react-three/fiber";
import React from "react";
import BaseGasPlanetLayer from "../Layers/BaseGasPlanetLayer";
import GasLayer from "../Layers/GasLayer";


export default function GasGiant() {
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
      <BaseGasPlanetLayer />
      <GasLayer />
    </group>
  );
}

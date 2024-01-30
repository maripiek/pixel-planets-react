import { useFrame } from "@react-three/fiber";
import React from "react";
import BaseGasPlanetLayer from "../layers/BaseGasPlanetLayer";
import GasLayer from "../layers/GasLayer";


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

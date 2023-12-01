import { useFrame } from "@react-three/fiber";
import React from "react";
import DenseGasLayer from "../layers/DenseGasLayer";
import RingLayer from "../layers/RingLayer";


export default function GasGiantRing() {
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
      <RingLayer />
      <DenseGasLayer />
    </group>
  );
}
import { useFrame } from "@react-three/fiber";
import React from "react";
import { Vector4 } from "three";
import Atmosphere from "../layers/AtmosphereLayer";
import BasePlanet from "../layers/BasePlanetLayer";
import Clouds from "../layers/CloudsLayer";
import LandMassLayer from "../layers/LandMassLayer";

export default function Earth() {

  const myGroup = React.useRef<any>()

  const colors = [
    new Vector4(102 / 255, 176 / 255, 199 / 255, 1),
    new Vector4(102 / 255, 176 / 255, 199 / 255, 1),
    new Vector4(52 / 255, 65 / 255, 157 / 255, 1)
]
  
  useFrame(({ clock }) => {
    myGroup.current.children.forEach((layer: { material: { uniforms: { [x: string]: { value: number; }; }; }; }) => {
      if(layer.material.uniforms["time"]){
        layer.material.uniforms["time"].value = clock.getElapsedTime();
      }
    })
  });

  return(
    <group ref={myGroup}>
      <BasePlanet colors={colors}/>
      <LandMassLayer land={0.4}/>
      <Clouds />
      <Atmosphere />
    </group>

  );
}
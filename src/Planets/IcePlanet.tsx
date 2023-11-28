import { useFrame } from "@react-three/fiber";
import React from "react";
import { Vector4 } from "three";
import BasePlanet from "../Layers/BasePlanetLayer";
import Clouds from "../Layers/CloudsLayer";
import LakeLayer from "../Layers/LakeLayer";

export default function IcePlanet() {

  const myGroup = React.useRef<any>()

  const baseColorPalette = [
    new Vector4(250/255,255/255,255/255,1),
    new Vector4(199/255,212/255,255/255,1),
    new Vector4(146/255,143/255,184/255,1)
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
      <BasePlanet colors={baseColorPalette}/>
      <LakeLayer />
      <Clouds />
    </group>
  );
}
import { useFrame } from "@react-three/fiber";
import React from "react";
import StarBaseLayer from "../layers/StarBaseLayer";
import StarFlareLayer from "../layers/StarFlareLayer";

export default function Star() {
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
      <StarBaseLayer/>
      <StarFlareLayer/>
      {/* <StarBlobLayer/> */}
    </group>
  );
}
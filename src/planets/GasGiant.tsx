import { useFrame } from "@react-three/fiber";
import React from "react";
import BaseGasPlanetLayer from "../layers/BaseGasPlanetLayer";
import GasLayer from "../layers/GasLayer";
import { Mesh, ShaderMaterial, type Group } from "three";


export default function GasGiant() {
  const myGroup = React.useRef<Group | null>(null);

  useFrame(({ clock }) => {
    if (!myGroup.current) return;

    myGroup.current.children.forEach(child => {

      if (child instanceof Mesh) {
        const material = child.material as ShaderMaterial;

        if (material.uniforms?.time) {
          material.uniforms.time.value = clock.getElapsedTime();
        }
      }

    });
  });

  return (
    <group ref={myGroup}>
      <BaseGasPlanetLayer />
      <GasLayer />
    </group>
  );
}

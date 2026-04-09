import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import BasePlanet from "../layers/BasePlanetLayer";
import Craters from "../layers/CratersLayer";
import { Mesh, ShaderMaterial, type Group } from "three";


export default function Moon() {
  const myGroup = useRef<Group | null>(null);

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
      <BasePlanet />
      <Craters />
    </group>
  );
}

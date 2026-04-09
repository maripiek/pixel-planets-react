import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import DryPlanetLayer from "../layers/DryPlanetLayer";
import { Mesh, ShaderMaterial, type Group } from "three";


export default function DryPlanet() {
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
      <DryPlanetLayer />
    </group>
  );
}

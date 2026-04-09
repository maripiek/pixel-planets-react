import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group, Mesh, ShaderMaterial, Vector4 } from "three";
import Atmosphere from "../layers/AtmosphereLayer";
import BasePlanet from "../layers/BasePlanetLayer";
import Clouds from "../layers/CloudsLayer";
import LandMassLayer from "../layers/LandMassLayer";


export default function Earth() {
  const colors = [
    new Vector4(102 / 255, 176 / 255, 199 / 255, 1),
    new Vector4(102 / 255, 176 / 255, 199 / 255, 1),
    new Vector4(52 / 255, 65 / 255, 157 / 255, 1)
  ];

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
      <BasePlanet colors={colors} />
      <LandMassLayer land={0.4} />
      <Clouds />
      <Atmosphere />
    </group>

  );
}

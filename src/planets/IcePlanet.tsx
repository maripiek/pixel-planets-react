import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group, Mesh, ShaderMaterial, Vector4 } from "three";
import BasePlanet from "../layers/BasePlanetLayer";
import Clouds from "../layers/CloudsLayer";
import LakeLayer from "../layers/LakeLayer";


export default function IcePlanet() {
  const baseColorPalette = [
    new Vector4(250 / 255, 255 / 255, 255 / 255, 1),
    new Vector4(199 / 255, 212 / 255, 255 / 255, 1),
    new Vector4(146 / 255, 143 / 255, 184 / 255, 1)
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
      <BasePlanet colors={baseColorPalette} />
      <LakeLayer />
      <Clouds />
    </group>
  );
}
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import DenseGasLayer from "../layers/DenseGasLayer";
import RingLayer from "../layers/RingLayer";
import { Mesh, ShaderMaterial, type Group } from "three";


export default function GasGiantRing() {
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
      <RingLayer />
      <DenseGasLayer />
    </group>
  );
}

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import StarBaseLayer from "../layers/StarBaseLayer";
import StarFlareLayer from "../layers/StarFlareLayer";
import { Mesh, ShaderMaterial, type Group } from "three";

export default function Star() {
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
      <StarBaseLayer />
      <StarFlareLayer />
      {/* <StarBlobLayer/> */}
    </group>
  );
}
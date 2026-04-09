import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group, Mesh, ShaderMaterial, Vector4 } from "three";
import BasePlanet from "../layers/BasePlanetLayer";
import CratersLayer from "../layers/CratersLayer";
import RiversLayer from "../layers/RiversLayer";


export default function LavaPlanet() {
  const colorPaletteBase = [
    new Vector4(0.560784, 0.301961, 0.341176, 1),
    new Vector4(0.321569, 0.2, 0.247059, 1),
    new Vector4(0.239216, 0.160784, 0.211765, 1)
  ];

  const colorPaletteCrater = [
    new Vector4(0.321569, 0.2, 0.247059, 1),
    new Vector4(0.239216, 0.160784, 0.211765, 1),
  ];

  const colorPaletteRiver = [
    new Vector4(1, 0.537255, 0.2, 1),
    new Vector4(0.901961, 0.270588, 0.223529, 1),
    new Vector4(0.678431, 0.184314, 0.270588, 1)
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
      <BasePlanet colors={colorPaletteBase} />
      <CratersLayer colors={colorPaletteCrater} />
      <RiversLayer colors={colorPaletteRiver} />
    </group>
  );
}

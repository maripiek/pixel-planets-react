import BasePlanet from "../Layers/BasePlanet";
import CraterLayer from "../Layers/CraterLayer";

export default function Moon() {

  return(
    <group>
      <BasePlanet />
      <CraterLayer />
    </group>
  );
}
import { Perf } from "r3f-perf";
import { OrbitControls } from "@react-three/drei";

const Settings = () => {
  return (
    <>
      {/* <Perf position="top-left" /> */}

      <OrbitControls
        minPolarAngle={Math.PI * 0.01}
        maxPolarAngle={Math.PI * 0.5}
        maxDistance={10.5}
        minDistance={5}
        enablePan={false}
        target={[0, 1.5, 0]}
      />

      <color args={[0xffffff]} attach="background" />
    </>
  );
};

export default Settings;

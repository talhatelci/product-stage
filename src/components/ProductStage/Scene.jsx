import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { MeshBasicMaterial, TextureLoader } from "three";

const Scene = () => {
  const model = useGLTF("stage.glb");
  const [bakedMap] = useLoader(TextureLoader, ["stage_baked.jpg"]);

  useEffect(() => {
    bakedMap.flipY = false;
    model.scene.traverse((item) => {
      if (item.name == "Emissive") {
        item.material = new MeshBasicMaterial();
      } else {
        item.material = new MeshBasicMaterial({ map: bakedMap });
      }
    });
  }, []);

  return (
    <>
      <primitive object={model.scene} />

      <mesh position-y={2}>
        <icosahedronGeometry args={[2, 4]} />
        <meshPhongMaterial flatShading />
      </mesh>

      <hemisphereLight args={[0xffffff, 0x000000, 0.5]} />
      <directionalLight />
      <ambientLight intensity={0.8} />
    </>
  );
};

export default Scene;

import { Canvas } from "@react-three/fiber";
import Settings from "./Settings.jsx";
import Scene from "./Scene.jsx";

const ProductStage = () => {
  return (
    <div className="product-stage">
      <Canvas camera={{ position: [0, 3, 10] }}>
        <Settings />
        <Scene />
      </Canvas>
    </div>
  );
};

export default ProductStage;

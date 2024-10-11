import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import {
    Environment,
    OrbitControls,
    useGLTF,
    useTexture,
} from "@react-three/drei";

const Model = ({
    url,
    scale = 1,
    position = [0, 0, 0],
    rotation = [0, 0, 0],
}) => {
    const { scene } = useGLTF(url);

    return (
        <group scale={scale}>
            <primitive object={scene} />
        </group>
    );
};

const BookModel = () => {
    return (
        <div className="w-full h-[500px]">
            <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
                <ambientLight intensity={1.8} />
                <directionalLight
                    intensity={5}
                    position={[0, 2, 2]}
                    castShadow
                />
                <Model
                    url="assets/models/book/scene.gltf"
                    scale={0.144}
                    position={[3, 1.3, 1.4]}
                    rotation={[Math.PI / 10, 0, Math.PI / 6]}
                />
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default BookModel;

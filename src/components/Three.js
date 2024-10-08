import { useRef, Suspense } from "react";
import { useThree, useFrame, Canvas } from "@react-three/fiber";
import { useScroll, Image, ScrollControls, Scroll } from "@react-three/drei";

import img_css from "../images/skills/CSS.png";
import Top from "./Top";

function Images() {
    const { width, height } = useThree((state) => state.viewport);
    const data = useScroll();
    const group = useRef();
    useFrame(() => {
        group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
        group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
        group.current.children[2].material.zoom =
            1 + data.range(1.15 / 3, 1 / 3) / 3;
        group.current.children[3].material.zoom =
            1 + data.range(1.15 / 3, 1 / 3) / 3;
    });

    return (
        <group ref={group}>
            <Image url={img_css} scale={[4, height, 1]} position={[-1, 0, 1]} />
            <Image url={img_css} scale={3} position={[2, 0, 1]} />
            <Image
                url={img_css}
                scale={[1, 3.5, 1]}
                position={[-2.3, -height, 2]}
            />
            <Image
                url={img_css}
                scale={[1, 2.7, 1]}
                position={[-1.4, -height - 0.7, 1]}
            />
            <Image
                url={img_css}
                scale={[1.4, 2, 1]}
                position={[1.3, -height - 0.3, 3.2]}
            />
        </group>
    );
}

function App() {
    return (
        <Canvas
            gl={{ antialias: false }}
            dpr={[1, 1.5]}
            style={{
                width: "100%",
                height: "100vh",
                backgroundColor: "transparent",
            }}
            className="canvas"
        >
            <Suspense fallback={null}>
                <ScrollControls
                    damping={1}
                    pages={3}
                    horizontal={false}
                    infinite={false}
                >
                    <Scroll>
                        <Images
                            style={{
                                backgroundColor: "transparent",
                            }}
                        />
                    </Scroll>
                    <Scroll html>
                        <Top
                            style={{
                                backgroundColor: "transparent",
                            }}
                        />
                    </Scroll>
                    {/* <Scroll html>
                        <h1
                            style={{
                                position: "absolute",
                                top: "60vh",
                                left: "1.5em",
                            }}
                        >
                            Be
                        </h1>
                        <h1
                            style={{
                                position: "absolute",
                                top: "140vh",
                                left: "40vw",
                            }}
                        >
                            Creative
                        </h1>
                    </Scroll> */}
                </ScrollControls>
            </Suspense>
        </Canvas>
    );
}

export default App;

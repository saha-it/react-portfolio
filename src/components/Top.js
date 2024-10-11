import { useRef, Suspense } from "react";
import { useThree, useFrame, Canvas } from "@react-three/fiber";
import { useScroll, Image, ScrollControls, Scroll } from "@react-three/drei";

import img_react from "../images/skills/react.png";
import img_calendar from "../images/top/calendar.png";
import img_laptop from "../images/top/laptop.png";
import img_purpose from "../images/top/purpose.png";
import img_idea from "../images/top/idea.png";
import img_struggle from "../images/top/struggle.png";
import img_task from "../images/top/task.png";
import Top from "./TopText";

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
            <Image url={img_react} scale={3} position={[0, 0.5, 2]} />
            {/* <Image url={img_calendar} scale={3} position={[2, -4, 1]} /> */}
            <Image
                url={img_laptop}
                scale={[2, 3.5, 1]}
                position={[1, -4, 1]}
                transparent
                opacity={0.4}
            />
            <Image
                url={img_purpose}
                scale={[3, 4, 1]}
                position={[-1.4, -height - 0.7, 1]}
                transparent
                opacity={0.2}
            />
            {/* <Image
                url={img_idea}
                scale={[1.4, 2, 1]}
                position={[1.3, -height - 1.4, 3.2]}
            /> */}
            {/* <Image
                url={img_struggle}
                scale={[1.4, 2, 1]}
                position={[0.3, -height - 5.3, 0]}
            /> */}
            <Image
                url={img_task}
                scale={[4, 6, 1]}
                position={[1.3, -height - 8, -2]}
                transparent
                opacity={0.4}
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
            }}
            className="canvas"
        >
            <Suspense fallback={null}>
                <ScrollControls
                    damping={1}
                    pages={3.8}
                    horizontal={false}
                    infinite={false}
                >
                    <Scroll>
                        <Images />
                    </Scroll>
                    <Scroll html>
                        <Top />
                    </Scroll>
                </ScrollControls>
            </Suspense>
        </Canvas>
    );
}

export default App;

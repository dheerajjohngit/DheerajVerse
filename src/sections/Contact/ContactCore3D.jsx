import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function AssistantGeometry({ attention }) {
    const root = useRef(null);
    const orbit = useRef(null);
    const eyes = useRef([]);
    const core = useRef(null);

    useFrame(({ clock, pointer }, delta) => {
        const elapsed = clock.elapsedTime;
        const focus = attention ? 1 : 0;

        if (root.current) {
            root.current.position.y = Math.sin(elapsed * 1.1) * 0.055;
            root.current.rotation.y +=
                (pointer.x * 0.15 + focus * 0.1 - root.current.rotation.y) *
                Math.min(delta * 2.8, 1);
            root.current.rotation.x +=
                (-pointer.y * 0.08 - root.current.rotation.x) *
                Math.min(delta * 2.8, 1);
        }

        if (orbit.current) {
            orbit.current.rotation.z = elapsed * 0.2;
            orbit.current.rotation.x = 0.48 + Math.sin(elapsed * 0.38) * 0.045;
        }

        const eyePulse = 0.82 + (Math.sin(elapsed * 2.2) + 1) * 0.1 + focus * 0.14;
        eyes.current.forEach((eye) => {
            if (eye) eye.scale.set(1, eyePulse, 1);
        });

        if (core.current) {
            const pulse = 0.92 + (Math.sin(elapsed * 2.5) + 1) * 0.12 + focus * 0.12;
            core.current.scale.setScalar(pulse);
        }
    });

    const eyeRef = (index) => (element) => {
        eyes.current[index] = element;
    };

    return (
        <>
            <ambientLight intensity={0.95} />
            <pointLight position={[2, 2, 3]} color="#c5a5ff" intensity={17} distance={8} />
            <pointLight position={[-2, -1, -2]} color="#713cff" intensity={11} distance={7} />
            <group ref={root}>
                <mesh position={[0, -0.58, 0]} scale={[0.54, 0.3, 0.43]}>
                    <sphereGeometry args={[1, 28, 28]} />
                    <meshStandardMaterial
                        color="#65547f"
                        metalness={0.82}
                        roughness={0.27}
                        emissive="#2c174e"
                        emissiveIntensity={0.55}
                    />
                </mesh>
                <mesh position={[0, -0.4, 0.1]} scale={[0.22, 0.18, 0.22]}>
                    <sphereGeometry args={[1, 24, 24]} />
                    <meshStandardMaterial color="#b8a2dc" metalness={0.8} roughness={0.2} />
                </mesh>

                {[-1, 1].map((side) => (
                    <mesh key={side} position={[side * 0.66, 0.05, 0]} scale={[0.2, 0.24, 0.18]}>
                        <sphereGeometry args={[1, 24, 24]} />
                        <meshStandardMaterial color="#9883ba" metalness={0.78} roughness={0.22} />
                    </mesh>
                ))}

                <mesh position={[0, 0.12, 0]} scale={[0.75, 0.72, 0.68]}>
                    <sphereGeometry args={[1, 40, 40]} />
                    <meshStandardMaterial
                        color="#b6a7d0"
                        metalness={0.8}
                        roughness={0.2}
                        emissive="#513278"
                        emissiveIntensity={0.26}
                    />
                </mesh>
                <mesh position={[0, 0.06, 0.49]} scale={[0.57, 0.46, 0.25]}>
                    <sphereGeometry args={[1, 36, 32]} />
                    <meshStandardMaterial
                        color="#090813"
                        metalness={0.62}
                        roughness={0.16}
                        emissive="#160e2a"
                        emissiveIntensity={0.4}
                    />
                </mesh>

                {[-1, 1].map((side, index) => (
                    <mesh
                        key={side}
                        ref={eyeRef(index)}
                        position={[side * 0.21, 0.08, 0.706]}
                    >
                        <sphereGeometry args={[0.07, 20, 20]} />
                        <meshStandardMaterial
                            color="#f0e3ff"
                            emissive="#ad62ff"
                            emissiveIntensity={3.5}
                            toneMapped={false}
                        />
                    </mesh>
                ))}

                <mesh position={[0, 0.68, 0.02]} scale={[0.11, 0.08, 0.11]}>
                    <sphereGeometry args={[1, 20, 20]} />
                    <meshStandardMaterial
                        color="#dfcaff"
                        emissive="#9b55ff"
                        emissiveIntensity={2.5}
                        toneMapped={false}
                    />
                </mesh>

                <mesh ref={core} position={[0, -0.55, 0.34]}>
                    <sphereGeometry args={[0.115, 24, 24]} />
                    <meshStandardMaterial
                        color="#eadbff"
                        emissive="#9b4dff"
                        emissiveIntensity={3}
                        toneMapped={false}
                    />
                </mesh>
                <mesh position={[0, -0.55, 0.34]} rotation={[0.2, 0, 0]}>
                    <torusGeometry args={[0.19, 0.009, 8, 40]} />
                    <meshBasicMaterial color="#b78aff" transparent opacity={0.65} />
                </mesh>
            </group>

            <mesh ref={orbit} position={[0, 0.02, 0]} rotation={[0.48, 0, -0.22]}>
                <torusGeometry args={[1.08, 0.012, 8, 96]} />
                <meshBasicMaterial color="#a879ff" transparent opacity={0.82} />
            </mesh>
            <mesh position={[0, -0.94, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.15, 0.58, 1]}>
                <circleGeometry args={[0.8, 40]} />
                <meshBasicMaterial color="#8e52ff" transparent opacity={0.13} />
            </mesh>
        </>
    );
}

function ContactCore3D({ attention }) {
    return (
        <Canvas
            camera={{ position: [0, 0, 3.85], fov: 42 }}
            dpr={[1, 1.5]}
            gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
        >
            <AssistantGeometry attention={attention} />
        </Canvas>
    );
}

export default ContactCore3D;

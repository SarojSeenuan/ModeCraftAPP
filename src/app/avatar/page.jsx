'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import classes from './page.module.css';

export default function AvatarRoomPage() {
    return (
        <section>
            <Canvas
                camera={{
                    position: [ 3, 3, 3 ], // Set the camera position
                }}
            >
                <OrbitControls />

                <mesh>
                    <boxGeometry args={[ 0.5, 0.5, 0.5 ]} />
                    <meshNormalMaterial />
                </mesh>
            </Canvas>
        </section>
    );
}

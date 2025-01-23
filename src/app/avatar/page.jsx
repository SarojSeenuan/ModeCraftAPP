'use client'
import { Canvas } from '@react-three/fiber';
import Scene from '../../components/avatar-room/scene';
import classes from './page.module.css';

export default function AvatarRoomPage() {
    return (
        <section className={classes.section}>
            <Canvas
                camera={{
                    position: [ 0, 0, 0.0001 ],
                }}
            >
                <Scene />
            </Canvas>
        </section>
    );
}

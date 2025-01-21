import { CameraControls, Environment, Gltf } from '@react-three/drei';
import { Avatar } from './avatar';
import { degToRad } from 'three/src/math/MathUtils';

const Scene = () => {
    return (
        <>
            <CameraManager />
            <Environment preset="sunset" />
            <ambientLight intensity={0.8} color="pink" />
            <Avatar avatar={"hitori"} position={[ -1.3, -1.3, -2 ]} scale={0.60} rotation-y={degToRad(30)} />
            <Avatar avatar={"jinx"} position={[ -2.3, -1.3, -0.7 ]} scale={0.9} rotation-y={degToRad(45)} />
            <Gltf src="/models/audio_scene.glb" position={[ -12.9, -1.3, -0.4 ]} />
        </>
    );
};

const CameraManager = () => {
    return <CameraControls
        minZoom={1}
        maxZoom={3}
        polarRotateSpeed={-0.3}
        azimuthRotateSpeed={-0.3}
        mouseButtons={{
            left: 1,
            wheel: 16,
        }}
        touches={{
            one: 32,
            two: 512,
        }}
    />;
};


export default Scene;

import { useGLTF } from '@react-three/drei'

export const avatars = [ "hitori", "jinx", ]

export const Avatar = ({ avatar, ...props }) => {
    const { scene } = useGLTF(`/models/avatar_${avatar}.glb`);
    return (
        <group {...props}>
            <primitive object={scene} />
        </group>
    )
}

avatars.forEach((avatar) => {
    useGLTF.preload(`/models/avatar_${avatar}.glb`)
})
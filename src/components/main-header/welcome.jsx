'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

import Link from 'next/link';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, CameraControls, OrbitControls, } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import classes from './welcome.module.css';
import { useEffect, useRef } from 'react';


export const ObjectComponent = () => {
    const objectStar = useGLTF(`/models/objectstar.glb`);
    const objectCoat1 = useGLTF(`/models/coat1.glb`);
    const objectCoat2 = useGLTF(`/models/coat2.glb`);
    const starRef = useRef(null)

    useEffect(() => {
        if (!starRef) return

        gsap.timeline({
            scrollTrigger: {
                trigger: '#section1',
                start: "top bottom",
                end: "top top",
                scrub: true,
            }
        })


            .to(
                starRef.current?.rotation,
                {
                    x: Math.PI,
                    ease: 'power2.inOut'
                }, "<"
            ).to(
                starRef.current?.rotation,
                {
                    y: Math.PI - 0.4,
                    ease: 'power2.inOut'
                }, "<"
            ).to(
                starRef.current?.position,
                {
                    x: -4.3,
                    y: -1.7,
                    ease: 'power2.inOut'
                }, "<"
            ).to(
                starRef.current?.scale,
                {
                    x: 0.3,
                    y: 0.3,
                    z: 0.3,
                    ease: 'power2.inOut'
                },
            )

        gsap.timeline({
            scrollTrigger: {
                trigger: '#section2',
                start: "top bottom",
                end: "top top",
                scrub: true,
            }
        })

            .to(
                starRef.current?.rotation,
                {
                    x: 0.3,
                    ease: 'power2.inOut'
                },
            ).to(
                starRef.current?.rotation,
                {
                    y: Math.PI + 0.8,
                    ease: 'power2.inOut'
                }, "<"
            ).to(
                starRef.current?.position,
                {
                    x: 2.5,
                    ease: 'power2.inOut'
                }, "<"
            ).to(
                starRef.current?.scale,
                {
                    x: 0.5,
                    y: 0.5,
                    z: 0.5,
                    ease: 'power2.inOut'
                },
            )

        gsap.timeline({
            scrollTrigger: {
                trigger: '#section3',
                start: "top bottom",
                end: "top top",
                scrub: true,
            }
        })

            .to(
                starRef.current?.rotation,
                {
                    x: 0,
                    ease: 'power2.inOut'
                },
            ).to(
                starRef.current?.rotation,
                {
                    y: Math.PI - 0.4,
                    ease: 'power2.inOut'
                }, "<")

    })


    return (
        <group >
            <mesh ref={starRef} position={[ 0, -1.5, 0 ]} scale={[ 0.7, 0.7, 0.7 ]}>
                <primitive object={objectStar.scene} />
            </mesh>
            {/* <mesh position={[ 1.5, 0.7, 0 ]} scale={[ 0.5, 0.5, 0.5 ]}>
                <primitive object={objectCoat1.scene} />
            </mesh> */}
            {/* <mesh position={[ -4, -3, 0 ]} scale={[ 0.5, 0.5, 0.5 ]}>
                <primitive object={objectCoat2.scene} />
            </mesh> */}
        </group>
    );
};





export const Scene = ({ scrollY }) => {
    return (
        <motion.div initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }} // 
            transition={{ duration: 1, ease: "easeOut" }} className={classes.scene}>
            <Canvas camera={{ position: [ 0, 0, 5 ], fov: 60 }}>
                {/* <CameraManager /> */}
                <directionalLight intensity={2} position={[ 1, 2, 3 ]} />
                <ObjectComponent />
                {/* <axesHelper scale={5} /> */}
                <OrbitControls enableZoom={false} />

            </Canvas>
        </motion.div>

    );
};

export default function WelcomePage() {
    return (
        <>
            <section className={classes.welcome}>
                <motion.div
                    className={classes.welcomeContent}
                    initial={{ opacity: 0, y: -20 }} // Starting animation state
                    animate={{ opacity: 1, y: 0 }} // End animation state
                    transition={{ duration: 1, ease: "easeOut" }} // Animation timing
                >
                    <h1>MODE CRAFT WORLD</h1>
                    <motion.div
                        className={classes.action}
                        initial={{ opacity: 0, y: 10 }} // Starting animation for the button
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }} // Delayed transition
                    >
                        <Link href={`/showcase`}>GET STARTED</Link>
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
}

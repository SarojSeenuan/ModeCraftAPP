"use client";
import React, {
    useEffect,
    useRef,
    useState,
    useMemo
} from "react";
import { createNoise3D } from "simplex-noise";
import styles from "./wavy-background.module.css";

const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

export const WavyBackground = ({
    children,
    className,
    containerClassName,
    colors,
    waveWidth,
    backgroundFill,
    blur = 10,
    speed = "fast",
    waveOpacity = 0.5,
    ...props
}) => {
    const canvasRef = useRef(null);
    const [ isSafari, setIsSafari ] = useState(false);

    // Memoize noise creation to prevent unnecessary re-creations
    const noise = useMemo(() => createNoise3D(), []);

    const getSpeed = () => {
        switch (speed) {
            case "slow":
                return 0.001;
            case "fast":
                return 0.002;
            default:
                return 0.001;
        }
    };

    const waveColors = useMemo(() =>
        colors ?? [
            "#38bdf8",
            "#818cf8",
            "#c084fc",
            "#e879f9",
            "#22d3ee",
        ],
        [ colors ]
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let animationFrameId;

        const init = () => {
            const w = ctx.canvas.width = window.innerWidth;
            const h = ctx.canvas.height = window.innerHeight;
            ctx.filter = `blur(${blur}px)`;
            let nt = 0;

            const drawWave = (n) => {
                nt += getSpeed();
                for (let i = 0; i < n; i++) {
                    ctx.beginPath();
                    ctx.lineWidth = waveWidth || 50;
                    ctx.strokeStyle = waveColors[ i % waveColors.length ];
                    for (let x = 0; x < w; x += 5) {
                        const y = noise(x / 800, 0.3 * i, nt) * 100;
                        ctx.lineTo(x, y + h * 0.5);
                    }
                    ctx.stroke();
                    ctx.closePath();
                }
            };

            const render = () => {
                ctx.fillStyle = backgroundFill || "black";
                ctx.globalAlpha = waveOpacity || 0.5;
                ctx.fillRect(0, 0, w, h);
                drawWave(5);
                animationFrameId = requestAnimationFrame(render);
            };

            render();
        };

        init();

        // Cleanup function
        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [ noise, waveColors, getSpeed, blur, waveWidth, backgroundFill, waveOpacity ]);

    // Safari detection
    useEffect(() => {
        const checkSafari = () => {
            if (typeof window !== "undefined") {
                const isSafariBrowser =
                    navigator.userAgent.includes("Safari") &&
                    !navigator.userAgent.includes("Chrome");
                setIsSafari(isSafariBrowser);
            }
        };

        checkSafari();
    }, []);

    return (
        <div
            className={cn(
                styles.wavyBackgroundContainer,
                containerClassName
            )}
            {...props}
        >
            <canvas
                ref={canvasRef}
                className={cn(
                    styles.wavyBackground,
                    className
                )}
            />
            {children}
        </div>
    );
};

// Add a default export
export default WavyBackground;
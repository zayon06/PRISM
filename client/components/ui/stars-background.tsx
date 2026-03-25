'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

const StarsBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [stars, setStars] = useState<{ x: number, y: number, size: number, opacity: number }[]>([]);
    
    // Mouse position relative to center
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 40, stiffness: 200 };
    const smoothedX = useSpring(mouseX, springConfig);
    const smoothedY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Generate stars
        const newStars = Array.from({ length: 150 }).map(() => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.5 + 0.2
        }));
        setStars(newStars);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="absolute inset-0 overflow-hidden pointer-events-none z-0"
        >
            <motion.div 
                style={{ 
                    x: useTransform(smoothedX, x => x * -20), 
                    y: useTransform(smoothedY, y => y * -20),
                    scale: 1.05
                }}
                className="absolute inset-0 w-full h-full"
            >
                {stars.map((star, i) => (
                    <div 
                        key={i}
                        className="absolute rounded-full bg-white animate-pulse"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            opacity: star.opacity,
                            animationDelay: `${Math.random() * 4}s`,
                            animationDuration: `${Math.random() * 3 + 2}s`
                        }}
                    ></div>
                ))}
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black"></div>
        </div>
    );
};

export default StarsBackground;

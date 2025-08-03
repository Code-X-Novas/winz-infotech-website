import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function TextAnimation({ className = '' }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const pullupVariant = {
        initial: { y: 10, opacity: 0 },
        animate: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.05,
            },
        }),
    };

    // Split after "Powered"
    const firstLine = 'Driven by purpose, Powered';
    const secondLine = 'by design, Delivered with love.';

    // Keep track of total index
    let globalIndex = 0;

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center flex-wrap text-center">
            {[firstLine, secondLine].map((line, lineIdx) => (
                <div
                    key={lineIdx}
                    className={cn(
                        'flex flex-wrap justify-center',
                        lineIdx === 1 ? 'lg:ml-2' : ''
                    )}
                >
                    {line.split('').map((char, i) => {
                        const animatedChar = (
                            <motion.div
                                key={globalIndex}
                                ref={ref}
                                variants={pullupVariant}
                                initial="initial"
                                animate={isInView ? 'animate' : ''}
                                custom={globalIndex}
                                className={cn(
                                    'text-[20px] sm:text-4xl text-black font-medium lg:text-6xl leading-snug',
                                    className
                                )}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </motion.div>
                        );
                        globalIndex++;
                        return animatedChar;
                    })}
                </div>
            ))}
        </div>
    );
}

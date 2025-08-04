import { useRef } from 'react';
import { gsap } from 'gsap';

const TextHover = ({ text, customClass="" }) => {
    const listRef = useRef(null);
    const tlRef = useRef(null);
    const slideHeight = 20;
    const duration = 0.3;

    const handleMouseEnter = () => {
        if (tlRef.current) tlRef.current.kill(); // reset timeline if already exists
        tlRef.current = gsap.timeline();
        tlRef.current.to(listRef.current, {
            y: -slideHeight,
            duration,
            ease: 'power2.out',
        });
    };

    const handleMouseLeave = () => {
        if (tlRef.current) tlRef.current.kill();
        gsap.to(listRef.current, {
            y: 0,
            duration,
            ease: 'power2.out',
        });
    };

    return (
        <div className={`lg:px-8 px-4 lg:py-3 py-2 ${customClass}`}>
            <div
                className={`h-[20px] overflow-hidden ${customClass} text-center w-full max-w-sm mx-auto cursor-pointer`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <ul ref={listRef} className="list-none m-0 p-0">
                    <li className="v-slide leading-[20px]">{text}</li>
                    <li className="v-slide leading-[20px]">{text}</li>
                </ul>
            </div>
        </div>
    );
};

export default TextHover;

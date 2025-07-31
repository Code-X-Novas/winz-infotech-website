import { useEffect, useRef } from "react";

const About = () => {
    const textRef = useRef(null);
    
    useEffect(() => {
        const textElement = textRef.current;
        const originalText = textElement.innerText;

        // Clear and insert spans
        textElement.innerHTML = "";
        for (let char of originalText) {
            const span = document.createElement("span");
            span.textContent = char;
            span.className = "transition-colors duration-300 text-gray-600 text-xl";
            textElement.appendChild(span);
        }

        const spans = textElement.querySelectorAll("span");

        const handleScroll = () => {
            const scrollY = window.scrollY;
            spans.forEach((span, i) => {
                if (scrollY >= (i + 1) * 10) {
                span.classList.add("text-green-500");
                span.classList.remove("text-gray-600");
                } else {
                span.classList.remove("text-green-500");
                span.classList.add("text-gray-600");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg w-full max-w-3xl">
                <h2 className="text-2xl font-bold text-center mb-4">Modern Text Scroll Animation</h2>
                <p ref={textRef} className="leading-relaxed flex flex-wrap gap-[1px]">Heyyy</p>
            </div>
        </div>
    )
}

export default About
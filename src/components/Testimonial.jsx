import { useEffect, useState, useRef } from "react";

const testimonials = [
    {
        name: "Riya",
        company: "HeyChef, UAE",
        avatar: "/avatars/Riya.png",
        text: "I approached Winz Infotech with a basic Instagram page and no clear branding. Within 3 months, we had a premium identity, 40% more bookings, and better customer retention. Their team understood my salon's vibe and helped me raise the average order value significantly.",
    },
    {
        name: "Raj",
        company: "Dolce Vito, Poland",
        avatar: "/avatars/Raj.png",
        text: "Before working with Winz Infotech, I was juggling everything marketing, content, and trying to grow my business with zero direction. The team stepped in, understood my goals like it was their own, and built a complete strategy that worked from day one. Within the first month, we saw a massive boost in engagement and actual leads. But more than numbers, what stood out was their commitment, clarity, and no- fluff attitude. I never felt like 'just another client' they made me feel like a partner. If you want real growth with real people, Winz Infotech is the team to bet on.",
    },
    {
        name: "Megha",
        company: "Giani's, India",
        avatar: "/avatars/Megha.png",
        text: "Working with Winz Infotech was a game-changer for my business. They understood my goals and delivered beyond expectations both in quality and results.",
    },
    {
        name: "Priya",
        company: "HiFyve, Singapore",
        avatar: "/avatars/Priya.png",
        text: "I have worked with agencies before, but Winz Infotech felt different. They truly listened. As a dietician, I wanted to educate and engage not just promote. Their content was aligned with my voice, and the increase in leads and inquiries felt both natural and high-quality.",
    },
    {
        name: "Ananya",
        company: "HiFyve, Singapored",
        avatar: "/avatars/Priya.png",
        text: "Before working with Winz Infotech, I had no idea how to attract clients online. I was posting content but wasn't getting any traction. Their team helped me refine my personal brand, create value-based reels, and launch lead magnets that brought real engagement. Within weeks, I started getting class bookings and DMs asking about my programs. They made digital growth feel simple and stress-free so I could focus on teaching, not chasing clients.",
    },
    {
        name: "Kunal",
        company: "Phases Skincare, India",
        avatar: "/avatars/Kunal.png",
        text: "The branding and digital assets Winz Infotech created helped us stand out in a competitive architecture market. Professional, creative, and deadline-oriented.",
    },
    {
        name: "Neha",
        company: "Crêpe Nation",
        avatar: "/avatars/Neha.png",
        text: "I was active on Instagram but lacked structure. Winz Infotech stepped in with a content plan, engaging reels, and lead generation campaigns that brought real inquiries. I now get DMs daily from potential clients. More than marketing, they gave my personal brand clarity.",
    },
    {
        name: "Manav",
        company: "Dolce Vito, Poland",
        avatar: "/avatars/Kunal.png",
        text: "We had a solid gym setup but were struggling to fill slots and build local awareness. Winz Infotech transformed our presence from bold creatives and result-driven campaigns to a new website that converts. Within 120 days, we doubled our memberships and started getting daily inquiries. Their team understood the fitness market and knew exactly how to target our audience. It's not just marketing, it's momentum. And we finally have it.",
    },
    {
        name: "Ayush",
        company: "Crêpe Nation",
        avatar: "/avatars/Ayush.png",
        text: "As a founder, I was wearing too many hats product, operations, and marketing. I needed a team that gets D2C. Winz Infotech stepped in and handled everything from performance ads to influencer collabs and UGC videos. Within 3 months, our revenue 5Xed, CAC dropped by 40%, and we finally had creatives that converted. They don't just run campaigns, they think like brand owners. That's rare, and that's why I'm sticking with them.",
    },
];

const Testimonial = () => {

    const [columnCount, setColumnCount] = useState(1);
    const mobileScrollRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const updateColumnCount = () => {
            if (window.innerWidth < 450) {
                setColumnCount(1);
            } else if (window.innerWidth < 769) {
                setColumnCount(2);
            } else {
                setColumnCount(3);
            }
        };

        updateColumnCount(); // initial run
        window.addEventListener("resize", updateColumnCount);
        return () => window.removeEventListener("resize", updateColumnCount);
    }, []);

    const columns = Array.from({ length: columnCount }, () => []);
    testimonials.forEach((t, i) => {
        columns[i % columnCount].push(t);
    });

    // Auto-scroll for mobile testimonials
    useEffect(() => {
        if (!isHovered && mobileScrollRef.current) {
            const interval = setInterval(() => {
                const container = mobileScrollRef.current;
                const cardWidth = container.children[0]?.offsetWidth || 0;
                const gap = 24; // space-x-6 = 24px
                const scrollDistance = cardWidth + gap;

                setCurrentIndex((prevIndex) => {
                    const nextIndex = (prevIndex + 1) % testimonials.length;

                    // Smooth scroll to next testimonial
                    container.scrollTo({
                        left: nextIndex * scrollDistance,
                        behavior: 'smooth'
                    });

                    return nextIndex;
                });
            }, 3000); // Auto-scroll every 3 seconds

            return () => clearInterval(interval);
        }
    }, [isHovered, testimonials.length]);
    
    return (
        <div className="max-w-[1500px] mx-auto sm:px-4 px-6 sm:pt-12 pt-5 relative">
            {/* Background circle gradient */}
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[70%] w-[60%] 
                bg-[conic-gradient(from_62deg_at_50%_50%,_rgba(252,138,16,0.25)_0deg,_rgba(254,226,195,0.25)_187.768deg,_rgba(253,197,135,0.25)_272.03deg,_rgba(255,255,255,0.25)_360deg)] 
                rounded-full blur-lg bg-cover z-0 pointer-events-none"
                style={{
                    maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                }}
            />

            {/* Desktop/Tablet Testimonial */}
            <div className="sm:flex hidden flex-row relative z-[1] lg:gap-6 gap-3">
                {columns.map((column, colIndex) => (
                    <div
                        key={colIndex}
                        className={`flex flex-col gap-6 ${colIndex === 1 ? "lg:basis-[40%]" : "lg:basis-[30%]"
                            }`}
                    >
                        {column.map((t, i) => (
                            <div
                                key={i}
                                className={`lg:p-6 p-4 ${i === 4 && columnCount === 2 ? "hidden" : "block"} rounded-lg shadow-[0_0_7.6px_0_rgba(0,0,0,0.09)] break-inside-avoid bg-white`}
                            >
                                <p className="text-gray-800 mb-4 lg:text-sm text-xs leading-relaxed">
                                    “{t.text}”
                                </p>
                                <div className="flex items-center gap-4 border-t pt-4 mt-4">
                                    <img
                                        src={t.avatar}
                                        alt={t.name}
                                        className="lg:size-10 size-7 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-medium lg:text-base text-sm text-gray-900">{t.name}</p>
                                        <p className="text-gray-600 lg:text-sm text-xs">{t.company}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Mobile Testimonials */}
            <div 
                ref={mobileScrollRef}
                className="flex sm:hidden space-x-6 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
            >
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className="snap-center flex-shrink-0 w-[85vw] h-fit bg-white shadow-md p-6"
                    >
                        <p className="text-gray-700 text-sm leading-relaxed line-clamp-6 mb-4">“{t.text}”</p>
                        <div className="flex items-center gap-4 mt-4 border-t pt-4">
                            <img
                                src={t.avatar}
                                alt={t.name}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-semibold text-gray-900">{t.name}</p>
                                <p className="text-sm text-gray-600">{t.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;

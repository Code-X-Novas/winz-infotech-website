import React, { useEffect, useState } from "react";

const testimonials = [
    {
        name: "Riya",
        company: "HeyChef, UAE",
        avatar: "/avatars/pranav.png",
        text: "I approached Winz Infotech with a basic Instagram page and no clear branding. Within 3 months, we had a premium identity, 40% more bookings, and better customer retention. Their team understood my salon's vibe and helped me raise the average order value significantly.",
    },
    {
        name: "Raj",
        company: "Dolce Vito, Poland",
        avatar: "/avatars/seema.png",
        text: "Before working with Winz Infotech, I was juggling everything marketing, content, and trying to grow my business with zero direction. The team stepped in, understood my goals like it was their own, and built a complete strategy that worked from day one. Within the first month, we saw a massive boost in engagement and actual leads. But more than numbers, what stood out was their commitment, clarity, and no- fluff attitude. I never felt like 'just another client' they made me feel like a partner. If you want real growth with real people, Winz Infotech is the team to bet on.",
    },
    {
        name: "Megha",
        company: "Giani's, India",
        avatar: "/avatars/furqan.png",
        text: "Working with Winz Infotech was a game-changer for my business. They understood my goals and delivered beyond expectations both in quality and results.",
    },
    {
        name: "Priya",
        company: "HiFyve, Singapore",
        avatar: "/avatars/anandpreet.png",
        text: "I have worked with agencies before, but Winz Infotech felt different. They truly listened. As a dietician, I wanted to educate and engage not just promote. Their content was aligned with my voice, and the increase in leads and inquiries felt both natural and high-quality.",
    },
    {
        name: "Ananya",
        company: "HiFyve, Singapored",
        avatar: "/avatars/marcin.png",
        text: "Before working with Winz Infotech, I had no idea how to attract clients online. I was posting content but wasn't getting any traction. Their team helped me refine my personal brand, create value-based reels, and launch lead magnets that brought real engagement. Within weeks, I started getting class bookings and DMs asking about my programs. They made digital growth feel simple and stress-free so I could focus on teaching, not chasing clients.",
    },
    {
        name: "Kunal",
        company: "Phases Skincare, India",
        avatar: "/avatars/akhilesh.png",
        text: "The branding and digital assets Winz Infotech created helped us stand out in a competitive architecture market. Professional, creative, and deadline-oriented.",
    },
    {
        name: "Neha",
        company: "Crêpe Nation",
        avatar: "/avatars/sannjana.png",
        text: "I was active on Instagram but lacked structure. Winz Infotech stepped in with a content plan, engaging reels, and lead generation campaigns that brought real inquiries. I now get DMs daily from potential clients. More than marketing, they gave my personal brand clarity.",
    },
    {
        name: "Manav",
        company: "Dolce Vito, Poland",
        avatar: "/avatars/pranav.png",
        text: "We had a solid gym setup but were struggling to fill slots and build local awareness. Winz Infotech transformed our presence from bold creatives and result-driven campaigns to a new website that converts. Within 120 days, we doubled our memberships and started getting daily inquiries. Their team understood the fitness market and knew exactly how to target our audience. It's not just marketing, it's momentum. And we finally have it.",
    },
    {
        name: "Ayush",
        company: "Crêpe Nation",
        avatar: "/avatars/seema.png",
        text: "As a founder, I was wearing too many hats product, operations, and marketing. I needed a team that gets D2C. Winz Infotech stepped in and handled everything from performance ads to influencer collabs and UGC videos. Within 3 months, our revenue 5Xed, CAC dropped by 40%, and we finally had creatives that converted. They don't just run campaigns, they think like brand owners. That's rare, and that's why I'm sticking with them.",
    },
];

const Testimonial = () => {

    const [columnCount, setColumnCount] = useState(1);

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

    return (
        <div className="max-w-7xl mx-auto sm:px-4 px-6 pt-12">
            <div className="flex flex-row lg:gap-6 gap-3">
                {columns.map((column, colIndex) => (
                    <div
                        key={colIndex}
                        className={`flex flex-col gap-6 ${
                            colIndex === 1 ? "lg:basis-[40%] " : "lg:basis-[30%] "
                        }`}
                    >
                        {column.map((t, i) => (
                            <div
                                key={i}
                                className={`bg-white lg:p-6 p-4 ${i === 4 && columnCount === 2 ? "hidden" : "block"} rounded-lg shadow-md break-inside-avoid`}
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
        </div>
    );
};

export default Testimonial;

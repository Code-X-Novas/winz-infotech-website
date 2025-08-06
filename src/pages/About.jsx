import React, { useEffect } from "react";
import { motion } from "framer-motion";
import workImage from "../img/work.png";
import work1Image from "../img/work1.png";
import Footer from "../components/Footer";
import OrangeCard from "../components/OrangeCard";

const missionSteps = [
    {
        title: "We’re On A Mission",
        description:
            "to replace confusion and chaos with clarity, consistency, and conversions.",
    },
    {
        title: "No More Running Behind Designers",
        description:
            "or guessing what to post, or spending on marketing that doesn’t move the needle.",
    },
    {
        title: "We Simplify The Digital Hustle",
        description:
            "with clear strategies, fast execution, and creative work that brings real business results.",
    },
    {
        title: "Whether You’re Just Starting Or Scaling Fast",
        description:
            "we’re here to make your brand look sharp, smart, and sell more every single day.",
    },
];

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white text-black overflow-x-hidden flex flex-col min-h-screen w-full mt-20 lg:pt-10 pt-5">
            {/* Main content */}
            <main className="flex-1 bg-white">
                {/* Background Image */}
                <div className="relative">
                    <div className="fixed top-20 left-0 w-full h-[350px] sm:h-[400px] md:h-[550px] z-0">
                        <img
                            src={workImage}
                            alt="Work"
                            className="w-full h-full object-cover p-4 sm:p-8 md:p-16"
                        />
                    </div>

                    {/* Who We Are */}
                    <div className="relative z-10 mt-[300px] sm:mt-[400px] md:mt-[530px] p-4 sm:p-6 md:p-10 py-10 bg-white/80 backdrop-blur-sm">
                        <h2 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-medium mb-3 px-2 sm:px-4 md:px-10">
                            Who we <span className="text-[#F68D13] font-medium">are</span>
                        </h2>
                        <div className="w-full flex flex-col space-y-4 text-gray-800 md:text-[17px] text-sm font-normal md:leading-tight px-2 sm:px-4 md:px-10">
                            <p>
                                We're{" "}
                                <span className="text-[#F68D13] font-semibold">Winz Infotech</span>, your no-nonsense digital growth partner.
                            </p>
                            <p>
                                We don't sell vanity metrics. we{" "}
                                <span className="text-black font-semibold">build brand</span>{" "}
                                visibility, create{" "}
                                <span className="text-black font-semibold">scroll-stopping content</span>{" "}
                                and turn your digital presence into a{" "}
                                <span className="text-black font-semibold">sales machine.</span>
                            </p>
                            <p>
                                Our team blends sharp strategy with stunning design to give you
                                what matters: {" "}
                                <span className="text-black font-semibold">More leads. Better clients. Real results.</span>{" "}
                            </p>
                            <p>
                                From brand identity to high-converting campaigns, everything we
                                do is built to grow your business{" "}
                                <span className="text-black font-semibold">fast, smart,</span> and{" "}
                                <span className="text-black font-semibold">beautifully.</span>
                            </p>
                            <p>
                                If you're tired of "
                                <span className="text-black font-semibold">So-called experts</span>"
                                that overpromise and underdeliver, you've just found the right
                                team that gets things done.
                            </p>
                        </div>

                    </div>

                    {/* Content */}
                    <div className="relative z-10 bg-white">
                        {/* Founder Section */}
                        <div className="flex flex-col py-12 bg-gray-100">
                            {/* Heading */}
                            <div className="mb-8 md:mb-10 text-center md:text-left px-4 md:px-12">
                                <h2 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-medium mb-3 px-2 sm:px-6 text-left">
                                    From the <span className="text-[#F68D13] font-medium">Founder</span>
                                </h2>
                                <p className="text-gray-700 w-full mx-auto md:mx-0 md:text-[17px] text-sm font-normal md:leading-9 leading-6 sm:px-6 px-2  text-left pr-4">
                                    A glimpse into the scale, trust, and diversity we've built over
                                    the years — fueled by strategy, design, and measurable results.
                                </p>
                            </div>

                            {/* Founder Quote */}
                            <div className="flex flex-col md:flex-row gap-6 lg:gap-10 items-start px-4 sm:px-6 md:px-10">
                                <div className="md:w-1/2 w-full flex justify-center xl:-ml-5">
                                    <img
                                        src={work1Image}
                                        alt="Founder"
                                        className="shadow-lg w-[90%] sm:w-[80%] lg:w-[85%] h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                                    />
                                </div>

                                <div className="md:w-1/2 w-full flex flex-col space-y-4 text-gray-800 lg:text-[17px] text-sm font-normal leading-tigh px-2 sm:px-4 md:px-10">
                                    <p>
                                        <span className="text-black font-semibold md:text-2xl text-lg">“</span>Most agencies
                                        sell creativity. We sell{" "}
                                        <span className="text-black font-semibold">growth.</span>
                                    </p>
                                    <p>
                                        I built Winz Infotech for founders who are done with delays,
                                        overpriced retainers, and social media that looks good but
                                        delivers nothing.
                                    </p>
                                    <p>
                                        We're here for businesses that want{" "}
                                        <span className="text-black font-semibold">
                                            speed, clarity, and results
                                        </span>{" "}
                                        — not vague strategies and endless revisions.
                                    </p>
                                    <p>
                                        At Winz Infotech, we don't babysit your brand, we build it. We
                                        think fast, design smart, and execute like your business
                                        depends on it — because it does.
                                    </p>
                                    <p>
                                        If you're tired of the usual agency games, let's talk.
                                        <span className="text-black font-semibold md:text-2xl text-lg">”</span>
                                    </p>
                                    <p className="text-[#F68D13] font-semibold mt-1 text-lg sm:text-xl lg:text-3xl ">
                                        – Anuj Gohil
                                        <br />
                                        <span className="font-thin">Founder, Winz Infotech</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="px-4 sm:px-6 md:px-10 md:py-20 py-10">
                            <h2 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-medium mb-5 sm:px-4 px-2 md:px-12">
                                Our <span className="text-[#F68D13] font-medium">Vision</span>
                            </h2>
                            <p className="px-2 sm:px-4 md:px-12 md:-mb-2 md:text-base text-sm text-[#F68D13] font-semibold">
                                Marketing that's clear. Creatives that convert. Growth you can
                                see.
                            </p>
                            <div className="w-full space-y-2 flex flex-col text-gray-800 md:text-[17px] text-sm font-normal md:leading-9 leading-6 px-2 sm:px-4 md:px-12">
                                <p>
                                    To fix what most agencies broke{" "}
                                    <span className="text-black font-medium">
                                        — trust, speed, and real results.
                                    </span>
                                </p>
                                <p>
                                    We're here to set a new standard where businesses no longer
                                    waste time on delayed creatives, recycled strategies, or fake
                                    performance reports.
                                </p>
                                <p>No excuses. No fluff. Just a partner that delivers every single time.</p>
                            </div>
                        </div>

                        {/* Mission */}
                        <div className="bg-gray-100 px-6 sm:px-10 md:px-20 pt-10 md:py-20 py-10 overflow-hidden">
                            <div className="flex flex-col md:flex-row items-start justify-between gap-8 max-w-7xl mx-auto">
                                {/* Left Heading */}
                                <div className="w-full md:w-1/2 flex items-start justify-start text-left sticky top-0 self-start">
                                    <motion.h2
                                        initial={{ x: -50, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.6, type: "spring" }}
                                        viewport={{ once: true }}
                                        className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-medium leading-tight break-words"
                                    >
                                        Our <span className="text-[#F68D13] font-medium">Mission</span>
                                    </motion.h2>
                                </div>

                                {/* Right Bullet Points */}
                                <div className="w-full md:w-1/2 flex flex-col md:gap-8 gap-4">
                                    {missionSteps.map((step, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 40 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{
                                                delay: index * 0.3,
                                                duration: 0.5,
                                                type: "spring",
                                            }}
                                            viewport={{ once: true }}
                                            className="flex items-start gap-4"
                                        >
                                            <motion.div
                                                initial={{ scale: 0, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                transition={{
                                                    delay: index * 0.3,
                                                    duration: 0.4,
                                                    type: "spring",
                                                    stiffness: 120,
                                                }}
                                                viewport={{ once: true }}
                                                className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#F68D13] border-2 border-white shadow-md shrink-0"
                                            />
                                            <div>
                                                <h3 className="font-medium lg:text-lg text-sm">
                                                    {step.title}
                                                </h3>
                                                <p className="text-gray-600 lg:text-base text-xs font-normal md:leading-tight leading-tight">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Orange Box */}
                        <section className="bg-[#f5f5f5] py-5 md:py-10 lg:px-10 xl:px-16 px-6">
                            <OrangeCard
                                title="Big ideas? Stuck brand? Half-done website?"
                                description="Wherever You Are in Your Journey, We're Here to Understand, Strategize, and Deliver.Just honest conversations, sharp execution, and results that move the business. Let’s explore what’s possible together."
                                buttonText="Speak to Experts"
                            />
                        </section>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer className="relative z-10" />
        </div>
    );
};

export default About;

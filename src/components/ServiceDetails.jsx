import { useParams } from "react-router-dom";
import serviceBg from "../assets/serviceBg.png";
import OrangeCard from "./OrangeCard";
import { motion } from "framer-motion";

// data/servicePagesData.js
const service = [
    {
        path: "logo-design",
        tag: "Logo Design",
        heading: "Logo Design That Leaves a",
        highlight: "Mark",
        tagline: "Your logo isn’t just a design it’s your business’s first handshake.",
        description:
            "At Winz Infotech, we create logos that do more than look good they work hard. They tell stories, build trust, and make your brand memorable across every touchpoint.",
    },
];

const features = [
    "100% Custom Logo Design",
    "Multiple Concepts + Revisions",
    "Final Files in All Formats (CDR, AI, PNG, SVG, EPS, JPEG)",
    "Typography & Color Palette Guide",
    "Full Commercial Rights",
];

const steps = [
    {
        title: "1. DISCOVERY",
        description: "We begin with a deep dive into your brand’s mission, target audience, and tone.",
    },
    {
        title: "2. STRATEGY & CONCEPT",
        description: "Based on insights, we define a creative direction that aligns with your business goals.",
    },
    {
        title: "3. DESIGN & ITERATION",
        description: "Multiple concepts are created and refined with your feedback.",
    },
    {
        title: "4. DELIVERY",
        description: "We provide all the final files in every format you need from social icons to print-ready assets.",
    },
];

const ServiceDetails = () => {
    // const { slug } = useParams();
    
    window.scrollTo({ top: 0, behavior: "smooth" }); 

    return (
        <div className="bg-gray-100 lg:mt-[450px] sm:my-[380px] my-[420px]">
            {/* Section 1: Text */}
            <div className="fixed sm:top-16 top-20 left-0 w-full -z-1 bg-white lg:p-12 sm:p-8 p-5">
                <div className="max-w-7xl mx-auto">
                    <h4 className="text-[#F68D13] font-semibold tracking-wide uppercase mb-4 text-base md:text-lg">
                        {service[0].tag}
                    </h4>

                    <h1 className="text-4xl lg:text-6xl font-semibold text-black leading-tight mb-4">
                        {service[0].heading} <br className="sm:block hidden" />
                        <span className="text-[#F68D13]">{service[0].highlight}</span>
                    </h1>

                    <p className="text-[#F68D13] font-medium text-sm md:text-base mb-4">
                        {service[0].tagline}
                    </p>

                    <p className="text-gray-700 max-w-[870px] text-sm md:text-base leading-relaxed">
                        {service[0].description}
                    </p>
                </div>
            </div>

            {/* Section 2: Sticky Image */}
            <div className="sticky top-0 h-screen z-0">
                <div className="w-full overflow-hidden">
                    <img
                        src={serviceBg}
                        alt="Service Illustration"
                        className="w-full h-[100vh] object-cover"
                    />
                </div>
            </div>

            {/* Section 3: Content Over Image */}
            <div className="h-screen flex md:flex-row flex-col">
                {/* Left Side - Fixed */}
                <div className="md:w-1/2 md:h-[40vh] h-[25vh] bg-white sticky top-14 flex items-start justify-start md:p-12 p-8 z-1">
                    <div>
                        <h1 className="lg:text-5xl text-3xl font-semibold text-black mb-4 leading-snug">
                            Why Invest in a <br /> <span className="text-[#F68D13]">Professional</span> Logo?
                        </h1>
                        <p className="text-gray-500 lg:text-base text-sm max-w-md">
                            A well-designed logo is one of the most valuable assets your business can own.
                        </p>
                    </div>
                </div>

                {/* Right Side - Scrollable Content */}
                <div className="w-full h-screen pt-48 md:pt-0 absolute overflow-y-auto bg-white">
                    <div className="mx-auto flex md:justify-end">
                        <div className="md:w-1/2 md:p-12 p-8 lg:space-y-10 space-y-4">
                            <h3>Here's why:</h3>

                            <div>
                                <h3 className="text-[#F68D13] lg:text-lg font-semibold lg:mb-2 mb-1">1. <span className="text-[#F68D13]">First Impressions Matter</span></h3>
                                <p className="text-gray-600 lg:text-base md:text-xs text-sm">
                                    Your logo is often the first thing people see. A clean, smart design instantly communicates professionalism, credibility, and trust.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-[#F68D13] lg:text-lg font-semibold mb-2">2. <span className="text-[#F68D13]">Brand Recognition Starts Here</span></h3>
                                <p className="text-gray-600 lg:text-base md:text-xs text-sm">
                                    Think of your logo as your signature. We design for memorability, so your brand sticks in the feed, on packaging, on storefronts, and beyond.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-[#F68D13] lg:text-lg font-semibold mb-2">3. <span className="text-[#F68D13]">Consistency Across Platforms</span></h3>
                                <p className="text-gray-600 lg:text-base md:text-xs text-sm">
                                    Whether it’s your website, social media, or business card we craft logos that are responsive, scalable, and versatile.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-[#F68D13] lg:text-lg font-semibold mb-2">4. <span className="text-[#F68D13]">Tailored to Your Brand Personality</span></h3>
                                <p className="text-gray-600 lg:text-base md:text-xs text-sm">
                                    Minimal, bold, playful, or luxury your logo should reflect your identity. No templates. No shortcuts. Just a custom identity built from the ground up.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-2 lg:text-lg text-[#F68D13]">5. <span className="text-[#F68D13]">Built for Longevity</span></h3>
                                <p className="text-gray-600 lg:text-base md:text-xs text-sm">
                                    We don’t follow trends. We design for the long game with timeless visuals that grow with your brand.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Section 4,5,6,7*/}
            <div className="w-full overflow-hidden sticky">
                {/* Section 4: Our Logo Design Process */}
                <section className="px-8 lg:px-12 py-16 flex md:flex-row flex-col bg-white">
                    {/* left part */}
                    <div className="md:w-1/2 flex flex-col ">
                        <h2 className="lg:text-5xl text-3xl md:max-w-md lg:leading-16 font-semibold text-black mb-2">
                            Our Logo <span className="text-[#F68D13]">Design Process</span>
                        </h2>
                        <p className="text-gray-700 text-sm mb-10">
                            Here’s how we turn an idea into an identity:
                        </p>
                    </div>

                    {/* right part */}
                    <div className="flex items-start xl:ml-0 lg:ml-20 md:ml-16 md:w-1/2">
                        {/* Vertical line */}
                        <div className="relative flex flex-col items-center lg:mr-8 mr-4">
                            {steps.map((_, index) => {

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ y: -20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ delay: index * 1.0, duration: 0.5, type: "spring", stiffness: 100 }}
                                        viewport={{ once: true }}
                                        className="flex flex-col items-center"
                                    >
                                        <motion.div
                                            initial={{ backgroundColor: "#ffffff" }}
                                            whileInView={{
                                                backgroundColor: index === steps.length - 1 ? "#F97316" : "#ffffff"  // Only last one is filled
                                            }}
                                            transition={{
                                                delay: index * 1.0,
                                                duration: 0.5,
                                            }}
                                            className={`size-8 rounded-full border-1 border-[#F68D13] z-10 `}
                                        />

                                        {index !== steps.length - 1 && (
                                            <div className="w-[1px] lg:h-17 h-14 bg-[#F68D13]"></div>
                                        )}
                                    </motion.div>
                                )
                            })}
                        </div>

                        {/* Step content */}
                        <div className="sm:space-y-8 space-y-7">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ x: 40, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 1.0, duration: 0.5, type: "spring", stiffness: 100 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="lg:text-lg text-base font-bold">{step.title}</h3>
                                    <p className="text-gray-600 lg:text-sm text-xs max-w-md">{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 5: Who We Design For */}
                <section className="bg-cover bg-center text-black">
                    <div className="bg-white/70 px-8 lg:px-12 backdrop-blur-xs p-8 shadow-lg">
                        <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold mb-4">
                            <span className="text-[#F68D13]">Who</span> We Design For
                        </h2>
                        <p className="text-gray-700 md:text-base text-sm max-w-3xl leading-relaxed">
                            We’ve helped over <span className="text-[#F68D13] font-semibold">375+</span> businesses build meaningful identities across industries. From startups to established brands, we understand how to shape perception through powerful design.
                        </p>
                    </div>
                </section>

                {/* Section 6: What You Get */}
                <section className="w-full px-8 lg:px-12 py-14 bg-white flex flex-col md:flex-row items-center justify-between md:gap-0 gap-8">
                    {/* Left Heading */}
                    <motion.div
                        className="md:w-1/2"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            type: "tween",
                            stiffness: 120,
                            damping: 10,
                        }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
                            <span className="text-[#F68D13]">What</span>{" "}
                            <span className="text-black">You Get</span>
                        </h2>
                    </motion.div>

                    {/* Feature List */}
                    <div className="flex-1 space-y-4">
                        {features.map((text, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center bg-gray-100 rounded-md p-4 gap-3"
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    delay: index + 1.2,
                                    duration: 0.5,
                                    type: "spring",
                                    stiffness: 100,
                                }}
                                viewport={{ once: true }}
                            >
                                {/* Animated Tick Icon */}
                                <motion.div
                                    initial={{ x: -50, opacity: 0, rotate: -45 }}
                                    whileInView={{ x: 0, opacity: 1, rotate: 0 }}
                                    transition={{
                                        delay: index + 1.2,
                                        type: "tween",
                                        stiffness: 200,
                                        damping: 15,
                                    }}
                                    viewport={{ once: true }}
                                    className="w-8 h-8 flex items-center justify-center bg-orange-200/80  text-[#F68D13] rounded-sm shadow-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="rectangle"
                                            strokeLinejoin="rectangle"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </motion.div>

                                {/* Text */}
                                <p className="text-black text-sm md:text-base font-medium">{text}</p>
                            </motion.div>
                        ))}

                    </div>
                </section>

                {/* Section 7: Orange Box */}
                <section className="bg-white md:px-20 mx-auto ">
                    <OrangeCard
                        title="Big ideas? Stuck brand? Half-done website?"
                        description="Wherever You Are in Your Journey, We're Here to Understand, Strategize, and Deliver.Just honest conversations, sharp execution, and results that move the business. Let’s explore what’s possible together."
                        buttonText="Speak to Experts"
                        onButtonClick={() => console.log("Button Clicked")}
                    />
                </section>
            </div>
        </div>
    );
};

export default ServiceDetails;

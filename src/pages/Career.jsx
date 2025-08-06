import { motion } from "framer-motion";
import TextHover from "../components/Animations/TextHover";
import { useEffect } from "react";

const whyJoinSteps = [
    {
        title: "Impact From Day One",
        description: "Your ideas matter: Your work drives growth.",
    },
    {
        title: "No Boring Days",
        description: "Work on diverse brands, bold campaigns, and real-world challenges.",
    },
    {
        title: "Impact From Day One",
        description: "Your ideas matter. Your work drives growth.",
    },
    {
        title: "Culture That Cares",
        description: "We value ownership, honesty, and good vibes — not office politics.",
    },
    {
        title: "Remote-First, People-First",
        description: "Flexibility that works for real life.",
    },
];

const CareerPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white text-black overflow-x-hidden md:overflow-x-visible lg:overflow-x-visible w-full mt-20 lg:py-10 py-5">
            {/* Top Intro Section */}
            <div className="flex flex-col gap-6 px-6 md:px-12 md:py-12 py-5">
                {/* Heading */}
                <div>
                    <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-medium">
                        Careers at <span className="text-[#F68D13] font-medium">Winz</span> Infotech
                    </h1>
                    <p className="mt-4 md:text-[17px] text-sm text-gray-700 font-normal md:leading-9 leading-6">
                        Don’t just do a job. {" "}
                        <span className="text-[#F68D13] font-medium">
                            Build something that matters.
                        </span>
                    </p>
                </div>

                {/* Why Join Section */}
                <div className="flex flex-col md:flex-row items-stretch lg:gap-24 md:py-12 py-5 gap-10">
                    {/* Left Side */}
                    <div className="bg-gray-100 flex items-center justify-center min-h-[200px] p-4 md:w-1/2">
                        <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-[32px] font-medium leading-snug text-center md:text-left">
                            Why Join <span className="text-[#F68D13] font-medium">Winz</span>
                            <br /> Infotech?
                        </h1>
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col gap-8 md:w-1/2">
                        {whyJoinSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: 40, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    delay: index * 0.3,
                                    duration: 0.5,
                                    type: "spring",
                                    stiffness: 100,
                                }}
                                viewport={{ once: true }}
                                className="flex items-start gap-4"
                            >
                                {/* Circle */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        delay: index * 0.3,
                                        duration: 0.5,
                                        type: "spring",
                                        stiffness: 120,
                                    }}
                                    viewport={{ once: true }}
                                    className="w-4 h-4 rounded-full bg-[#F68D13] shrink-0 mt-1"
                                />

                                {/* Text */}
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

            {/* Main Content: Left & Right */}
            <div className="flex flex-col md:flex-row items-start px-6 py-12 gap-6 bg-gray-100 min-h-screen">
                {/* Left Section */}
                <div className="flex-1 flex items-start justify-center md:px-8 py-4 sticky top-20 self-start">
                    <div className="max-w-lg">
                        <h2 className="xl:text-6xl lg:text-5xl md:text-4xl lg:leading-18 leading-12 text-4xl font-medium lg:mb-10 mb-6 lg:text-left scroll-mt-24">
                            Let’s Build <br className="md:block hidden" /> <span className="text-[#F68D13] ">Together</span>
                        </h2>
                        <p className="text-gray-600 lg:text-[17px] lg:ml-2 ml-1 text-sm font-normal lg:leading-9 md:leading-7 leading-6 text-left">
                            If you’re done with average and ready to build something meaningful,
                            we want to hear from you. Bring your ambition. We'll bring the
                            opportunities.
                        </p>
                    </div>
                </div>

                {/* Right Section - Career Form */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="shadow-md lg:p-8 md:p-4 p-6 w-full md:max-w-xl bg-white flex flex-col justify-between">
                        <form className="lg:space-y-7 md:space-y-4 sm:space-y-6 space-y-4 p-6 bg-gray-100 ">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full border-b border-gray-300 focus:outline-none focus:border-[#F68D13] py-2 text-sm bg-gray-100"
                            />
                            <input
                                type="text"
                                placeholder="Contact No"
                                className="w-full border-b border-gray-300 focus:outline-none focus:border-[#F68D13] py-2 text-sm bg-gray-100"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border-b border-gray-300 focus:outline-none focus:border-[#F68D13] py-2 text-sm bg-gray-100"
                            />
                            <input
                                type="text"
                                placeholder="Position"
                                className="w-full border-b border-gray-300 focus:outline-none focus:border-[#F68D13] py-2 text-sm bg-gray-100"
                            />
                            <input
                                type="text"
                                placeholder="Attachment"
                                className="w-full border-b border-gray-300 focus:outline-none focus:border-[#F68D13] py-2 text-sm bg-gray-100"
                            />
                            <input
                                type="text"
                                placeholder="Anything else"
                                className="w-full border-b border-gray-300 focus:outline-none focus:border-[#F68D13] py-2 text-sm bg-gray-100"
                            />

                            <div className="flex justify-center">
                                <button className="bg-[#F68D13] cursor-pointer text-white transition">
                                    <TextHover text="APPLY NOW" />
                                </button>
                            </div>
                        </form>

                        <p className="lg:text-[17px] text-sm text-black mt-6 font-medium text-left lg:leading-9 leading-6">
                            Shoot your profile to{" "}
                            <a
                                href="mailto:work@winzinfotech.com"
                                className="text-[#F68D13] font-medium"
                            >
                                work@winzinfotech.com
                            </a>
                            . We’d still love to connect.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerPage;

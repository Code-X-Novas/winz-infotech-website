import { useLocation } from "react-router-dom";
import serviceBg from "../assets/serviceBg.png";
import OrangeCard from "./OrangeCard";
import { motion } from "framer-motion";

const ServiceDetails = () => {
    
    window.scrollTo({ top: 0, behavior: "smooth" });
    const location = useLocation();
    const service = location.state?.services;

    return (
        <div className="bg-gray-100 lg:mt-[450px] sm:mt-[380px] mt-[420px]">
            {/* Section 1: Text */}
            <div className="fixed sm:top-16 top-20 -z-1 bg-white xl:pl-16 lg:p-12 sm:p-8 p-5">
                <div className="max-w-7xl mx-auto">
                    <h4 className="text-[#F68D13] font-medium tracking-wide uppercase mb-4 text-base md:text-lg">
                        {service?.tag}
                    </h4>

                    <h1 className=" max-w-5xl text-4xl lg:text-6xl font-medium text-black leading-tight mb-4">
                        {service?.heading} 
                        <span className="text-[#F68D13]"> {service?.highlight}</span>
                    </h1>

                    <p className="text-[#F68D13] font-medium text-sm md:text-base mb-4">
                        {service?.tagline}
                    </p>

                    <p className="text-gray-700 max-w-[870px] text-sm md:text-base leading-relaxed">
                        {service?.description}
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
            <div className="h-[100vh] flex md:flex-row flex-col">
                {/* Left Side - Fixed */}
                <div className="md:w-1/2 xl:h-[50vh] lg:h-[40vh] h-[30vh] bg-white sticky top-11 flex items-start justify-start xl:p-16 md:p-12 p-8 z-1">
                    <div>
                        <h1 className="xl:text-5xl lg:text-4xl text-3xl font-medium text-black mb-4 leading-snug">
                            {service?.featureText1} <span className="text-[#F68D13]">{service?.featureText2}</span> {service?.featureText3}
                        </h1>
                        <p className="text-gray-500 lg:text-base text-sm max-w-md">
                            {service?.featureDesc}
                        </p>
                    </div>
                </div>

                {/* Right Side - Scrollable Content */}
                <div className="w-full h-screen pt-54 sm:pt-48 md:pt-0 absolute overflow-y-auto bg-white">
                    <div className="mx-auto flex md:justify-end">
                        <div className="md:w-1/2 md:p-12 p-8 lg:space-y-10 space-y-4">
                            <h3>Here's why:</h3>
                            {
                                service?.investmentBenefits.map((item) => (
                                    <div key={item.id} className="mb-6">
                                        <h3 className="text-[#F68D13] lg:text-lg font-medium lg:mb-2 mb-1">
                                            {item.id}. <span className="text-[#F68D13]">{item.title}</span>
                                        </h3>
                                        <p className="text-gray-600 lg:text-base md:text-xs text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>

            {/* Section 4,5,6,7*/}
            <div className="w-full overflow-hidden sticky">
                {/* Section 4: Our Logo Design Process */}
                <section className="xl:p-16 md:p-12 p-8 flex md:flex-row flex-col bg-white">
                    {/* left part */}
                    <div className="md:w-1/2 flex flex-col ">
                        <h2 className="lg:text-5xl text-3xl md:max-lg lg:leading-16 font-medium text-black mb-2">
                            {service?.stepsHeading} <span className="text-[#F68D13]">{service?.stepsHighlight}</span>
                        </h2>
                        <p className="text-gray-700 max-w-lg text-sm mb-10">
                            {service?.stepsDescription}
                        </p>
                    </div>

                    {/* right part */}
                    <div className="flex items-start xl:ml-0 lg:ml-20 md:ml-16 md:w-1/2">
                        {/* Vertical line */}
                        <div className="relative flex flex-col items-center lg:mr-8 mr-4">
                            {service?.steps.map((_, index) => {
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
                                                backgroundColor: index === service?.steps.length - 1 ? "#F97316" : "#ffffff"  // Only last one is filled
                                            }}
                                            transition={{
                                                delay: index * 1.0,
                                                duration: 0.5,
                                            }}
                                            className={`size-8 rounded-full border-1 border-[#F68D13] z-10 `}
                                        />

                                        {index !== service?.steps.length - 1 && (
                                            <div className="w-[1px] lg:h-17 h-14 bg-[#F68D13]"></div>
                                        )}
                                    </motion.div>
                                )
                            })}
                        </div>

                        {/* Step content */}
                        <div className={`sm:space-y-8 space-y-7`}>
                            {service?.steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ x: 40, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 1.0, duration: 0.5, type: "spring", stiffness: 100 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="lg:text-lg text-base font-bold line-clamp-1">{step.title}</h3>
                                    <p className="text-gray-600 lg:text-sm text-xs max-w-lg line-clamp-2">{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 5: Who We Design For */}
                <section className="bg-cover bg-center text-black">
                    <div className="bg-white/70 xl:p-16 md:p-12 p-8 backdrop-blur-xs shadow-lg">
                        <h2 className="lg:text-5xl md:text-4xl text-3xl font-medium mb-4">
                            <span className="text-[#F68D13]">{service?.transparentHigh} </span>{service?.transparentHeading}
                        </h2>
                        <p className="text-gray-700 md:text-base text-sm max-w-4xl leading-relaxed">
                            {service?.transparentDesc1}<span className="text-[#F68D13] font-medium"> {service?.transparentHighlight} </span> {service?.transparentDesc2}
                        </p>
                    </div>
                </section>

                {/* Section 6: What You Get */}
                <section className="w-full xl:p-16 md:p-12 p-8 py-14 bg-white flex flex-col md:flex-row items-center justify-between md:gap-0 gap-8">
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
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium">
                            <span className="text-[#F68D13]">{service?.whatHighlight}</span>{" "}
                            <span className="text-black">{service?.whatHeading}</span>
                        </h2>
                    </motion.div>

                    {/* Feature List */}
                    <div className="flex-1 space-y-4">
                        {service?.features.map((text, index) => (
                            <motion.div
                                key={index}
                                className="flex max-w-2xl items-center bg-gray-100 rounded-md p-4 gap-3"
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    delay: index + 1.2,
                                    duration: 0.2,
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
                <section className="bg-white xl:p-16 md:p-12 p-8 mx-auto ">
                    <OrangeCard
                        title={service?.orangeCardHeading}
                        description={service?.orangeCardDesc}
                        buttonText={service?.orangeCardButton}
                    />
                </section>
            </div>
        </div>
    );
};

export default ServiceDetails;

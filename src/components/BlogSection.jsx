import serviceBg from "../assets/serviceBg.png";
import { motion } from 'framer-motion'
import OrangeCard from "./OrangeCard";
import { useEffect } from "react";

const BlogSection = ({ blogs, textVariants }) => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    
    return (
        <div>
            {/* Section 1: Heading */}
            <section className="w-full mt-20 bg-white lg:py-10 py-5">
                <div className="lg:px-10 xl:px-16 px-5">
                    <motion.h2
                        className="xl:text-6xl lg:text-5xl lg:leading-20 md:leading-14 leading-12 md:text-4xl text-3xl font-medium"
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={0}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {blogs?.heading} <span className="text-[#F68D13]">{blogs?.highlight}</span>
                    </motion.h2>

                    <motion.p
                        className="max-w-5xl md:text-[17px] text-sm md:mt-4 mt-3 text-[#646464] font-normal md:leading-9 leading-6"
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={1}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {blogs?.description}
                    </motion.p>
                </div>
            </section>

            {/* Section 2: Sticky Image */}
            <div className="top-0 h-[85vh] z-0 relative">
                {/* image */}
                <div className="w-full overflow-hidden h-full">
                    <img
                        src={serviceBg}
                        alt="Service Illustration"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* centered text */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h4
                        className="xl:text-6xl xl:leading-20 md:leading-14 sm:leading-12 leading-8 lg:text-4xl 
                                                sm:text-3xl text-xl w-full lg:mx-20 mx-6 text-center bg-white/70 backdrop-blur-sm md:p-12 p-6 transform"
                    >
                        At Winz Infotech, we help real estate <br className='sm:block hidden' /> brands modernize their marketing to <br className='sm:block hidden' />
                        <span className="text-[#F68D13]"> stand out and sell faster.</span> Here's how.
                    </h4>
                </div>
            </div>

            {/* Section-3: Details */}
            <section className="lg:px-10 xl:px-16 px-5 py-10 mx-auto md:space-y-8 space-y-6">
                {/* Top  */}
                <div className="md:space-y-8 space-y-6">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#F68D13]">
                        What's Working in Digital Marketing in 2025? 
                    </h2>
                    {blogs?.points.map((point, index) => (
                        <div key={index} className="md:space-y-3 space-y-2">
                            <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-[#F68D13]">
                                {point?.title}
                            </h2>
                            <p className="text-sm md:text-base ">
                                {point?.description}
                            </p>
                        </div>
                    ))}
                </div>
                
                {/* Bullets */}
                <div className="md:space-y-8 space-y-6">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#F68D13]">
                        What’s Losing Relevance? 
                    </h2>
                    <ul className="list-disc list-inside space-y-1 text-base md:text-lg">
                        {blogs?.bullet1.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Bullets */}
                <div className="md:space-y-8 space-y-6">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#F68D13]">
                        Where Smart Brands Are Investing in 2025 
                    </h2>
                    <ul className="list-disc list-inside space-y-1  text-base md:text-lg">
                        {blogs?.bullet2.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Orange Box */}
            <section className="bg-[#f5f5f5] py-5 md:py-10 lg:px-10 xl:px-16 px-6">
                <OrangeCard
                    title="Need help with your 2025 marketing plan? "
                    description="Let’s build a growth strategy that works this year and next."
                    buttonText="Book a Free Strategy Call Today"
                />
            </section>
        </div>
    )
}

export default BlogSection
import serviceBg from "../assets/serviceBg.png";
import { motion } from 'framer-motion'
import OrangeCard from "./OrangeCard";
import { useEffect } from "react";

const PointSection = ({ points, textVariants }) => {
    
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
                        Real Estate Marketing in 2025: <br className='xl:block hidden' /><span className="text-[#F68D13]">New Strategies That Sell Homes Faster</span>
                    </motion.h2>

                    <motion.p
                        className="max-w-4xl md:text-[17px] text-sm md:mt-4 mt-3 text-[#646464] font-normal md:leading-9 leading-6"
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={1}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        The real estate market is no longer just about "location, location, location." In 2025, it’s also
                        about strategy, speed, and storytelling. Whether you're a builder, developer, or broker, the way you
                        market properties has evolved dramatically. Buyers expect more. Competition is fiercer. Attention
                        spans are shorter.
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
                {/* Section 1 */}
                <div className="md:space-y-3 space-y-2">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-[#F68D13]">{points[0].title}</h2>
                    <p className="text-sm md:text-base">{points[0].description}</p>
                    <p className="text-sm md:text-base text-[#F68D13] font-medium">
                        Pro Tip: <span className="text-black">{points[0].tip}</span>
                    </p>
                </div>

                {/* Section 2 */}
                <div className="md:space-y-8 space-y-6">
                    {points.slice(1).map((point, index) => (
                        <div key={index} className="md:space-y-3 space-y-2">
                            <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-[#F68D13]">
                                {point?.title}
                            </h2>
                            <p className="text-sm md:text-base ">
                                {point?.description}
                            </p>
                            <ul className="list-disc list-inside space-y-1  text-sm md:text-base">
                                {point?.features.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            <p className="text-sm md:text-base text-[#F68D13] font-medium">
                                {point?.text}{" "}
                                <span className="text-black font-normal">{point?.highlight}</span>
                            </p>
                        </div>
                    ))}
                </div>

                <div className="md:space-y-8 space-y-6">
                    <div className="md:space-y-3 space-y-2">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#F68D13]">
                            Conclusion: <span className="text-black">The Future Is Now</span> 
                        </h2>
                        <p className="text-sm md:text-base ">
                            Real estate marketing in 2025 is fast, visual, and data-driven. Builders who adapt to this 
                            landscape not only sell homes faster but also build brands that last.
                        </p>
                        
                    </div>
                </div>
            </section>

            {/* Orange Box */}
            <section className="bg-[#f5f5f5] py-5 md:py-10 lg:px-10 xl:px-16 px-6">
                <OrangeCard
                    title="Looking to modernize your real estate marketing?"
                    description="Real estate marketing in 2025 is fast, visual, and data-driven. Builders who adapt to this landscape not only sell homes faster but also build brands that last. "
                    buttonText="Book a Free Strategy Call Today "
                />
            </section>
        </div>
    )
}

export default PointSection
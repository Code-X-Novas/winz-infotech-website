import { useEffect, useState } from "react";
import OrangeCard from "../components/OrangeCard";
import { motion } from "framer-motion";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const portfolios = {
    Logo_Design: {
        Logo_Design1: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106025/07_1_eaumyd.jpg",
        Logo_Design2: "https://res.cloudinary.com/dooejuv06/image/upload/v1755105949/Logo_Design_06_1_dt3l7i.jpg",
        Logo_Design3: "https://res.cloudinary.com/dooejuv06/image/upload/v1755105254/Logo_Design_03_y8yf9s.jpg",
        Logo_Design4: "https://res.cloudinary.com/dooejuv06/image/upload/v1755105247/09_edwypx.jpg",
        Logo_Design5: "https://res.cloudinary.com/dooejuv06/image/upload/v1755105243/08_hcnbxi.jpg",
        Logo_Design6: "https://res.cloudinary.com/dooejuv06/image/upload/v1755105242/Logo_Design_01_fbr2hi.jpg",
        Logo_Design7: "https://res.cloudinary.com/dooejuv06/image/upload/v1755105241/10_qows4s.jpg",
        Logo_Design8: "https://res.cloudinary.com/dooejuv06/image/upload/v1755105241/11_thrdjf.jpg",
        Logo_Design9: "https://res.cloudinary.com/dooejuv06/image/upload/v1755105241/Logo_Design_05_nzgtlb.jpg",
    },
    Banner: {
        Banner1: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106551/Banner_02_copy_n7yv7z.jpg",
        Banner3: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106532/Banner_01_qtr3b9.jpg",
        Banner2: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106534/Banner_01_copy_dpened.jpg",
    },
    Brochure: {
        Brochure1: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106562/Brochure_021_cydvg2.jpg",
        Brochure2: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106558/Brochure_02_Inner_pjp0a5.jpg",
        Brochure3: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106556/Brochure_01_copy_vrp8nz.jpg",
        Brochure4: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106556/Brochure_01_Inner_copy_u1mzat.jpg",
    },
    Business_Card: {
        Business_Card1: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106519/Business_Card_012_sksswy.jpg",
        Business_Card2: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106518/21161836_copy_ylsv1y.jpg",
        Business_Card3: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106517/Business_Card_01_ulxfyw.jpg",
    },
    Flyer: {
        Flyer1: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106512/Flyer_pv562w.jpg",
    },
    Hoardings: {
        Hoarding1: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106492/Hording_02_u9pu0h.jpg",
        Hoarding2: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106490/Hording_01_hvyyzv.jpg",
        Hoarding3: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106490/Hording_03_wpjnei.jpg",
    },
    Letter_Head: {
        Letter_Head1: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106478/Letterhad_01_copy_yb0oee.jpg",
        Letter_Head2: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106471/Letterhad_02_uryaty.jpg",
        Letter_Head3: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106470/Letterhad_01_k22vkn.jpg",
    },
    Office_Wall: {
        Office_Wall1: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106462/Office_Wall_01_fwotoh.jpg",
        Office_Wall2: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106443/Office_Wall_03_gi0fou.jpg",
        Office_Wall3: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106442/Office_Wall_02_gouxqa.jpg",
    },
    Standee_Design: {
        Standee_Design1: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106382/Standee_01_cq3zow.jpg",
        Standee_Design2: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106357/Standee_04_uphpng.jpg",
        Standee_Design3: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106355/Standee_02_kysqwb.jpg",
        Standee_Design4: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106355/Standee_03_basbjv.jpg",
    }
}

const categories = [
    'All',
    'Banner',
    'Brochure',
    'Business Card',
    'Flyer',
    'Hoardings',
    "Letter Head",
    'Logo Design',
    "Office Wall",
    "Standee Design",
];

const Portfolio = () => {
    const [selected, setSelected] = useState('All');
    const [visibleCount, setVisibleCount] = useState(7);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 640); // sm breakpoint
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    const portfolioArray = Object.entries(portfolios).flatMap(([category, images]) =>
        Object.values(images).map(url => ({
            url,
            tag: category.split("_").join(" ")   // Keep the category as tag for filtering
        }))
    );

    const filteredPortfolios = selected === 'All' ? portfolioArray
        : portfolioArray.filter(portfolio => portfolio.tag === selected);

    const visiblePortfolios = isMobile ? filteredPortfolios.slice(0, visibleCount) : filteredPortfolios; 

    return (
        <div>
            {/* heading */}
            <section className="w-full mt-20 bg-white lg:py-10 py-5">
                <div className="lg:px-10 xl:px-16 px-5">
                    <motion.h2
                        className="xl:text-6xl lg:text-5xl lg:leading-16 leading-12 md:text-4xl text-3xl font-medium"
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={0}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        Work that <span className="text-[#F68D13]">Work's</span>
                    </motion.h2>

                    <motion.p
                        className="max-w-[820px] md:text-[17px] text-sm md:mt-4 mt-3 font-normal md:leading-9 leading-6"
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={1}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <span className="text-[#F68D13]">Results Over Randomness </span> <br />
                        We craft every project to generate ROI not just reactions. From clicks to conversions,
                        awareness to action, everything we do is built to deliver measurable outcomes.
                        Whether it's building brands or scaling sales, our work moves your business forward, faster.
                    </motion.p>
                </div>
            </section>

            {/* Categories */}
            <section className="w-full bg-white ">
                <div className="lg:px-7 xl:px-12 px-4 bg-white w-full">
                    <ScrollMenu>
                        {categories.map((item) => (
                            <div
                                key={item}
                                onClick={() => setSelected(item)}
                                className={`cursor-pointer lg:px-10 lg:py-3 px-4 py-2 lg:mx-3 mx-2 min-w-max text-sm font-medium 
                                        ${selected === item
                                        ? 'bg-[#F68D13] text-white'
                                        : 'bg-[#F0F4F7] text-[#565C63] hover:bg-gray-200 transition-all'}`}
                            >
                                {item}
                            </div>
                        ))}
                    </ScrollMenu>
                </div>
            </section>

            {/* Portfolio Items */}
            <section className="w-full lg:my-10 my-5 lg:px-10 xl:px-16 px-5">   
                <motion.div
                    className="columns-1 sm:columns-2 lg:columns-3 gap-4"
                    variants={containerVariants}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {visiblePortfolios.map((portfolio, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="bg-white shadow-md overflow-hidden transition-all duration-300 mb-4 break-inside-avoid"
                        >
                            <div className="relative w-full h-fit overflow-hidden">
                                <img
                                    src={portfolio.url}
                                    alt={portfolio.tag}
                                    className="w-full h-auto object-contain"
                                />
                                <div className="absolute bottom-2 left-2 bg-white/80 text-black text-xs px-2 py-1  font-medium">
                                    {portfolio.tag.split("_").join(" ")}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Load More button for mobile */}
                {isMobile && visibleCount < filteredPortfolios.length && (
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={() => setVisibleCount((prev) => prev + 5)}
                            className="bg-[#FC8A10] text-white px-4 py-2 shadow hover:scale-95 transition-all"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </section>
            
            {/* Orange Box */}
            <section className="bg-white xl:p-16 lg:p-10 p-5 mx-auto ">
                <OrangeCard
                    title="Big ideas? Stuck brand? Half-done website? "
                    description="Wherever You Are in Your Journey, We're Here to Understand, Strategize, and Deliver.Just honest conversations, sharp execution, and results that move the business. Let’s explore what’s possible together."
                    buttonText="Speak to Experts"
                />
            </section>
        </div>
    )
}

export default Portfolio
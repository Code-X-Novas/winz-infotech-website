import { useEffect, useState } from "react";
import OrangeCard from "../components/OrangeCard";
import { motion } from "framer-motion";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const portfolios = {
    Logo_Design: {
        Logo_Design1: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106025/07_1_eaumyd.jpg", type: "Cricket Logo" },
        Logo_Design2: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755105949/Logo_Design_06_1_dt3l7i.jpg", type: "Brand Identity" },
        Logo_Design3: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755105254/Logo_Design_03_y8yf9s.jpg", type: "Cricket Logo" },
        Logo_Design4: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755105247/09_edwypx.jpg", type: "Cricket Logo" },
        Logo_Design5: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755105243/08_hcnbxi.jpg", type: "Professional Logo" },
        Logo_Design6: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755105242/Logo_Design_01_fbr2hi.jpg", type: "Business Logo" },
        Logo_Design7: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755105241/10_qows4s.jpg", type: "Cricket Logo" },
        Logo_Design8: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755105241/11_thrdjf.jpg", type: "Cricket Logo" },
        Logo_Design9: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755105241/Logo_Design_05_nzgtlb.jpg", type: "Startup Logo" },
    },
    Banner: {
        Banner1: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106551/Banner_02_copy_n7yv7z.jpg", type: "Gym Banner" },
        Banner3: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106532/Banner_01_qtr3b9.jpg", type: "Gym Banner" },
        Banner2: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106534/Banner_01_copy_dpened.jpg", type: "Gym Banner" },
    },
    Brochure: {
        Brochure1: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106562/Brochure_021_cydvg2.jpg", type: "Corporate Brochure" },
        Brochure2: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106558/Brochure_02_Inner_pjp0a5.jpg", type: "Product Brochure" },
        Brochure3: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106556/Brochure_01_copy_vrp8nz.jpg", type: "Service Brochure" },
        Brochure4: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106556/Brochure_01_Inner_copy_u1mzat.jpg", type: "Business Brochure" },
    },
    Business_Card: {
        Business_Card1: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106519/Business_Card_012_sksswy.jpg", type: "Executive Card" },
        Business_Card2: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106518/21161836_copy_ylsv1y.jpg", type: "Creative Card" },
        Business_Card3: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106517/Business_Card_01_ulxfyw.jpg", type: "Professional Card" },
    },
    Flyer: {
        Flyer1: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106512/Flyer_pv562w.jpg", type: "Event Flyer" },
    },
    Hoardings: {
        Hoarding1: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106492/Hording_02_u9pu0h.jpg", type: "Gym Hoarding" },
        Hoarding2: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106490/Hording_01_hvyyzv.jpg", type: "Visia Hoarding" },
        Hoarding3: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106490/Hording_03_wpjnei.jpg", type: "Commercial Hoarding" },
    },
    Letter_Head: {
        Letter_Head1: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106478/Letterhad_01_copy_yb0oee.jpg", type: "Corporate Letterhead" },
        Letter_Head2: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106471/Letterhad_02_uryaty.jpg", type: "Business Letterhead" },
        Letter_Head3: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106470/Letterhad_01_k22vkn.jpg", type: "Professional Letterhead" },
    },
    Office_Wall: {
        Office_Wall1: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106462/Office_Wall_01_fwotoh.jpg", type: "Reception Wall" },
        Office_Wall2: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106443/Office_Wall_03_gi0fou.jpg", type: "Conference Room" },
        Office_Wall3: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106442/Office_Wall_02_gouxqa.jpg", type: "Corporate Wall" },
    },
    Standee_Design: {
        Standee_Design1: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106382/Standee_01_cq3zow.jpg", type: "Event Standee" },
        Standee_Design2: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106357/Standee_04_uphpng.jpg", type: "Promotional Standee" },
        Standee_Design3: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106355/Standee_02_kysqwb.jpg", type: "Marketing Standee" },
        Standee_Design4: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106355/Standee_03_basbjv.jpg", type: "Display Standee" },
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

    useEffect(() => {
        window.scrollTo(0, 0);
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

    // Utility function to shuffle
    const shuffleArray = (array) => {
        return [...array].sort(() => Math.random() - 0.5);
    };

    const portfolioArray = Object.entries(portfolios).flatMap(([category, images]) =>
        Object.values(images).map(item => ({
            url: item.url,
            type: item.type,
            tag: category.split("_").join(" ")   // Keep the category as tag for filtering
        }))
    );

    // Shuffle before filtering
    const randomizedPortfolios = shuffleArray(portfolioArray);

    const filteredPortfolios = selected === 'All'
        ? randomizedPortfolios
        : randomizedPortfolios.filter(portfolio => portfolio.tag === selected);

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
                        className="md:text-[17px] text-sm md:mt-4 mt-3 font-normal md:leading-9 leading-6"
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
                    {/* Horizontal scroll for mobile and tablet */}
                    <div className="md:hidden">
                        <ScrollMenu>
                            {categories.map((item) => (
                                <div
                                    key={item}
                                    onClick={() => setSelected(item)}
                                    className={`cursor-pointer px-4 py-2 mx-2 min-w-max text-sm font-medium 
                                            ${selected === item
                                            ? 'bg-[#F68D13] text-white'
                                            : 'bg-[#F0F4F7] text-[#565C63] hover:bg-gray-200 transition-all'}`}
                                >
                                    {item}
                                </div>
                            ))}
                        </ScrollMenu>
                    </div>
                    
                    {/* Flex wrap for md and larger screens */}
                    <div className="hidden md:flex flex-wrap gap-3">
                        {categories.map((item) => (
                            <div
                                key={item}
                                onClick={() => setSelected(item)}
                                className={`cursor-pointer lg:px-10 lg:py-3 px-4 py-2 text-sm font-medium 
                                        ${selected === item
                                        ? 'bg-[#F68D13] text-white'
                                        : 'bg-[#F0F4F7] text-[#565C63] hover:bg-gray-200 transition-all'}`}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
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
                    {filteredPortfolios.map((portfolio, index) => (
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
                                    {portfolio.type}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
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
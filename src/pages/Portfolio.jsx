import { useState } from "react";
import OrangeCard from "../components/OrangeCard";
import { motion } from "framer-motion";
import TextHover from "../components/Animations/TextHover";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
// import './hide-scrollbar.css'; // for hiding scrollbar if needed

import blog1 from "../assets/portfolio1.png";
import blog2 from "../assets/portfolio2.png";
import blog3 from "../assets/portfolio3.png";
import blog4 from "../assets/portfolio4.jpg";
import blog5 from "../assets/portfolio5.png";
import blog6 from "../assets/portfolio6.png";

const caseStudies = [
    {
        id: 1,
        tag: "Branding",
        image: blog1,
    },
    {
        id: 2,
        tag: "Branding",
        image: blog4,
    },
    {
        id: 3,
        tag: ["Branding", "Logo Design"],
        image: blog2,
    },
    {
        id: 4,
        tag: ["Branding", "Logo Design"],
        image: blog2,
    },
    {
        id: 5,
        tag: "Digital Marketing",
        image: blog3,
    },
    {
        id: 6,
        tag: "Branding",
        image: blog6,
    },
    {
        id: 7,
        tag: ["Branding", "Logo Design"],
        image: blog4,
    },
    {
        id: 8,
        tag: ["Branding", "Logo Design"],
        image: blog1,
    },
    {
        id: 9,
        tag: "Logo design",
        image: blog5,
    },
    {
        id: 10,
        tag: "Landing Page",
        image: blog3,
    },
];

const categories = [
    'All',
    'Branding',
    'Logo Design',
    'Digital Marketing',
    'Social media Assets',
    'Landing Page',
    'Website',
];

const Portfolio = () => {
    const [selected, setSelected] = useState('All');

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

    const filteredStudies =
        selected === 'All'
            ? caseStudies
            : caseStudies.filter((study) =>
                Array.isArray(study.tag)
                    ? study.tag.includes(selected)
                    : study.tag === selected
            );

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
                                className={`cursor-pointer lg:px-8 lg:py-3 px-4 py-2 lg:mx-4 mx-2 min-w-max text-sm font-medium 
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
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {filteredStudies.map((study) => (
                        <motion.div
                            key={study.id}
                            variants={cardVariants}
                            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative w-full h-[400px] sm:h-[350px] md:h-[400px] lg:h-[350px] xl:h-[500px] overflow-hidden">
                                <img
                                    src={study.image}
                                    alt={study.title}
                                    className="w-fit h-fit object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Tag Label */}
                                <div className="absolute bottom-2 left-2 bg-white/80 text-black text-xs px-2 py-1 rounded-md font-medium">
                                    {study.tag}
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <section className="bg-white xl:p-16 md:p-12 p-8 mx-auto ">
                <OrangeCard
                    title="Big ideas? Stuck brand? Half-done website? "
                    description="Wherever You Are in Your Journey, We're Here to Understand, Strategize, and Deliver.Just honest conversations, sharp execution, and results that move the business. Let’s explore what’s possible together."
                    buttonText="Speak to Experts"
                    onButtonClick={() => console.log("Button Clicked")}
                />
            </section>
        </div>
    )
}

export default Portfolio
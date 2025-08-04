import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrangeCard from "../components/OrangeCard";
import { motion } from "framer-motion";
import TextHover from "../components/Animations/TextHover";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
// import './hide-scrollbar.css'; // for hiding scrollbar if needed

import blog1 from "../assets/case-study.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import blog5 from "../assets/blog5.png";

const caseStudies = [
    {
        id: 1,
        title: "Real Estate Marketing in 2025: New Strategies That Sell Homes Faster",
        tag: "Branding",
        image: blog1,
    },
    {
        id: 2,
        title: "The Role of Storytelling in Web Design",
        tag: "Branding",
        image: blog1,
    },
    {
        id: 3,
        title: "Aarts Wins India's Best Design Award 2023 for TeaNMe",
        tag: ["Branding", "Logo Design"],
        image: blog2,
    },
    {
        id: 4,
        title: "Aarts Wins India's Best Design Award 2023 for TeaNMe",
        tag: ["Branding", "Logo Design"],
        image: blog2,
    },
    {
        id: 5,
        title: "KIA’s New Logo: A Modern Win with a Readability Miss",
        tag: "Digital Marketing",
        image: blog3,
    },
    {
        id: 6,
        title: "KIA’s New Logo: A Modern Win with a Readability Miss",
        tag: "Branding",
        image: blog3,
    },
    {
        id: 7,
        title: "Is Google’s Logo System Too Consistent?",
        tag: ["Branding", "Logo Design"],
        image: blog4,
    },
    {
        id: 8,
        title: "Is Google’s Logo System Too Consistent?",
        tag: ["Branding", "Logo Design"],
        image: blog4,
    },
    {
        id: 9,
        title: "AlmaBetter Allocates ₹50 Crore Fund",
        tag: "Logo design",
        image: blog5,
    },
    {
        id: 10,
        title: "AlmaBetter Allocates ₹50 Crore Fund",
        tag: "Landing Page",
        image: blog5,
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

const Blogs = () => {
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

    const navigate = useNavigate();

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
                        The Founder's <span className="text-[#F68D13]">Guide</span> to
                        <span className="text-[#F68D13]"> Winning </span> Online
                    </motion.h2>

                    <motion.p
                        className="max-w-4xl md:text-[17px] text-sm md:mt-4 mt-3 font-normal md:leading-9 leading-6"
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={1}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        Welcome to the brain of Winz Infotech. From proven digital marketing tactics and
                        brand-building frameworks to the latest in design, advertising trends, and social media shifts our
                        blog is your go-to resource for staying ahead in the digital game.
                    </motion.p>

                    <br className='md:hidden block' />

                    <motion.p
                        className="max-w-4xl md:text-[17px] text-sm font-normal md:leading-9 leading-6"
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={2}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        Whether you're a founder, marketer, or creative entrepreneur, we break down complex topics
                        into actionable ideas that move your brand forward.
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

            {/* Blogs */}
            <section className="w-full lg:my-10 my-5 lg:px-10 xl:px-16 px-5 ">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6"
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
                            className="bg-white rounded-sm shadow-md xl:p-6 lg:p-4 md:p-6 sm:p-4 p-2 flex flex-row items-center xl:gap-6 lg:gap-3 sm:gap-6 gap-3"
                        >
                            {/* Left Image */}
                            <div className="w-1/2 overflow-hidden">
                                <img
                                    src={study.image}
                                    alt={study.title}
                                    className="w-full h-full object-cover transition-transform duration-400 hover:scale-150"
                                />
                            </div>

                            {/* Right Content */}
                            <div className="w-1/2 flex flex-col justify-evenly h-full xl:space-y-5 lg:space-y-1 sm:space-y-5 space-y-1">
                                <h2 className="font-playfair line-clamp-4 xl:text-2xl lg:text-base md:text-2xl sm:text-xl leading-tight font-light sm:leading-normal hover:text-[#F68D13] transition-all duration-300 text-black">
                                    {study.title}
                                </h2>

                                {/* Tags */}
                                {
                                    Array.isArray(study.tag) ? (
                                        <div className="flex flex-wrap gap-2">
                                            {study.tag.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="xl:text-xs lg:text-[10px] md:text-sm sm:text-xs text-[8px] uppercase xl:p-2 lg:p-1 sm:p-2 p-1 bg-[#F0F4F7] w-fit text-gray-500"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    ) : (
                                        <span className="xl:text-xs lg:text-[10px] md:text-sm sm:text-xs text-[8px] uppercase xl:p-2 lg:p-1 sm:p-2 p-1 bg-[#F0F4F7] w-fit text-gray-500">
                                            {study.tag}
                                        </span>
                                    )
                                }
                                <h3 className="border-b-2 text-[#F68D13]"></h3>
                                <div
                                    onClick={() => {
                                        const slug = study.title.toLowerCase().replace(/\s+/g, "-");
                                        navigate(`/blogs/${slug}`);
                                    }}
                                    className="text-[#F68D13] xl:text-base lg:text-sm md:text-base sm:text-sm text-[10px] font-medium hover:underline cursor-pointer"
                                >
                                    <TextHover text="Read more" customClass="!text-left !px-0" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Orange Box */}
            <section className="bg-[#f5f5f5] py-5 md:py-10 lg:px-10 xl:px-16 px-6">
                <OrangeCard
                    title="Big ideas? Stuck brand? Half-done website?"
                    description="Wherever You Are in Your Journey, We're Here to Understand, Strategize, and Deliver.Just honest conversations, sharp execution, and results that move the business. Let’s explore what’s possible together."
                    buttonText="Speak to Experts"
                    onButtonClick={() => console.log("Button Clicked")}
                />
            </section>

        </div>
    )
}

export default Blogs
import { useNavigate } from "react-router-dom";
import caseStudy from "../assets/case-study.png";
import OrangeCard from "../components/OrangeCard";
import { motion } from "framer-motion";
import TextHover from "../components/Animations/TextHover";

const caseStudies = [
    {
        id: 1,
        title: "Visa & Immigration Consultant – Nagpur",
        tag: "Case Study",
        description:
            "Position the consultancy as a trusted expert in Nagpur and increase revenue by 3x within 2 months.",
        image: caseStudy,
        link: "#",
    },
    {
        id: 2,
        title: "Beauty Salon – Mumbai",
        tag: "Case Study",
        description:
            "Boost beauty salon bookings, increase the average order value, and enhance brand visibility across Mumbai and its metro suburbs.",
        image: caseStudy,
        link: "#",
    },
    {
        id: 3,
        title: "Startup Growth in Tier 2 Cities",
        tag: "Case Study",
        description:
            "Helped a fintech startup penetrate smaller markets and grow its user base by 500% in 4 months.",
        image: caseStudy,
        link: "#",
    },
    {
        id: 4,
        title: "Visa & Immigration Consultant – Nagpur",
        tag: "Case Study",
        description:
            "Position the consultancy as a trusted expert in Nagpur and increase revenue by 3x within 2 months.",
        image: caseStudy,
        link: "#",
    },
    {
        id: 5,
        title: "Visa & Immigration Consultant – Nagpur",
        tag: "Case Study",
        description:
            "Position the consultancy as a trusted expert in Nagpur and increase revenue by 3x within 2 months.",
        image: caseStudy,
        link: "#",
    },
];

const CaseStudy = () => {
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

    return (
        <div>
            {/* heading */}
            <section className="w-full mt-20 bg-white lg:py-10 py-5">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="lg:px-10 xl:px-16 px-5"
                >
                    <h2 className="xl:text-6xl lg:text-5xl lg:leading-16 md:text-4xl text-3xl font-medium">
                        Our Clients’ <span className="text-[#F68D13]">Journey</span>
                    </h2>
                    <p className="max-w-3xl md:text-[17px] text-sm md:mt-4 mt-3 font-normal md:leading-9 leading-6">
                        From boosting bookings to scaling revenue and building unforgettable brands explore
                        real stories of real results with Winz Infotech.
                    </p>
                </motion.div>
            </section>

            {/* Case Studies */}
            <section className="w-full lg:my-10 my-5 lg:px-10 xl:px-16 px-5 ">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                    variants={containerVariants}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {caseStudies.map((study) => (
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
                            <div className="w-1/2 flex flex-col justify-center h-full xl:space-y-5 lg:space-y-1 sm:space-y-5 space-y-1">
                                <span className="xl:text-xs lg:text-[10px] md:text-sm sm:text-xs text-[8px] uppercase xl:p-2 lg:p-1 sm:p-2 p-1 bg-[#F0F4F7] w-fit text-gray-500">
                                    {study.tag}
                                </span>
                                <h2 className="xl:text-2xl font-playfair lg:text-base md:text-2xl sm:text-xl leading-tight font-light line-clamp-2 sm:leading-normal hover:text-[#F68D13] transition-all duration-300 text-black">
                                    {study.title}
                                </h2>
                                <p className="xl:text-base lg:text-xs md:text-base sm:text-sm text-[10px] line-clamp-4 hover:text-[#F68D13] transition-all duration-300 leading-tight text-gray-600">
                                    {study.description}
                                </p>
                                <div
                                    onClick={() => {
                                        const slug = study.title.toLowerCase().replace(/\s+/g, "-");
                                        navigate(`/case-study/${slug}`);
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

export default CaseStudy
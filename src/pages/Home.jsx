import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import teamImage from "../assets/homeImage.png";
import { FaBullhorn, FaPaintBrush, FaCamera } from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { HiMiniPaintBrush } from "react-icons/hi2";
import { FiTarget } from "react-icons/fi";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/effect-coverflow';
import "./swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import TextType from "../components/Animations/TextType";
import InfiniteScroll from "../components/Animations/InfiniteScroll";
import Testimonial from "../components/Testimonial";
import OrangeCard from "../components/OrangeCard";
import { useNavigate } from "react-router-dom";
import TextAnimation from "../components/TextAnimation";

const services = [
    {
        title: "Logo design",
        desc: "Your brand, beautifully visualized.",
        icon: <HiMiniPaintBrush className="text-[#F68D13] md:text-4xl text-2xl" />,
    },
    {
        title: "Branding",
        desc: "Build trust. Shape perception.",
        icon: <FiTarget className="text-[#F68D13] md:text-4xl text-2xl" />,
    },
    {
        title: "UGC Video",
        desc: "Authentic content that drives action.",
        icon: <MdOutlineSlowMotionVideo className="text-[#F68D13] md:text-4xl text-2xl" />,
    },
    {
        title: "Influencer Marketing",
        desc: "Real voices. Wider reach. Results.",
        icon: <FaBullhorn className="text-[#F68D13] md:text-4xl text-2xl" />,
    },
    {
        title: "Performance Marketing",
        desc: "Build trust. Shape perception.",
        icon: <FaPaintBrush className="text-[#F68D13] md:text-4xl text-2xl" />,
    },
    {
        title: "Website Developement",
        desc: "Fast. Functional. Conversion-Ready.",
        icon: <FaCamera className="text-[#F68D13] md:text-4xl text-2xl" />,
    },
];

const caseStudies = [
    {
        id: 1,
        title: "Visa Consultancy: Conversions Soar",
        subtitle: "CASE STUDY 1",
        description:
            "We transformed their online presence, securing 4x more qualified leads and tripling revenue in just 60 days.",
    },
    {
        id: 2,
        title: "EdTech Platform: 2x User Engagement",
        subtitle: "CASE STUDY 2",
        description:
            "Revamped their UX & SEO, doubling user session time and reducing bounce rate by 35%.",
    },
    {
        id: 3,
        title: "Fintech Startup: 5x Traffic Boost",
        subtitle: "CASE STUDY 3",
        description:
            "Crafted a custom digital strategy that skyrocketed traffic and lead quality within 90 days.",
    },
    {
        id: 4,
        title: "Fintech Startup: 5x Traffic Boost",
        subtitle: "CASE STUDY 3",
        description:
            "Crafted a custom digital strategy that skyrocketed traffic and lead quality within 90 days.",
    },
    {
        id: 5,
        title: "Fintech Startup: 5x Traffic Boost",
        subtitle: "CASE STUDY 3",
        description:
            "Crafted a custom digital strategy that skyrocketed traffic and lead quality within 90 days.",
    },
];

const Home = () => {
    const ref = useRef(null);
    const navigate = useNavigate();
    const isInView = useInView(ref, { once: true }); // only run once when it comes into view

    const [startTyping, setStartTyping] = useState(false);
    const colors = [
        'bg-orange-400',
        'bg-orange-300',
        'bg-orange-200',
        'bg-[#F68D13BF]',
        'bg-[#F68D1380]',
    ];

    useEffect(() => {
        if (isInView) setStartTyping(true);
    }, [isInView]);

    return (
        <div>
            {/* Main Section */}
            <section className="w-full mt-20 flex flex-col-reverse md:flex-row items-center justify-between px-6 lg:px-10 xl:px-16 lg:py-10 py-5 bg-white">
                {/* Left Content */}
                <div className="w-full md:w-1/2 mt-10 md:mt-0">
                    {/* Hero Title */}
                    <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight mb-6 text-black"
                    >
                        From Scroll to <br className="md:block hidden" />
                        Sale, We  {" "}
                        <span className="relative inline-block"> Dr<span className="text-3xl lg:text-4xl xl:text-5xl">I</span>ve
                            <span className="absolute bottom-0 lg:left-[48%] left-[49%] transform -translate-x-1/2 xl:size-2.5 lg:size-2 size-1.5 bg-[#F68D13] rounded-full" />
                        </span> <br className="sm:block hidden" /> Results.
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-gray-600 text-base lg:text-lg xl:leading-10 lg:leading-8 leading-relaxed mb-6"
                    >
                        We craft scroll-stopping designs and high-converting campaigns that turn
                        attention into action. Whether you're building a brand or boosting sales, we
                        deliver measurable growth creatively and consistently.
                    </motion.p>

                    {/* lets talk */}
                    <motion.button
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                        className="bg-[#F68D13] hover:bg-orange-500 cursor-pointer text-white lg:px-6 px-4 lg:py-3 sm:py-2 py-1 rounded-sm text-sm font-medium flex items-center gap-2"
                        onClick={() => navigate('/contact')}
                    >
                        Let’s Talk <span className="text-lg">→</span>
                    </motion.button>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-around md:flex-nowrap mt-10 gap-6 lg:gap-12">
                        {[
                            { count: "10M+", label: "Reach" },
                            { count: "375+", label: "Clients" },
                            { count: "8+", label: "Years Experience" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + i * 0.2 }}
                                className="text-center relative"
                            >
                                <p className="lg:text-5xl text-3xl font-medium text-black">{item.count}</p>
                                <p className="text-gray-500 text-sm lg:mt-3 mt-1">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Image */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full md:w-1/2 flex justify-center"
                >
                    <img
                        src={teamImage} // Replace with your actual image path
                        alt="Team Work"
                        className="w-full md:max-w-md md:h-auto sm:h-[500px] h-[400px] shadow-lg"
                    />
                </motion.div>
            </section>

            {/* Our Services */}
            <section className="bg-[#f5f5f5] px-6 lg:px-10 xl:px-16 py-10">
                {/* heading */}
                <div className="mb-12">
                    <h2 className="xl:text-5xl md:text-4xl text-3xl font-medium">
                        Our <span className="text-[#F68D13]">Services</span>
                    </h2>
                    <p className="text-gray-600 tracking-wide max-w-3xl mt-4">
                        We deliver design, branding, and marketing solutions tailored to elevate your digital presence. Thoughtfully built. Creatively executed.
                    </p>
                </div>

                {/* Card */}
                <div className="grid grid-cols-2 lg:grid-cols-3 md:gap-x-16 gap-x-6 gap-y-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white md:p-6 p-3 rounded-md shadow-md text-center hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="md:mb-4 mb-2.5 flex justify-center">{service.icon}</div>
                            <h3 className="md:text-xl font-medium md:mb-2 mb-1">{service.title}</h3>
                            <p className="text-gray-600 md:text-sm text-xs">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Text animation */}
            <section ref={ref} className="bg-[#F68D13]">
                <div className="transform p-8 backdrop-blur-sm rounded-lg shadow-lg w-full">
                    <p className="leading-relaxed text-center xl:text-6xl lg:text-5xl sm:text-4xl text-xl flex flex-col gap-[1px]">
                        <TextAnimation />
                    </p>
                </div>
            </section>


            {/* Swiper */}
            <section className="w-full bg-[#f5f5f5] mx-auto lg:px-12 px-6 md:py-12 py-8 relative">
                <h2 className="xl:text-5xl md:text-4xl text-3xl font-medium text-center mb-8">
                    <span className="text-[#F68D13]">Growth Stories</span>, Not Just Campaigns
                </h2>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={20}
                    slidesPerView={1}
                    grabCursor={true}
                    speed={1000}
                    touchRatio={1}
                    resistance={true}
                >
                    {caseStudies.map((current, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                initial={{ x: index % 2 === 1 ? -50 : 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="mx-auto space-y-5"
                            >
                                <div className="bg-white rounded-xl shadow p-8 text-left">
                                    <p className="text-[#F68D13] text-sm font-medium mb-4">{current.subtitle}</p>
                                    <h2 className="text-2xl md:text-4xl max-w-xl font-medium mb-6">{current.title}</h2>
                                    <p className="text-gray-700 mb-6 md:text-base text-sm">{current.description}</p>
                                    <button className="bg-[#F68D13] text-white md:text-base text-sm px-4 py-2 rounded hover:bg-orange-600 transition">
                                        Read more
                                    </button>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* Infinite Scroll */}
            <section className="w-full bg-white mx-auto  md:py-12 py-8 relative">
                <h3 className="lg:text-4xl md:text-3xl text-2xl sm:tracking-normal lg:px-16 px-6 tracking-tighter font-medium mb-8">
                    Industries We've Worked With
                </h3>
                <div style={{ position: 'relative' }}>
                    <InfiniteScroll
                        texts={['Gym • Cafe Fitness & Wellness • Hospital • Real Estate • Fashion • Food & Beverage • Education • E-commerce •']}
                        velocity={200}
                        numCopies={2}
                        className="custom-scroll-text font-medium lg:text-5xl md:text-4xl text-3xl"
                    />
                </div>
            </section>

            {/* Clients Who Trust Us */}
            <section className="w-full bg-white py-10">
                {/* heading */}
                <div className="lg:px-10 xl:px-16 px-6">
                    <h2 className="xl:text-5xl md:text-4xl text-3xl font-medium">
                        <span className="text-[#F68D13]">Clients</span> Who Trust Us
                    </h2>
                    <p className="text-gray-600 tracking-wide max-w-2xl leading-relaxed mt-4">
                        We don’t just deliver projects — we build relationships. Hear from the brands who’ve grown with us.
                    </p>
                </div>

                <Testimonial />
            </section>

            {/* Infinite Scroll */}
            <section className="w-full bg-white lg:py-10 sm:py-5 mx-auto relative">
                <div className="relative">
                    <InfiniteScroll
                        texts={['Strategy • Design • Performance •']}
                        velocity={200}
                        numCopies={2}
                        className="custom-scroll-text font-medium lg:text-6xl md:text-5xl text-4xl"
                    />
                </div>
            </section>

            {/* Proof over Promises scrolling color card */}
            <section className="bg-[#f5f5f5] py-10">
                {/* heading */}
                <div className="lg:px-10 xl:px-16 px-6">
                    <h2 className="xl:text-5xl xl:leading-16 md:leading-12 md:tracking-wide md:text-4xl text-3xl font-medium">
                        Proof Over Promises, <br /> Watch the <span className="text-[#F68D13]">Wins.</span>
                    </h2>
                </div>
                
                {/* Card swiper color bg */}
                <div className="w-full max-w-6xl xl:h-[70vh] lg:h-[90vh] md:h-[65vh] sm:h-[70vh] h-[55vh] mx-auto py-10 px-4">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            reverseDirection: true,
                        }}
                        loop={true}
                        speed={1000}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={3}
                        breakpoints={{
                            0: {
                                spaceBetween: 20,     // mobile
                            },
                            768: {
                                spaceBetween: 30,     // tablet
                            },
                            1024: {
                                spaceBetween: 40,     // laptop and up
                            },
                        }}
                    >
                        {colors.map((bg, index) => (
                            <SwiperSlide key={index}>
                                <div className={`lg:h-[400px] h-[300px] translate-y-12 bg-center slide-card w-full shadow-md ${bg} transition-all duration-500`} />
                                <div className="absolute items-center justify-start w-full h-full slide-top ease-out duration-500 top-10 left-0 flex flex-col">
                                    <div className="w-px h-10 bg-black mt-2" />
                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

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
    );
};

export default Home;

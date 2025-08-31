import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import teamImage from "../assets/homeImage.png";
import { FaBullhorn, FaCamera, } from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { HiMiniPaintBrush } from "react-icons/hi2";
import { FiTarget } from "react-icons/fi";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/effect-coverflow';
import "./swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import InfiniteScroll from "../components/Animations/InfiniteScroll";
import Testimonial from "../components/Testimonial";
import OrangeCard from "../components/OrangeCard";
import { useNavigate } from "react-router-dom";
import TextAnimation from "../components/TextAnimation";
import TextHover from "../components/Animations/TextHover";

// images
import s1 from "../assets/service1.png"
import s2 from "../assets/service2.png"
import s3 from "../assets/service3.png"

import image1 from "../assets/case1.png";
import image2 from "../assets/case2.png";
import image3 from "../assets/case3.png";
import { BadgePercent } from "lucide-react";

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
        icon: <BadgePercent className="text-[#F68D13] md:size-10 size-7" />,
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
        description: "We transformed their online presence, securing 4x more qualified leads and tripling revenue in just 60 days.",
        image: image1
    },
    {
        id: 2,
        title: "EdTech Platform: 2x User Engagement",
        subtitle: "CASE STUDY 2",
        description: "Revamped their UX & SEO, doubling user session time and reducing bounce rate by 35%.",
        image: image3
    },
    {
        id: 3,
        title: "Fintech Startup: 5x Traffic Boost",
        subtitle: "CASE STUDY 3",
        description: "Crafted a custom digital strategy that skyrocketed traffic and lead quality within 90 days.",
        image: image2
    },
];

const videos = [
    {
        id: 1,
        title: "Video 1",
        url: "https://res.cloudinary.com/dooejuv06/video/upload/v1755101601/IVF_Clinic_nv2fuv.mp4"
    },
    {
        id: 2,
        title: "Video 2",
        url: "https://res.cloudinary.com/dooejuv06/video/upload/v1755101581/Image_Consultant_rp1hig.mp4"
    },
    {
        id: 3,
        title: "Video 3",
        url: "https://res.cloudinary.com/dooejuv06/video/upload/v1755101573/Architect_ofjrcn.mp4"
    },
    {
        id: 4,
        title: "Video 4",
        url: "https://res.cloudinary.com/dooejuv06/video/upload/v1755101571/Wellness_Coach_fqrz6v.mp4"
    },
    {
        id: 5,
        title: "Video 5",
        url: "https://res.cloudinary.com/dooejuv06/video/upload/v1755101569/Weight_Loss_Expert_gtr2t2.mp4"
    },
    {
        id: 6,
        title: "Video 6",
        url: "https://res.cloudinary.com/dooejuv06/video/upload/v1755101569/Dietician_l45jbi.mp4"
    },
    {
        id: 7,
        title: "Video 7",
        url: "https://res.cloudinary.com/dooejuv06/video/upload/v1755101567/Career_Coaching_m3uig4.mp4"
    },
    {
        id: 8,
        title: "Video 8",
        url: "https://res.cloudinary.com/dooejuv06/video/upload/v1755101601/IVF_Clinic_nv2fuv.mp4"
    },
    {
        id: 9,
        title: "Video 9",
        url: "https://res.cloudinary.com/dooejuv06/video/upload/v1755101581/Image_Consultant_rp1hig.mp4"
    },
    {
        id: 10,
        title: "Video 10",
        url: "https://res.cloudinary.com/dooejuv06/video/upload/v1755101573/Architect_ofjrcn.mp4"
    },
    {
        id: 11,
        title: "Video 11",
        url: "https://res.cloudinary.com/dooejuv06/video/upload/v1755101569/Weight_Loss_Expert_gtr2t2.mp4"
    },
    {
        id: 12,
        title: "Video 12",
        url: "https://res.cloudinary.com/dooejuv06/video/upload/v1755101567/Career_Coaching_m3uig4.mp4"
    }
];

const Home = () => {
    const ref = useRef(null);
    const swiperRef = useRef(null);
    const navigate = useNavigate();
    const [playingIndex, setPlayingIndex] = useState(null);

    const colors = [
        s1, s2, s3, s1, s2, s3, s1, s2, s3, s1, s2, s3
    ];

    const handleClick = (index) => {
        setPlayingIndex(index);

        if (swiperRef.current) {
            swiperRef.current.autoplay.stop();
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/* Main Section */}
            <section className="w-full mt-20 flex flex-col-reverse md:flex-row items-center justify-between px-6 lg:px-10 xl:px-16 lg:py-10 bg-white">
                {/* Left Content */}
                <div className="w-full md:w-1/2 mt-5 md:mt-0 pb-5">
                    {/* Hero Title */}
                    <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-tight sm:mb-6 mb-3 text-black"
                    >
                        From Scroll to <br className="md:block hidden" />
                        Sale, We {" "}
                        <span className="relative inline-block">
                            Dr
                            <motion.span
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
                                className="text-3xl lg:text-4xl xl:text-5xl inline-block"
                            >
                                I
                            </motion.span>
                            <motion.span
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
                                className="absolute bottom-0 lg:left-[48%] left-[49%] transform -translate-x-1/2 xl:size-2.5 lg:size-2 size-1.5 bg-[#F68D13] rounded-full"
                            />
                            ve
                        </span>
                        <br className="sm:block hidden" />{" "}
                        Results.
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-gray-600 text-base lg:text-lg xl:leading-10 lg:leading-8 leading-relaxed md:mb-6 mb-3"
                    >
                        We craft scroll-stopping designs and high-converting campaigns that turn
                        attention into action. Whether you're building a brand or boosting sales, we
                        deliver measurable growth creatively and consistently.
                    </motion.p>

                    {/* lets talk */}
                    <div className="flex md:py-0 py-3 md:justify-start justify-center">
                        <motion.button
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.4 }}
                            className="bg-[#F68D13] lg:px-5 lg:h-12 cursor-pointer text-white text-sm font-medium flex items-center"
                            onClick={() => navigate('/contact')}
                        >
                            <TextHover customClass="!text-base" text="Let's Talk" /> <span className="lg:-translate-x-5 -mt-0.5 -translate-x-2 text-lg">→</span>
                        </motion.button>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-around md:flex-nowrap md:mt-10 mt-6 gap-6 lg:gap-12">
                        {[
                            { count: "10M+", label: "Reach" },
                            { count: "375+", label: "Clients" },
                            { count: "8+", label: "Years of Experience" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + i * 0.2 }}
                                className="text-center relative md:max-w-[200px] max-w-[80px]"
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
                    className="w-full md:w-1/2 flex xl:justify-end justify-center"
                >
                    <img
                        src={teamImage}
                        alt="Team Work"
                        className="w-full md:max-w-md md:h-auto sm:h-[500px] h-[300px] shadow-lg xl:mr-16 xl:scale-x-125"
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
                    <p className="text-gray-600 tracking-wide mt-4">
                        We deliver design, branding, and marketing solutions tailored to elevate your digital presence. Thoughtfully built. Creatively executed.
                    </p>
                </div>

                {/* Card */}
                <div className="grid grid-cols-2 lg:grid-cols-3 md:gap-x-16 sm:gap-x-10 gap-x-6 gap-y-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white xl:py-16 lg:py-12 sm:py-10 py-6 sm:p-6 p-3 shadow-[#ecad65] shadow text-center transition-shadow duration-300"
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
                <div className="md:p-8 py-6 w-full">
                    <p className="leading-relaxed text-center xl:text-6xl lg:text-5xl sm:text-4xl text-xl flex flex-col gap-[1px]">
                        <TextAnimation />
                    </p>
                </div>
            </section>

            {/* Swiper */}
            <section className="w-full bg-[#f5f5f5] mx-auto lg:px-12 px-6 md:py-12 py-8 relative">
                <h2 className="xl:text-5xl md:text-4xl text-3xl font-medium text-center mb-8">
                    <span className="text-[#F68D13]">Growth Stories</span> - Not Just Campaigns
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
                                <div className="bg-white h-[300px] flex flex-row shadow md:p-8 p-4 text-left">
                                    <div className="xl:w-[70%] w-full justify-between flex flex-col">
                                        <p className="text-[#F68D13] text-sm font-medium mb-4">{current.subtitle}</p>
                                        <h2 className="text-2xl md:text-[33px] lg:text-4xl font-medium mb-6">
                                            {current.title.split(":").map((part, index) => (
                                                <span key={index} className="block">
                                                    {part}{index === 0 ? " :" : ""}
                                                </span>
                                            ))}
                                        </h2>
                                        <p className="text-gray-700 mb-6 md:text-base text-sm line-clamp-3">{current.description}</p>
                                        <div className="flex md:py-0 md:justify-start justify-center">
                                            <button className="bg-[#F68D13] md:w-[160px] w-[120px] text-white md:text-base text-sm transition">
                                                <TextHover text="Read more" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="xl:w-[30%] w-full xl:flex hidden">
                                        <img src={current?.image || s1} alt="swiper" />
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* Infinite Scroll */}
            <section className="w-full bg-white lg:py-10 sm:py-5 mx-auto relative">
                <div className="relative">
                    <InfiniteScroll
                        texts={['Gym • Cafe Fitness & Wellness • Hospital • Real Estate • Fashion • Food & Beverage • Education • E-commerce •']}
                        velocity={80}
                        numCopies={2}
                        className="custom-scroll-text font-medium lg:text-6xl md:text-5xl text-4xl"
                    />
                </div>
            </section>

            {/* Clients Who Trust Us */}
            <section className="w-full bg-[#f5f5f5] py-10">
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
                        velocity={80}
                        numCopies={2}
                        className="custom-scroll-text font-medium lg:text-6xl md:text-5xl text-4xl"
                    />
                </div>
            </section>

            {/* Proof over Promises scrolling color card */}
            <section className="bg-[#f5f5f5] pt-10">
                {/* heading */}
                <div className="lg:px-10 xl:px-16 px-6">
                    <h2 className="xl:text-5xl leading-relaxed md:text-4xl text-3xl font-medium">
                        Proof Over Promises, <br /> Watch the <span className="text-[#F68D13]">Wins.</span>
                    </h2>
                </div>

                {/* Card swiper color bg */}
                <div className="w-full lg:h-[85vh] md:h-[85vh] sm:h-[70vh] h-[60vh] mx-auto py-10 px-6 lg:px-10 xl:px-16 ">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: true,
                            reverseDirection: true,
                        }}
                        loop={true}
                        speed={1000}
                        grabCursor={true}
                        centeredSlides={true}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        breakpoints={{
                            0: {
                                spaceBetween: 20,     // mobile
                                slidesPerView: 1,    // mobile and up
                            },
                            640: {
                                spaceBetween: 20,     // small devices
                                slidesPerView: 2,    // small devices and up
                            },
                            1024: {
                                spaceBetween: 20,
                                slidesPerView: 3   // laptop and up
                            },
                            1280: {
                                spaceBetween: 40,
                                slidesPerView: 3   // desktop and up
                            },
                        }}
                    >   
                        {/* side card */}
                        {colors.map((bg, index) => (
                            <SwiperSlide key={index}>
                                <div className={`xl:h-[500px] md:h-[400px] h-[370px] translate-y-12 bg-center slide-card w-full transition-all duration-500`} />
                                <div className="absolute items-center justify-start w-full h-full slide-top ease-out duration-500 top-10 left-0 flex flex-col">
                                    {
                                        playingIndex == index ? (
                                            <video
                                                src={videos[index]?.url}
                                                controls
                                                autoPlay
                                                className="h-full w-full object-contain"
                                            />
                                        ) : (
                                            <>
                                                <img src={bg} alt="image" className="bg-cover h-full w-full" />
                                                <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-8 p-4">
                                                    {/* button */}
                                                    <button onClick={() => handleClick(index)} className="bg-[#FC8A10] hover:scale-95 duration-300 transition-all cursor-pointer rounded-full p-2 ">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="white"
                                                            viewBox="0 0 24 24"
                                                            className="w-10 h-10 sm:w-8 sm:h-8 md:w-12 md:h-12"
                                                        >
                                                            <path d="M8 5v14l11-7z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </>
                                        )
                                    }
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
                />
            </section>

        </div>
    );
};

export default Home;

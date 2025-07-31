import {useEffect, useState } from "react";
import service2 from "../assets/service2.png";
import service1 from "../assets/service1.png";
import service3 from "../assets/service3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const images = [service1, service2, service1, service3];

const serviceData = [
    {
        title: "Logo Design",
        description:
            "We design logos that do more than look good — they make your brand memorable. Crafted with strategy, built for recall.",
    },
    {
        title: "Graphic Design",
        description:
            "From scroll-stopping creatives to pitch-ready decks, our designs don’t just look great they communicate, convert, and connect.",
    },
    {
        title: "Branding",
        description:
            "We build bold, consistent brand identities that speak your story, spark trust, and stand out across every touchpoint.",
    },
    {
        title: "Social Media Management",
        description:
            "We plan, create, and manage content that grows your audience and drives engagement with strategy, not just aesthetics.",
    },
    {
        title: "UGC/CGI Videos",
        description:
            "Authentic. Relatable. Viral-ready. We create UGC and CGI-style videos that build trust and convert viewers into loyal buyers.",
    },
    {
        title: "Influencer Marketing",
        description:
            "We connect your brand with creators your audience already trusts for real impact, not inflated numbers.",
    },
    {
        title: "Performance Marketing",
        description:
            "Ads that actually perform. We use data, creativity, and targeting to drive sales, not just clicks across Meta, Google & more.",
    },
];

const ServiceCard = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const refs = serviceData.map(() => useInView({ triggerOnce: true, threshold: 0.1 }));

    const visibleCount = isMobile && !showAll ? 3 : serviceData.length;

    return (
        <div className="flex flex-col lg:gap-12 gap-9 bg-gray-100">
            {serviceData.map((service, index) => {
                const [ref, inView] = refs[index];

                if (index >= visibleCount) return null;

                return (
                    <motion.div
                        ref={ref}
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className={`flex border-2 border-[#FC8A102E] ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                            } flex-col items-center md:gap-8 gap-4 overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white`}
                    >
                        {/* Text Section - Animates from Left */}
                        <motion.div
                            initial={{ x: index % 2 === 1 ? 50 : -50, opacity: 0 }}
                            animate={inView ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="md:w-2/3 w-full sm:p-8 p-5"
                        >
                            <h2
                                onClick={() => {
                                    const slug = service.title.toLowerCase().replace(/\s+/g, "-"); // Creates slug like "digital-branding"
                                    navigate(`/services/${slug}`);
                                }}
                                className="text-[#F68D13] cursor-pointer hover:underline md:text-3xl text-2xl font-bold md:mb-4 mb-2"
                            >
                                {service.title}
                            </h2>
                            <p className="text-gray-800 md:text-lg leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>

                        {/* Image Section - Animates from Right */}
                        <motion.div
                            initial={{ x: index % 2 === 1 ? -50 : 50, opacity: 0 }}
                            animate={inView ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="md:w-1/3 w-full"
                        >
                            <Swiper
                                modules={[Autoplay]}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                loop={true}
                                slidesPerView={1}
                                grabCursor={true}
                                speed={800}
                                touchRatio={1}
                                resistance={true}
                            >
                                {images.map((imgSrc, imgIndex) => (
                                    <SwiperSlide key={imgIndex}>
                                        <img
                                            src={imgSrc}
                                            alt={`Slide ${imgIndex + 1}`}
                                            className="md:h-full sm:h-96 h-72 w-full object-cover"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>
                    </motion.div>
                );
            })}
            
            {/* See More Button */}
            {isMobile && !showAll && (
                <button
                    onClick={() => setShowAll(true)}
                    className="mx-auto px-6 py-2 text-white bg-[#F68D13] hover:bg-[#e77b0c] rounded-full font-semibold transition"
                >
                    See all
                </button>
            )}
        </div>
    );
};

export default ServiceCard;

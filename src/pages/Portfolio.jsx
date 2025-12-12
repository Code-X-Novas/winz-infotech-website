import { useEffect, useState, useRef } from "react";
import OrangeCard from "../components/OrangeCard";
import { motion } from "framer-motion";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import SEO from "../components/SEO";

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
    Fitness_And_Social_Media:{
        Gym_Creatives1:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756835002/01_qlaafe.jpg",type:"Gym Banner"},
        Gym_Creatives2:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756835008/02_rucd9y.jpg",type:"Gym Banner"},
        Gym_Creatives3:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756833399/03_je83wo.jpg",type:"Gym Banner"},
        Gym_Creatives4:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756833397/04_wrzu6m.jpg",type:"Gym Banner"},
        Gym_Creatives5:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756833398/05_llthnd.jpg",type:"Gym Banner"},
        Gym_Creatives6:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756833398/06_wzdi7w.jpg",type:"Gym Banner"},
        Gym_Creatives7:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756833398/07_cpl4qn.jpg",type:"Gym Banner"},
        Gym_Creatives8:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756833398/08_dty8ls.jpg",type:"Social Media"},
        Gym_Creatives9:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756833398/09_pgiyet.jpg",type:"Gym Banner"},
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
        Hoarding2: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106490/Hording_01_hvyyzv.jpg", type: "Visa Hoarding" },
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
        Office_Wall3: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106442/Office_Wall_02_gouxqa.jpg", type: "Office Wall Design" },
    },
    Real_Estate_Social_Media:{
        Real_Estate1:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756833418/1_rmv70j.jpg",type:"Area"},
        Real_Estate2:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756833418/2_fzhomj.jpg",type:"Area"},
        Real_Estate3:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756833418/3_oau21b.jpg",type:"Area"},
        Real_Estate4:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756833419/4_pgg6we.jpg",type:"Real Estate"},
        Real_Estate5:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756833420/5._tifbpe.jpg",type:"Social Media Creative"},
        Real_Estate6:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756833419/6_gnb23a.jpg",type:"House"},
        Real_Estate7:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756833418/7_syiqmh.jpg",type:"Area"},
        Real_Estate8:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756833419/8._ikwj7o.jpg",type:"Ganesh Chaturthi"},
        Real_Estate9:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756833418/9_zciuze.jpg",type:"House"},
    },
    Standee_Design: {
        Standee_Design1: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106382/Standee_01_cq3zow.jpg", type: "Event Standee" },
        Standee_Design2: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106357/Standee_04_uphpng.jpg", type: "Promotional Standee" },
        Standee_Design3: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106355/Standee_02_kysqwb.jpg", type: "Marketing Standee" },
        Standee_Design4: { url: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106355/Standee_03_basbjv.jpg", type: "Display Standee" },
    },
    Visa_and_Immigration_Social_Media: {
        visa_and_immigration1:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756834358/1_i4cp0e.jpg",type:"Social Media Creative"},
        visa_and_immigration2:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756834360/02_o3nmin.jpg",type:"Paper Work"},
        visa_and_immigration3:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756834360/3_xwxcz4.jpg",type:"Passport"},
        visa_and_immigration4:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756834355/4_g91gor.png",type:"Canada"},
        visa_and_immigration5:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756834356/5_apymeg.jpg",type:"Bringing Hearts"},
        visa_and_immigration6:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756834363/06_i1uyk0.jpg",type:"Social Media"},
        visa_and_immigration7:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756834360/7._x80aqz.jpg",type:"Flight"},
        visa_and_immigration8:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756834357/08_nt8ucj.jpg",type:"Visa"},
        visa_and_immigration9:{url:"https://res.cloudinary.com/dooejuv06/image/upload/v1756834361/9._im4gqk.jpg",type:"Social Media"},
    },
    Video:{
        video1:{url:"https://res.cloudinary.com/dooejuv06/video/upload/v1756836399/NEHA_KHURANA_X_A_FITNESS_FINAL_1_oskqww.mov",type:"FITNESS"},
        video2:{url:"https://res.cloudinary.com/dooejuv06/video/upload/v1756836326/2_Reel_A_Fitness_New_1_egdhq5.mp4",type:"FITNESS"},
    }
}

const categories = [
    'All',
    'Banner',
    'Brochure',
    'Fitness And Social Media',
    'Business Card',
    'Flyer',
    'Hoardings',
    "Letter Head",
    'Logo Design',
    "Office Wall",
    "Standee Design",
    "Real Estate Social Media",
    "Video",
    "Visa and Immigration Social Media",
];

const Portfolio = () => {
    const [selected, setSelected] = useState('All');
    const [playingVideo, setPlayingVideo] = useState(null);
    const [hoveredVideo, setHoveredVideo] = useState(null);
    const [mutedVideos, setMutedVideos] = useState({});
    const [shuffledPortfolios, setShuffledPortfolios] = useState([]);
    const videoRefs = useRef({});

    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Disable right-click context menu
        const handleContextMenu = (e) => {
            e.preventDefault();
        };
        
        document.addEventListener('contextmenu', handleContextMenu);
        
        // Shuffle portfolios only once on mount
        const portfolioArray = Object.entries(portfolios).flatMap(([category, images]) =>
            Object.values(images).map(item => ({
                url: item.url,
                type: item.type,
                tag: category.split("_").join(" ")
            }))
        );
        setShuffledPortfolios(shuffleArray(portfolioArray));
        
        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
        };
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

    const filteredPortfolios = selected === 'All'
        ? shuffledPortfolios
        : shuffledPortfolios.filter(portfolio => portfolio.tag === selected);

    const handleVideoClick = (index, e) => {
        if (e) e.stopPropagation();
        const videoElement = videoRefs.current[index];
        if (videoElement) {
            if (playingVideo === index) {
                // Pause current video
                videoElement.pause();
                setPlayingVideo(null);
            } else {
                // Pause any currently playing video
                if (playingVideo !== null && videoRefs.current[playingVideo]) {
                    videoRefs.current[playingVideo].pause();
                    videoRefs.current[playingVideo].currentTime = 0;
                }
                // Stop any hover preview
                if (hoveredVideo !== null && hoveredVideo !== index && videoRefs.current[hoveredVideo]) {
                    videoRefs.current[hoveredVideo].pause();
                    videoRefs.current[hoveredVideo].currentTime = 0;
                }
                setHoveredVideo(null);
                
                // Play the clicked video with sound
                videoElement.currentTime = 0;
                videoElement.muted = false;
                videoElement.play().catch(err => console.log('Play error:', err));
                setPlayingVideo(index);
                setMutedVideos(prev => ({ ...prev, [index]: false }));
            }
        }
    };

    const handleVideoHover = (index, isHovering) => {
        const videoElement = videoRefs.current[index];
        
        // Don't auto-play on hover if a video is already playing with sound
        if (playingVideo !== null) {
            return;
        }
        
        if (videoElement) {
            if (isHovering) {
                setHoveredVideo(index);
                videoElement.muted = true;
                videoElement.currentTime = 0;
                videoElement.play().catch(err => console.log('Hover play error:', err));
            } else {
                if (hoveredVideo === index) {
                    setHoveredVideo(null);
                    videoElement.pause();
                    videoElement.currentTime = 0;
                }
            }
        }
    };

    const toggleMute = (index, e) => {
        e.stopPropagation();
        const videoElement = videoRefs.current[index];
        if (videoElement) {
            videoElement.muted = !videoElement.muted;
            setMutedVideos(prev => ({ ...prev, [index]: videoElement.muted }));
        }
    };

    const isVideoFile = (url) => {
        return url.includes('.mp4') || url.includes('.mov') || url.includes('.webm') || url.includes('.avi');
    };

    return (
        <div>
            <SEO 
                title="Portfolio - Creative Design Work | Winz Infotech"
                description="Explore our creative portfolio featuring logo designs, banners, brochures, business cards, and more. See the quality design work that drives results for our clients across various industries."
                keywords="portfolio, logo design, banner design, brochure design, business card design, creative work, graphic design, brand identity, marketing materials, design agency"
                canonicalUrl="https://winzinfotech.com/portfolio"
                ogImage="https://winzinfotech.com/assets/portfolio-og.jpg"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "Portfolio - Winz Infotech",
                    "description": "Creative design portfolio showcasing logos, banners, brochures, and marketing materials",
                    "url": "https://winzinfotech.com/portfolio",
                    "mainEntity": {
                        "@type": "ItemList",
                        "numberOfItems": 10,
                        "itemListElement": [
                            {
                                "@type": "CreativeWork",
                                "name": "Logo Design",
                                "description": "Professional logo designs for various industries including cricket, business, and startups",
                                "category": "Logo Design"
                            },
                            {
                                "@type": "CreativeWork",
                                "name": "Banner Design",
                                "description": "Eye-catching banner designs for gyms and promotional campaigns",
                                "category": "Banner Design"
                            },
                            {
                                "@type": "CreativeWork",
                                "name": "Brochure Design",
                                "description": "Corporate and product brochures for business marketing",
                                "category": "Brochure Design"
                            },
                            {
                                "@type": "CreativeWork",
                                "name": "Business Card Design",
                                "description": "Professional business cards for executives and creative professionals",
                                "category": "Business Card Design"
                            },
                            {
                                "@type": "CreativeWork",
                                "name": "Flyer Design",
                                "description": "Event and promotional flyer designs",
                                "category": "Flyer Design"
                            },
                            {
                                "@type": "CreativeWork",
                                "name": "Hoarding Design",
                                "description": "Large format hoarding designs for outdoor advertising",
                                "category": "Hoarding Design"
                            },
                            {
                                "@type": "CreativeWork",
                                "name": "Letter Head Design",
                                "description": "Corporate letterhead designs for professional communication",
                                "category": "Letter Head Design"
                            },
                            {
                                "@type": "CreativeWork",
                                "name": "Office Wall Design",
                                "description": "Office interior wall designs and corporate branding",
                                "category": "Office Wall Design"
                            },
                            {
                                "@type": "CreativeWork",
                                "name": "Standee Design",
                                "description": "Event and promotional standee designs for marketing campaigns",
                                "category": "Standee Design"
                            }
                        ]
                    },
                    "provider": {
                        "@type": "Organization",
                        "name": "Winz Infotech",
                        "url": "https://winzinfotech.com"
                    }
                }}
            />
            {/* heading */}
            <section className="w-full mt-20 bg-white lg:py-10 py-5">
                <div className="px-8 lg:px-20 xl:px-28">
                    <motion.h2
                        className="xl:text-7xl lg:text-5xl lg:leading-16 leading-12 md:text-4xl text-3xl font-medium"
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={0}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        Work that <span className="text-[#F68D13]">Work's</span>
                    </motion.h2>

                    <motion.p
                        className="md:text-[17px] xl:text-[19px] text-sm md:mt-4 mt-3 font-normal md:leading-9 leading-6"
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
                <div className="px-8 lg:px-20 xl:px-28 bg-white w-full">
                    {/* Horizontal scroll for mobile and tablet */}
                    <div className="md:hidden">
                        <ScrollMenu>
                            {categories.map((item) => (
                                <div
                                    key={item}
                                    onClick={() => setSelected(item)}
                                    className={`cursor-pointer px-4 py-2 mx-2 min-w-max text-md font-medium 
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
            <section className="w-full lg:my-10 my-5 px-8 lg:px-20 xl:px-28">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
                            className="bg-white shadow-md overflow-hidden transition-all duration-300 hover:bg-white/80 group cursor-pointer"
                        >
                            <div 
                                className="relative w-full h-[300px] sm:h-[350px] lg:h-[500px] overflow-hidden"
                                onMouseEnter={() => isVideoFile(portfolio.url) && handleVideoHover(index, true)}
                                onMouseLeave={() => isVideoFile(portfolio.url) && handleVideoHover(index, false)}
                                onClick={(e) => isVideoFile(portfolio.url) && handleVideoClick(index, e)}
                            >
                                {isVideoFile(portfolio.url) ? (
                                    <>
                                        <video
                                            ref={(el) => (videoRefs.current[index] = el)}
                                            src={portfolio.url}
                                            alt={portfolio.tag}
                                            className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                                            onEnded={() => {
                                                if (playingVideo === index) {
                                                    setPlayingVideo(null);
                                                }
                                                if (hoveredVideo === index) {
                                                    setHoveredVideo(null);
                                                }
                                            }}
                                            loop={hoveredVideo === index && playingVideo !== index}
                                            playsInline
                                            preload="metadata"
                                        />
                                        {/* Play button overlay - only show when not playing and not hovering */}
                                        {playingVideo !== index && hoveredVideo !== index && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 group-hover:bg-black/40 pointer-events-none">
                                                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                                    <svg 
                                                        className="w-8 h-8 md:w-10 md:h-10 text-[#F68D13] ml-1" 
                                                        fill="currentColor" 
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M8 5v14l11-7z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        )}
                                        {/* Mute/Unmute button - only show when playing with sound */}
                                        {playingVideo === index && (
                                            <div className="absolute bottom-16 right-4 z-10">
                                                <button
                                                    onClick={(e) => toggleMute(index, e)}
                                                    className="bg-black/60 hover:bg-black/80 rounded-full p-2 md:p-3 transition-all duration-300"
                                                >
                                                    {mutedVideos[index] ? (
                                                        <svg 
                                                            className="w-5 h-5 md:w-6 md:h-6 text-white" 
                                                            fill="currentColor" 
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                                                        </svg>
                                                    ) : (
                                                        <svg 
                                                            className="w-5 h-5 md:w-6 md:h-6 text-white" 
                                                            fill="currentColor" 
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                                                        </svg>
                                                    )}
                                                </button>
                                            </div>
                                        )}
                                        {/* Hover indicator when video is auto-playing muted */}
                                        {hoveredVideo === index && playingVideo !== index && (
                                            <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 pointer-events-none">
                                                <svg 
                                                    className="w-3 h-3" 
                                                    fill="currentColor" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                                                </svg>
                                                <span>Click for sound</span>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <img
                                        src={portfolio.url}
                                        alt={portfolio.tag}
                                        className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                                    />
                                )}
                                <div className="absolute bottom-2 left-2 bg-white/80 text-black text-xs px-2 py-1 font-medium pointer-events-none">
                                    {portfolio.type}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Orange Box */}
            <section className="bg-white px-8 lg:px-20 xl:px-28 lg:py-10 py-5 mx-auto ">
                <OrangeCard
                    title="Big ideas but stuck brand?"
                    description="Wherever You Are in Your Journey, We're Here to Understand, Strategize, and Deliver.Just honest conversations, sharp execution, and results that move the business. Let’s explore what’s possible together."
                    buttonText="Speak to Experts"
                />
            </section>
        </div>
    )
}

export default Portfolio

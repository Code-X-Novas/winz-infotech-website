import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrangeCard from "../components/OrangeCard";
import { motion } from "framer-motion";
import TextHover from "../components/Animations/TextHover";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
// import './hide-scrollbar.css'; // for hiding scrollbar if needed

import blog1 from "../assets/case-study.png";
import blog2 from "../assets/blog2.png";

const caseStudies = [
    {
        id: 1,
        title: "Real Estate Marketing in 2025: New Strategies That Sell Homes Faster",
        tag: "Branding",
        image: blog1,
    },
    {
        id: 2,
        title: "Digital Marketing in 2025: What’s Working, What’s Not & Where Smart Brands Are Investing",
        tag: "Digital Marketing",
        image: blog2,
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

const blogs = {
    heading: "Digital Marketing in 2025: ",
    highlight: "What’s Working, What’s Not & Where Smart Brands Are Investing",
    description: "The digital marketing world is evolving faster than ever. In 2025, what worked last year might already feel outdated. From AI-generated content to algorithm-proof strategies, brands must adapt to stay visible, valuable, and profitable. In this blog, we’ll break down what’s working, what’s dying, and where forward-thinking businesses are investing their digital marketing budgets for the highest returns.",

    points: [
        {
            title: "1. User-Generated Content (UGC) > Influencer Overload",
            description: "Consumers trust real people. UGC is cheaper, more authentic, and converts better than polished influencer ads. Brands are building communities of creators instead of hiring one big influencer."
        },
        {
            title: "2. AI + Human-Led Content Strategy",
            description: "AI tools (like ChatGPT, Sora, Midjourney) are speeding up content production, but businesses winning the game are blending AI with human insight, emotion, and brand voice for maximum impact. "
        },
        {
            title: "3. First-Party Data & Email Revival ",
            description: "With cookie-less browsing and rising ad costs, brands are focusing on building email lists, WhatsApp groups, and private communities to own their traffic."
        },
        {
            title: "4. Performance Creatives for Ads",
            description: "Gone are the days of generic carousels. High-converting ad creatives today look like TikToks, UGC reviews, memes, or raw videos, real beats polished every time."
        },
        {
            title: "5. Voice Search & Conversational SEO",
            description: "With smart assistants everywhere, brands are optimizing for how people talk not how they type. Long-tail, question-based keywords dominate. "
        }
    ],

    bullet1: [
        "One-size-fits-all social media posts",
        "Over-edited influencer collabs",
        "Ignoring mobile-first design",
        "Posting without paid support (zero reach!)",
        "Only relying on Meta or Google Ads without creative testing"
    ],
    bullet2: [
        "Content creators & micro-UGC partners",
        "AI-integrated CRM tools for automation",
        "Short-form video content (especially CGI + UGC hybrid)",
        "Omnichannel strategies (Meta, Google, YouTube, WhatsApp)",
        "Personalized email & WhatsApp flows for retention",
        "Website speed, UX, and landing page funnels"
    ],

    thoughtHeading: "025 isn’t about “doing more” it’s about doing it smarter.",
    thoughtDescription1: "If you’re still using last year’s strategy, you're already behind. But the good news? There's still time to pivot, adapt, and grow.",
    thoughtDescription2: "At Winz Infotech, we help brands stay ahead with custom strategies, killer creatives, and results that show up on your dashboard, not just on your feed. ",

}

const points = [
    {
        title: "1. HYPERLOGICAL ADS",
        description: `The real estate market is no longer just about “location, location, location.” In 2025, it’s also about strategy, speed, and storytelling. Whether you’re a builder, developer, or broker, the way you market properties has evolved dramatically. Buyers expect more. Competition is fiercer. Attention spans are shorter.`,
        tip: `Use interest + behavior targeting (like recently engaged, new parents, or relocation intent) to reach people ready to move.`,
    },
    {
        title: "2. IMMERSIVE VIDEO REELS",
        description: "Static photos don’t cut it anymore. High-conversion listings now include: ",
        features: [
            "Vertical reels for Instagram/Facebook",
            "Cinematic walkthroughs",
            "Drone shots for gated communities or villas",
        ],
        text: "Why it works: ",
        highlight: "People emotionally connect faster through video. It increases retention and sharing, leading to faster inquiries.",
    },
    {
        title: "3. Speed matters. The first builder or broker to follow up usually wins.",
        description: "Speed matters. The first builder or broker to follow up usually wins.",
        features: [
            "Set up auto-replies for inquiries",
            "Use chatbots to answer FAQs",
            "Share project brochures, pricing, and site maps instantly",
        ],
        text: "Bonus: ",
        highlight: " Integrate your CRM to auto-capture and segment leads by budget, location, and timeline. "
    },
    {
        title: "4. Influencer-Backed Walkthroughs",
        description: "Lifestyle + Trust = Fast Sales.",
        features: [
            "Partner with local influencers to walk through your properties and share authentic reviews.",
            "These videos often perform better than polished commercials."
        ],
        text: "Example: ",
        highlight: " A fashion influencer giving a tour of a luxury 3BHK and how it fits her work-from-home + weekend hosting life. ",
    },
    {
        title: "5. Google My Business Optimization (Local SEO) ",
        description: "Most buyers search \"3BHK near me\" or \"flats in Valsad\" before they ever call an agent.",
        features: [
            "Optimize your GMB listing with high-quality images, updated info, and Google posts",
            "Encourage 5-star reviews from site visitors",
            "Post regular updates and high-quality photos"
        ],
        text: "Result: ",
        highlight: "Consistent visibility in local search and maps especially for new projects.",
    },
    {
        title: "6. CGI Rendered Videos for Pre-Launch Projects ",
        description: "Pre-construction doesn't have to mean zero visuals. Use computer-generated imagery (CGI) to showcase:",
        features: [
            "Amenities",
            "Interiors",
            "Nearby landmarks"
        ],
        text: "",
        highlight: "This builds trust even before the first brick is laid.",
    },
    {
        title: "7. Local UGC + Client Testimonials ",
        description: "Feature real buyers, families, or tenants who have moved in. Raw, real videos = social proof. ",
        features: [
            "Why did we choose this home?",
            "What we love most about this community",
        ],
        text: "",
        highlight: "You can post these across Instagram, your website, or use them in retargeting ads. "
    }
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        className="md:text-[17px] text-sm md:mt-4 mt-3 font-normal md:leading-9 leading-6"
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={1}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        Welcome to the brain of Winz Infotech. From proven digital marketing tactics and
                        brand-building frameworks to the latest in design, advertising trends, and social media shifts our
                        blog is your go-to resource for staying ahead in the digital game. Whether you're a founder, marketer, or creative entrepreneur, we break down complex topics
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
                            className="bg-white shadow-md xl:p-6 lg:p-4 md:p-6 sm:p-4 p-2 flex flex-row items-center xl:gap-6 lg:gap-3 sm:gap-6 gap-3"
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
                                <h2 className="font-playfair line-clamp-3 xl:text-2xl lg:text-base md:text-2xl sm:text-xl leading-tight font-light sm:leading-normal hover:text-[#F68D13] transition-all duration-300 text-black">
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
                                        const slug = study.title
                                            .toLowerCase()
                                            .replace(/\s+/g, "-")
                                            .replace(/\//g, "-");
                                        if (study.id === 1) {
                                            navigate(`/blogs/${slug}`, {
                                                state: { blogs }
                                            });
                                        } else if (study.id === 2) {
                                            navigate(`/blogs/${slug}`, {
                                                state: { points }
                                            });
                                        }

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
                />
            </section>

        </div>
    )
}

export default Blogs
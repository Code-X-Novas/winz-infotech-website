import { useNavigate } from "react-router-dom";
import caseStudy from "../assets/case-study.png";
import OrangeCard from "../components/OrangeCard";
import { motion } from "framer-motion";
import TextHover from "../components/Animations/TextHover";
import { useEffect, useState, useRef } from "react";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import SEO from "../components/SEO";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
    {
        id: 1,
        title: "Visa & Immigration Consultant – Nagpur",
        tag: "Visa & Immigration",
        description: "Position the consultancy as a trusted expert in Nagpur and increase revenue by 3x within 2 months.",
        image: caseStudy,
    },
    {
        id: 2,
        title: "Beauty Salon – Mumbai",
        tag: "Beauty Salon",
        description: "Boost beauty salon bookings, increase the average order value, and enhance brand visibility across Mumbai and its metro suburbs.",
        image: caseStudy,
    },
    {
        id: 3,
        title: "Architect – Ahmedabad, Gujarat",
        tag: "Architect",
        description: "Establish a top-of-mind brand as a visionary architect in Ahmedabad and generate high‑value project enquiries.",
        image: caseStudy,
    },
    {
        id: 4,
        title: "Dietician – Delhi",
        tag: "Dietician",
        description: "Grow monthly client consultations from 12-15 to 35+, especially among young professionals seeking wellness.",
        image: caseStudy,
    },
    {
        id: 5,
        title: "Real Estate Builder – Surat",
        tag: "Real Estate",
        description: "Generate qualified inquiries and increase site visits for the upcoming luxury residential project.",
        image: caseStudy,
    },
];

const categories = [
    'All',
    'Visa & Immigration',
    'Beauty Salon',
    'Architect',
    'Dietician',
    'Real Estate',
];

const case_study = [
    {
        id: 1,
        subtitle: "From Low Trust to Local Authority",
        title: "Visa & Immigration Consultant –",
        city: "Nagpur",

        objective:
            "The mission was clear: build trust, attract serious applicants, and 3× revenue in just 60 days. This wasn’t about chasing traffic—it was about creating authority, improving lead quality, and building a predictable enquiry engine in the Nagpur market.",

        challenge: {
            heading: "Even with genuine visa services, the brand was struggling to grow.",
            points: [
                "A generic, outdated website with no clear enquiry journey",
                "Flood of fake and unqualified enquiries wasting time and money",
                "Social media that posted but didn’t educate or build credibility",
                "Country confusion leading to low trust and poor conversions",
            ],
            conclusion:
                "The result? Inconsistent leads, low confidence from prospects, and stalled revenue growth.",
        },

        strategy: {
            heading:
                "Winz Infotech rolled out a full-funnel growth system focused on trust first, performance second.",
            points: [
                "Conversion-First Website: Redesigned the website with a clean enquiry funnel, strong trust elements, and clear service positioning.",
                "SEO with Intent, Not Vanity: Built country-specific visa pages targeting high-intent searches to attract ready-to-act users.",
                "Authority-Building Content: Launched weekly educational reels breaking down visa timelines, processes, and common myths plus active comment replies to humanize the brand and build trust.",
                "Smart Performance Marketing: Ran highly targeted Meta Ads with geo-based targeting and retargeting to filter noise and attract only serious applicants.",
            ],
            conclusion: "Every action was designed to remove doubt and amplify intent."
        },

        results: {
            days: "60 Days",
            heading: "The transformation was fast and measurable:",
            points: [
                "4× more qualified leads in 60 days",
                "+250% organic engagement from visa education reels",
                "Conversion rate jumped from 2% to 9%",
                "Positioned as a trusted immigration authority in Nagpur",
            ],
        },

        outcome:
            "By combining strategy, education, and performance, Winz Infotech transformed a struggling consultancy into a high-trust, lead-driven immigration brand with scalable and sustainable growth.",
    },

    {
        id: 2,
        subtitle: "From Walk-Ins to a Scalable Booking Machine",
        title: "Beauty Salon –",
        city: "Mumbai",

        objective:
            "The goal was to boost monthly salon bookings, increase the average order value per client, and build strong brand visibility across Mumbai and key metro suburbs. This wasn’t just about more footfall, it was about creating a repeatable, high-value booking system.",

        challenge: {
            heading: "Despite offering quality services, the salon was losing revenue at multiple touchpoints.",
            points: [
                "Fragmented branding with no consistent visual identity",
                "Inconsistent social media presence with low recall",
                "A poorly converting booking engine causing drop-offs",
                "Heavy dependence on walk-ins and discounts for sales",
            ],
            conclusion:
                "The result? Missed appointments, low average bills, and slowgrowth",
        },

        strategy: {
            heading:
                "Winz Infotech implemented a brand-led performance strategy designed to convert attention into appointments.",
            points: [
                "Brand Identity That Stands Out: Created a cohesive brand system with a refined color palette, styling guidelines, and premium salon positioning.",
                "High-Conversion Booking Pages: Designed landing pages optimized for mobile bookings, quick service selection, and friction-free appointment flow.",
                "Real Client, Real Results Content: Rolled out consistent UGC and awareness videos featuring real clients, transformations, and testimonials—building instant trust.",
                "Amplified Reach with Performance + Influence: Scaled visibility using Instagram & Facebook ads, supported by strategic micro-influencer collaborations across Mumbai suburbs.",
            ],
            conclusion: "Every step focused on higher intent, higher value, and higher retention."
        },

        results: {
            days: "90 - 120 Days",
            heading: "The salon experienced rapid, scalable growth:",
            points: [
                "5× revenue growth in just 3 months",
                "40% increase in monthly appointments",
                "+1,200 Instagram followers in 120 days",
                "33% improvement in booking funnel conversion rate",
            ],
        },

        outcome:
            "By combining strong branding, social proof, and performance marketing, Winz Infotech transformed the salon into a modern, appointment-driven beauty brand no longer dependent on walk-ins or discounts.",
    },

    {
        id: 3,
        subtitle: "From Invisible to In-Demand",
        title: "Architect –",
        city: "Ahmedabad, Gujarat",

        objective:
            "The goal was to establish the architect as a top-of-mind, visionary design brand in Ahmedabad and generate high-value project enquiries from serious developers and premium residential clients. This wasn’t about mass leads. It was about quality, credibility, and long-term positioning.",

        challenge: {
            heading: "Despite strong design capability, the architect lacked a digital foundation.",
            points: [
                "No online presence to showcase design philosophy or completed projects",
                "A minimal, scattered portfolio that failed to impress decision-makers",
                "No clear brand story or visual differentiation in a crowded market",
                "High dependence on referrals with unpredictable lead flow",
            ],
            conclusion:
                "As a result, premium opportunities were being missed.",
        },

        strategy: {
            heading:
                "Winz Infotech crafted a brand-first growth framework tailored for high-value professional services.",
            points: [
                "Visual-First Portfolio Website: Designed a clean, immersive website focused on large visuals, project storytelling, and architectural credibility built to hold attention, not rush clicks.",
                "Strong Brand Assets & Collateral: Developed refined graphic design assets, brochures, and presentation materials to elevate brand perception during client meetings and proposals.",
                "Precision Performance Marketing: Ran high-intent ad campaigns targeting local real estate developers, builders, and serious homeowners using portfolio-led creatives instead of generic ads.",
            ],
            conclusion: "Every step was focused on attracting decision-makers, not browsers."
        },

        results: {
            days: "First 60 Days",
            heading: "The impact was immediate and measurable:",
            points: [
                "5 high-value project enquiries within the first 2 months",
                "5+ minutes average session duration on the portfolio website",
                "Significant reduction in fake leads",
                "Higher enquiry show-up and meeting conversion rate",
            ],
        },

        outcome:
            "By combining strong visual branding, strategic positioning, and intent-driven marketing, Winz Infotech helped transform the architect into a recognizable, premium design authority in Ahmedabad with quality leads to match the positioning.",
    },

    {
        id: 4,
        subtitle: "From Low Visibility to Go-To Wellness Expert",
        title: "Dietician –",
        city: "Delhi",

        objective:
            "The goal was to scale monthly client consultations from 12–15 to 35+, with a strong focus on young, working professionals in Delhi looking for sustainable wellness solutions. This wasn’t about viral content, it was about credibility, education, and consistent lead flow.",

        challenge: {
            heading: "Despite having the right knowledge, the dietician struggled to be seen and trusted online.",
            points: [
                "Low authority perception in a highly competitive wellness space",
                "Inconsistent content with limited educational value",
                "Weak visibility in local SEO and social media discovery",
                "No structured system to capture and nurture leads",
            ],
            conclusion:
                "As a result, enquiries were sporadic and growth remained stagnant.",
        },

        strategy: {
            heading:
                "Winz Infotech executed a content-led lead generation system designed to educate first and convert next.",
            points: [
                "Authority-Driven Content Engine: Launched a consistent Instagram and blog strategy featuring infographics, practical diet hacks, before-after testimonials, and myth-busting wellness content.",
                "High-Value Lead Magnet: Created a downloadable “7-Day Delhi Clean Meal Plan”, tailored for busy professionals offering immediate value while capturing high-intent leads.",
                "Precision Lead Generation Ads: Deployed targeted ads focused on Delhi-based working professionals, driving traffic directly to the lead magnet instead of a generic consultation pitch.",
            ],
            conclusion: "Every move was built to educate, build trust, and convert without hard selling."
        },

        results: {
            days: "60 Days",
            heading: "The results reflected strong intent and authority growth:",
            points: [
                "3× increase in new consultations within 60 days",
                "28% click-through rate on the downloadable meal plan",
                "+285% growth in Instagram engagement",
                "More informed, high-intent clients booking consultations",
            ],
        },

        outcome:
            "By combining education-first content, smart lead magnets, and targeted advertising, Winz Infotech transformed the dietician into a trusted wellness authority in Delhi with predictable consultation growth and stronger client quality.",
    },

    {
        id: 5,
        subtitle: "Turning Interest into Site Visits",
        title: "Real Estate Builder –",
        city: "Surat",

        objective:
            "The objective was to generate high-quality enquiries and increase on-site visits for an upcoming luxury residential project in Surat. This wasn’t about mass leads it was about attracting serious homebuyers and investors with strong purchase intent.",

        challenge: {
            heading: "Despite being a premium project, the brand lacked premium perception online.",
            points: [
                "Generic branding that failed to reflect the luxury positioning",
                "Low digital visibility among Surat-based homebuyers",
                "Landing pages that were uninspiring and poorly optimized for enquiries",
                "No structured retargeting to re-engage interested visitors",
            ],
            conclusion:
                "As a result, enquiries were inconsistent and site visits were difficult to scale.",
        },

        strategy: {
            heading:
                "Winz Infotech executed a performance-led real estate funnel designed to convert curiosity into action.",
            points: [
                "Custom Website & Conversion-Focused Landing Page: Built a dedicated website and landing page featuring virtual walkthrough videos, interactive floor plans, and friction-free enquiry forms designed to keep buyers engaged longer.",
                "Precision Performance Marketing: Launched Google Search and Facebook/Instagram campaigns targeting local demographics, income brackets, and interest-based segments relevant to luxury homebuyers.",
                "Pixel-Based Retargeting System: Implemented advanced pixel tracking and retargeting to bring back high-intent visitors who didn’t enquire on their first visit.",
            ],
            conclusion: "Every step was optimized to qualify interest and drive site visits, not just clicks."
        },

        results: {
            days: "First 30 Days",
            heading: "The campaign delivered fast, scalable results:",
            points: [
                "150+ high-quality leads generated in the first month",
                "40% reduction in cost-per-lead month over month",
                "62% increase in average website engagement time",
                "Strong pipeline of site visits from intent-driven prospects",
            ],
        },

        outcome:
            "By combining premium presentation, smart targeting, and data-driven retargeting, Winz Infotech helped position the project as a must-consider luxury address in Surat with leads that converted into real site visits.",
    },
];

const CaseStudy = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState('All');
    const [filteredCaseStudies, setFilteredCaseStudies] = useState(caseStudies);
    const pageRef = useRef(null);
    const headingRef = useRef(null);
    const categoriesRef = useRef(null);
    const caseStudiesRef = useRef([]);
    const orangeCardRef = useRef(null);

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

    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Set initial position without overflow
        gsap.set(pageRef.current, { x: '100%' });
        
        // Page load animation - slide in from right
        gsap.to(
            pageRef.current,
            { 
                x: '0%', 
                opacity: 1, 
                duration: 0.8, 
                ease: 'power3.out',
                onComplete: () => {
                    gsap.set(pageRef.current, { clearProps: 'all' });
                }
            }
        );
    }, []);

    useEffect(() => {
        if (selected === 'All') {
            setFilteredCaseStudies(caseStudies);
        } else {
            setFilteredCaseStudies(caseStudies.filter(study => study.tag === selected));
        }
    }, [selected]);

    // Scroll-triggered animations
    useEffect(() => {
        // Kill existing ScrollTriggers to avoid duplicates
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        // Heading animation
        if (headingRef.current) {
            gsap.fromTo(
                headingRef.current,
                { x: 200, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    clearProps: 'none',
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }

        // Categories animation
        if (categoriesRef.current) {
            gsap.fromTo(
                categoriesRef.current,
                { x: 200, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    clearProps: 'none',
                    scrollTrigger: {
                        trigger: categoriesRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }

        // Case studies animation
        caseStudiesRef.current.forEach((card, index) => {
            if (card) {
                gsap.fromTo(
                    card,
                    { x: 200, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: 'power3.out',
                        clearProps: 'none',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                            end: 'bottom 15%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            }
        });

        // Orange card animation
        if (orangeCardRef.current) {
            gsap.fromTo(
                orangeCardRef.current,
                { x: 200, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    clearProps: 'none',
                    scrollTrigger: {
                        trigger: orangeCardRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [filteredCaseStudies]);

    return (
        <div ref={pageRef} style={{ overflow: 'hidden' }}>
            <SEO
                title="Case Studies - Real Client Success Stories | Winz Infotech"
                description="Explore real success stories from our clients. See how Winz Infotech helped businesses increase revenue by 3x, boost bookings by 5x, and generate qualified leads through digital marketing strategies."
                keywords="case studies, client success stories, digital marketing results, revenue growth, lead generation, business transformation, marketing agency results, ROI improvement"
                canonicalUrl="https://winzinfotech.com/case-study"
                ogImage="https://winzinfotech.com/assets/case-study-og.jpg"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "Case Studies - Winz Infotech",
                    "description": "Real client success stories showcasing digital marketing results and business transformations",
                    "url": "https://winzinfotech.com/case-study",
                    "mainEntity": {
                        "@type": "ItemList",
                        "numberOfItems": 5,
                        "itemListElement": [
                            {
                                "@type": "CaseStudy",
                                "name": "Visa & Immigration Consultant - Nagpur",
                                "description": "Increased revenue by 3x within 2 months through strategic digital marketing",
                                "result": "4x more qualified leads in 60 days, 250% organic engagement increase"
                            },
                            {
                                "@type": "CaseStudy",
                                "name": "Beauty Salon - Mumbai",
                                "description": "Boosted salon bookings and enhanced brand visibility across Mumbai",
                                "result": "5x revenue increase in 3 months, 40% increase in monthly appointments"
                            },
                            {
                                "@type": "CaseStudy",
                                "name": "Architect - Ahmedabad, Gujarat",
                                "description": "Established top-of-mind brand positioning for visionary architect",
                                "result": "5 high-value project leads within first 2 months"
                            },
                            {
                                "@type": "CaseStudy",
                                "name": "Dietician - Delhi",
                                "description": "Grew monthly consultations from 12-15 to 35+ clients",
                                "result": "Tripled new consultations in 60 days, 285% Instagram engagement increase"
                            },
                            {
                                "@type": "CaseStudy",
                                "name": "Real Estate Builder - Surat",
                                "description": "Generated qualified inquiries for luxury residential project",
                                "result": "150+ quality leads in first month, 40% reduction in cost-per-lead"
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
                <div
                    ref={headingRef}
                    className="px-8 lg:px-20 xl:px-28"
                >
                    <h2 className="xl:text-7xl lg:text-5xl lg:leading-16 md:text-4xl text-3xl font-medium">
                        Our Clients’ <span className="text-[#F68D13]">Journey</span>
                    </h2>
                    <p className="md:text-[17px] xl:text-[19px] text-sm md:mt-4 mt-3 font-normal md:leading-9 leading-6">
                        From boosting bookings to scaling revenue and building unforgettable brands explore
                        real stories of real results with Winz Infotech.
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="w-full bg-white ">
                <div ref={categoriesRef} className="px-8 lg:px-20 xl:px-28 bg-white w-full">
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

            {/* Case Studies */}
            <section className="w-full lg:my-10 my-5 px-8 lg:px-20 xl:px-28">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                    variants={containerVariants}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {filteredCaseStudies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            ref={(el) => (caseStudiesRef.current[index] = el)}
                            variants={cardVariants}
                            className="bg-white cursor-pointer shadow-md xl:p-6 lg:p-4 md:p-6 sm:p-4 p-2 flex flex-row items-center xl:gap-6 lg:gap-3 sm:gap-6 gap-3"
                            onClick={() => {
                                const slug = study.title
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")
                                    .replace(/\//g, "-");
                                navigate(`/case-study/${slug}`, {
                                    state: { case_study: case_study[study.id - 1] }
                                });
                            }}
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
                                <h2 className="xl:text-2xl lg:text-base md:text-2xl sm:text-xl leading-tight font-light line-clamp-2 sm:leading-normal hover:text-[#F68D13] transition-all duration-300 text-black">
                                    {study.title}
                                </h2>
                                <p className="xl:text-base lg:text-xs md:text-base sm:text-sm text-[10px] line-clamp-4 hover:text-[#F68D13] transition-all duration-300 leading-tight text-gray-600">
                                    {study.description}
                                </p>
                                <div className="text-[#F68D13] xl:text-base lg:text-sm md:text-base sm:text-sm text-[10px] font-medium hover:underline cursor-pointer">
                                    <TextHover text="Read more" customClass="!text-left !px-0" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Orange Box */}
            <section ref={orangeCardRef} className="bg-[#f5f5f5] py-5 md:py-10 px-8 lg:px-20 xl:px-28">
                <OrangeCard
                    title="Big ideas but stuck brand?"
                    description="Wherever You Are in Your Journey, We're Here to Understand, Strategize, and Deliver.Just honest conversations, sharp execution, and results that move the business. Let’s explore what’s possible together."
                    buttonText="Speak to Experts"
                />
            </section>
        </div>
    )
}

export default CaseStudy
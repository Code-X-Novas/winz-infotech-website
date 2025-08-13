import { useEffect, useState } from "react";
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
    {
        title: "Lead Generation",
        description: "Leads that don’t just fill your CRM they convert. We build funnels, creatives, and copy that get the right people to say yes."
    },
    {
        title:"Website Development",
        description: "We craft fast, responsive, and goal-focused websites built to turn visitors into buyers and scale with your brand.",
    },
    {
        title: "Print Media",
        description: "From packaging to brochures, we design print materials that feel premium, communicate clearly, and elevate your offline presence.",
    },
];

const services = [
    {
        path: "logo-design",
        tag: "Logo Design",
        heading: "Logo Design That Leaves a",
        highlight: "Mark",
        tagline: "Your logo isn’t just a design it’s your business’s first handshake.",
        description:
            "At Winz Infotech, we create logos that do more than look good they work hard. They tell stories, build trust, and make your brand memorable across every touchpoint.",
        featureText1: "Why Invest in a",
        image: "https://res.cloudinary.com/dooejuv06/image/upload/v1755105242/Logo_Design_01_fbr2hi.jpg",

        featureText2: "Professional",
        featureText3: "Logo?",
        featureDesc: "A well-designed logo is one of the most valuable assets your business can own.",
        investmentBenefits: [
            {
                id: 1,
                title: "First Impressions Matter",
                description:
                    "Your logo is often the first thing people see. A clean, smart design instantly communicates professionalism, credibility, and trust.",
            },
            {
                id: 2,
                title: "Brand Recognition Starts Here",
                description:
                    "Think of your logo as your signature. We design for memorability, so your brand sticks in the feed, on packaging, on storefronts, and beyond.",
            },
            {
                id: 3,
                title: "Consistency Across Platforms",
                description:
                    "Whether it’s your website, social media, or business card we craft logos that are responsive, scalable, and versatile.",
            },
            {
                id: 4,
                title: "Tailored to Your Brand Personality",
                description:
                    "Minimal, bold, playful, or luxury your logo should reflect your identity. No templates. No shortcuts. Just a custom identity built from the ground up.",
            },
            {
                id: 5,
                title: "Built for Longevity",
                description:
                    "We don’t follow trends. We design for the long game with timeless visuals that grow with your brand.",
            },
        ],

        stepsHeading: "Our Logo",
        stepsHighlight: "Design Process",
        stepsDescription: "Here’s how we turn an idea into an identity: ",
        steps: [
            {
                title: "1. DISCOVERY",
                description:
                    "We begin with a deep dive into your brand’s mission, target audience, and tone.",
            },
            {
                title: "2. STRATEGY & CONCEPT",
                description:
                    "Based on insights, we define a creative direction that aligns with your business goals.",
            },
            {
                title: "3. DESIGN & ITERATION",
                description:
                    "Multiple concepts are created and refined with your feedback.",
            },
            {
                title: "4. DELIVERY",
                description:
                    "We provide all the final files in every format you need from social icons to print-ready assets.",
            },
        ],

        transparentHigh: "Who",
        transparentHeading: "We Design For",
        transparentDesc1: "We’ve helped over ",
        transparentDesc2: "businesses build meaningful identities across industries. From startups to established brands, we understand how to shape perception through powerful design.",
        transparentHighlight: "375+",

        whatHighlight: "What",
        whatHeading: "You Get",
        features: [
            "100% Custom Logo Design",
            "Multiple Concepts + Revisions",
            "Final Files in All Formats (CDR, AI, PNG, SVG, EPS, JPEG)",
            "Typography & Color Palette Guide",
            "Full Commercial Rights",
        ],

        orangeCardHeading: "Ready to Design a Logo That Defines Your Brand?",
        orangeCardDesc: "Whether you're launching a new venture or rebranding an existing one, your logo is the first step in making your brand unforgettable. Let’s craft a logo that not only looks stunning but feels right for your business.",
        orangeCardButton: "Talk to our design team",
    },

    {
        path: "graphic-design",
        tag: "Graphic Design",
        heading: "Graphic Design That Drives",
        highlight: "Action",
        tagline: "Your brand’s visuals are more than decoration; they’re a direct line to your audience’s attention.",
        description: "At Winz Infotech, we design graphics that don’t just look pretty—they communicate, convert, and create impact where it matters most.",
        image: "https://res.cloudinary.com/dooejuv06/image/upload/v1755105241/Logo_Design_05_nzgtlb.jpg",

        featureText1: "Why Great Graphic Design is a",
        featureText2: "Game-Changer",
        featureText3: "",
        featureDesc: "Strong design shapes how people feel, act, and remember your brand. Here’s why investing in top-tier design pays off.",
        investmentBenefits: [
            {
                id: 1,
                title: "Stand Out in a Crowded Feed",
                description: "Whether it's social media or search ads, your audience scrolls fast. We craft visuals that instantly grab attention and stop the scroll.",
            },
            {
                id: 2,
                title: "Turn Browsers into Buyers",
                description: "Great design helps your messaging stick. It supports your offer, builds credibility, and leads users to take action all in seconds. ",
            },
            {
                id: 3,
                title: "Build a Cohesive Brand Look",
                description: "From your Instagram grid to your brochure layout, we ensure visual consistency that builds trust and recognition at every touchpoint. ",
            },
            {
                id: 4,
                title: "Communicate Complex Ideas, Simply",
                description: "Have a product with features to explain? A concept to educate? We turn ideas into clean, easy-to-understand visuals so your message lands fast. ",
            },
            {
                id: 5,
                title: "Custom-Crafted, Not Cookie-Cutter",
                description: "No Canva templates here. Every creative is built uniquely for your brand, your voice, and your goals. ",
            },
        ],

        stepsHeading: "Our Graphic",
        stepsHighlight: "Design Process",
        stepsDescription: "Here’s how we turn visual clutter into brand clarity:",
        steps: [
            { title: "1. Brand Understanding", description: "We start by understanding your goals, audience, and communication style." },
            { title: "2. Design Strategy", description: "We craft a creative direction that fits your brand personality and platform needs. " },
            { title: "3. Design & Feedback", description: "We deliver impactful designs tailored for conversions and refine based on your inputs." },
            { title: "4. Ready-to-Use Delivery", description: "Final files in all required formats, optimized for print, web, or social ready to go live." },
        ],

        transparentHigh: "What",
        transparentHeading: "We Design",
        transparentDesc1: "We’ve designed for ",
        transparentDesc2: " brands across industries. From startup brands to growing businesses, we bring your vision to life through strategic design. ",
        transparentHighlight: "300+",

        whatHighlight: "What",
        whatHeading: "You Get",
        features: [
            "Scroll-stopping, business-led designs",
            "Unique creatives tailored to your brand",
            "Multiple concepts + feedback iterations",
            "Final files for all platforms",
            "Option to retain us for monthly design support",
        ],


        orangeCardHeading: "Ready to Upgrade Your Visuals?",
        orangeCardDesc: "Whether you need scroll-stopping social creatives, packaging that pops, or brand visuals that turn heads, we’re here to craft designs that do more than just look good. They perform.",
        orangeCardButton: "I’m Ready to Breakthrough",
    },

    {
        path: "branding",
        tag: "Branding",
        heading: "Branding That Builds More Than Just a",
        highlight: "Look",
        tagline: "Branding isn’t just how your business looks—it’s how it feels, connects, and lasts in the minds of your audience.",
        description: "At Winz Infotech, we build voice, vibe, and visual identity that people remember and return to.",
        image: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106551/Banner_02_copy_n7yv7z.jpg",

        featureText1: "Why Strategic",
        featureText2: "Branding",
        featureText3: "Matters",
        featureDesc: "Strong branding is the foundation of every successful business. Here's how our process gives you the edge:",
        investmentBenefits: [
            {
                id: 1,
                title: "Build Instant Recognition",
                description: "From your logo to your colors to your brand voice consistency builds familiarity. And familiarity builds trust.",
            },
            {
                id: 2,
                title: "Charge More with Confidence",
                description: "Powerful branding lets you stop competing on price. It tells people you’re premium before you even say a word. ",
            },
            {
                id: 3,
                title: "Attract the Right Audience",
                description: "Branding helps you speak directly to your ideal customer so you attract people who get you, love you, and stay loyal.",
            },
            {
                id: 4,
                title: "Unify Your Business Internally",
                description: "Great branding isn't just for your audience. It aligns your team, your messaging, and your goals all in one direction. ",
            },
            {
                id: 5,
                title: "Scale with Clarity",
                description: "As you grow, your brand grows with you. Our systems ensure you have a scalable identity that stays cohesive across every platform. ",
            },
        ],

        stepsHeading: "Our Branding",
        stepsHighlight: "Process",
        stepsDescription: "Here’s how we build brands that grow:",
        steps: [
            { title: "1. Brand Discovery", description: "We understand your story, values, target audience, and market landscape. " },
            { title: "2. Strategy Mapping", description: "We position your brand to stand out, not just look good, but say something meaningful. " },
            { title: "3. Visual & Verbal Identity", description: "From color palettes to tone of voice, we craft every element with intention." },
            { title: "4. Brand Delivery Kit", description: "You get a full library of brand assets, templates, and guidelines built to scale with you. " },
        ],

        transparentHigh: "What’s Included",
        transparentHeading: "in Our Branding Service",
        transparentDesc1: "We’ve helped ",
        transparentDesc2: "businesses transform how they show up and scale. Whether you’re launching from scratch or rebranding to scale, we’re your creative growth partner.",
        transparentHighlight: "300+",

        whatHighlight: "What",
        whatHeading: "You Walk Away With",
        features: [
            "A distinct, polished brand identity ",
            "Strategy-driven design + messaging",
            "Full asset kit for all platforms ",
            "Clear brand guide for future use ",
            "100% ownership + commercial rights",
        ],

        orangeCardHeading: "Let’s Build a Brand That Turns Heads and Drives Growth. ",
        orangeCardDesc: "From first impressions to long-term impact, we help brands unlock their true potential. Wherever you’re starting, we’ll meet you there and guide the way forward. ",
        orangeCardButton: "Talk to Our Branding Experts",

    },

    {
        path: "social-media-management",
        tag: "Social Media Management",
        heading: "Social Media That Builds More Than Just a",
        highlight: "Presence",
        tagline: "Social media is no longer optional. It’s where your brand lives, grows, and connects. We make sure it performs.",
        description: "From strategy to content to scheduling — we handle it all, so your brand shows up every day and stands out every time.",
        image: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106492/Hording_02_u9pu0h.jpg",

        featureText1: "Why",
        featureText2: "Social Media",
        featureText3: "Management Matters",
        featureDesc:
            "Social media is your digital storefront. We turn passive viewers into engaged communities and loyal customers. Here's how:",
        investmentBenefits: [
            {
                id: 1,
                title: "Stay Consistent, Without Lifting a Finger",
                description:
                    "From ideas to captions to scheduling, we handle everything, so your brand shows up every day, effortlessly.",
            },
            {
                id: 2,
                title: "Build Community & Engagement",
                description:
                    "We don’t chase empty likes. We create content that resonates, connects, and builds a loyal following that talks back.",
            },
            {
                id: 3,
                title: "Convert Viewers Into Buyers",
                description:
                    "With a smart content strategy and compelling creatives, we move people from your feed to your funnel faster.",
            },
            {
                id: 4,
                title: "Strengthen Brand Positioning",
                description:
                    "Through visuals and voice, we ensure your brand stands out clearly and confidently across every platform.",
            },
            {
                id: 5,
                title: "Save Time. Gain Impact.",
                description:
                    "No more guesswork, no more gaps. We give you peace of mind while your audience grows and your content works hard.",
            },
        ],

        stepsHeading: "Our Social Media",
        stepsHighlight: "Content Formula",
        stepsDescription: "Here’s how we grow your brand through content:",
        steps: [
            {
                title: "1. Strategy First",
                description:
                    "We identify your brand voice, target audience, and platform-specific goals.",
            },
            {
                title: "2. Calendar & Pillars",
                description:
                    "We plan content types that educate, entertain, convert, and engage consistently.",
            },
            {
                title: "3. Design & Copywriting",
                description:
                    "Scroll-stopping visuals. Conversion-friendly captions. Aligned with your brand and audience.",
            },
            {
                title: "4. Scheduling & Analytics",
                description:
                    "We post at the right time, on the right platforms, and review the data monthly to optimize performance.",
            },
        ],

        transparentHigh: "What’s Included",
        transparentHeading: "in Our Social Media Packages",
        transparentDesc1: "We offer a full-service solution — from",
        transparentDesc2: " strategy to execution. Whether you're growing or scaling, we tailor it to your goals.",
        transparentHighlight: "Strategy → Growth",

        whatHighlight: "What",
        whatHeading: "You Walk Away With",
        features: [
            "Done-for-you content creation",
            "Branded visuals that resonate",
            "Strategic growth with data-backed insights",
            "Increased reach, engagement & leads",
            "Consistency that converts",
        ],

        orangeCardHeading: "Show Up. Stand Out. Sell More.",
        orangeCardDesc:
            "Your audience is online. Are you making the impact you should? Let’s create content that earns attention, builds trust, and fuels your business growth.",
        orangeCardButton: "Book a Free Content Strategy Call",
    },

    {   
        path: "ugc-cgi-videos",
        tag: "UGC/CGI Video",
        heading: "UGC & CGI Videos That Sell Without Feeling ",
        highlight: "Like Ads",
        tagline: "In a world flooded with content, people crave authenticity and imagination. ",
        description: "That’s where UGC (User-Generated Content) and CGI (Computer-Generated Imagery) come in one drives trust, the other grabs attention. At Winz Infotech, we blend both to create videos that look real, feel relatable, and drive real results. ",
        image: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106443/Office_Wall_03_gi0fou.jpg",

        featureText1: "Why",
        featureText2: "UGC & CGI Videos",
        featureText3: "Work Better Than Traditional Ads",
        featureDesc: "",
        investmentBenefits: [
            {
                id: 1,
                title: "They Build Instant Trust",
                description:
                    "People trust people. UGC videos mimic real-life experiences, making your brand more relatable and believable.",
            },
            {
                id: 2,
                title: "They Look Native, Not Pushy",
                description:
                    "Our videos don’t interrupt feeds—they blend in. That’s why they convert better than overly polished ads.",
            },
            {
                id: 3,
                title: "They Tell a Real Story",
                description:
                    "We script and shoot content that focuses on benefits, not just features. It’s not about your product, it’s about the transformation it offers.",
            },
            {
                id: 4,
                title: "They Perform Across Platforms",
                description:
                    "Whether it’s Instagram, YouTube Shorts, Amazon, or DTC landing pages, our videos are optimized for every screen and scroll.",
            },
            {
                id: 5,
                title: "They’re Cost-Effective + Scalable",
                description:
                    "Skip the studio and expensive production. With UGC & CGI, you get scroll-stopping content faster, cheaper, and more frequently.",
            },
        ],

        stepsHeading: "What",
        stepsHighlight: "We Offer",
        stepsDescription: "We’ve helped D2C brands, eCommerce stores, wellness coaches, and tech startups scale their ad creatives with authentic UGC and stylized CGI. ",
        steps: [
            {
                title: "High-Converting UGC Videos",
                description:
                    "From testimonials and unboxings to lifestyle product demos, we craft relatable content that looks organic but performs like paid ads.",
            },
            {
                title: "Visually Stunning CGI Videos",
                description:
                    "Need hyper-realistic visuals? Our 3D product renderings, animations, and VFX videos bring your brand to life with jaw-dropping creativity.",
            },
            {
                title: "Scriptwriting + Storyboarding",
                description:
                    "We don’t just “shoot”—we strategize. Every video is backed by a content goal and creative plan.",
            },
            {
                title: "Professional UGC Creators ",
                description:
                    "We work with vetted creators across India who match your niche, voice, and audience.",
            },
            {
                title: "Platform-Optimized Editing",
                description:
                    "Square, vertical, 15s, 60s, captions, hooks—all optimized for Meta Ads, Reels, YouTube Shorts, and Amazon A+.",
            },
        ],

        transparentHigh: "Who",
        transparentHeading: "Did We Help",
        transparentDesc1: "Whether you're launching a product, running ads, or building your brand, UGC & CGI content makes your brand stand out and convert",
        transparentDesc2: " ",
        transparentHighlight: "",
        
        whatHighlight: "What",
        whatHeading: "You Walk Away With",
        features: [
            "Professionally Shot UGC or CGI Videos",
            "Storyboard + Scripting + Editing",
            "Platform-Specific Format Variants",
            "Thumbnail, Hook & Caption Suggestions",
            "Fast Turnaround + Performance-Focused Cuts",
            "Rights for Organic & Paid Campaigns",
        ],

        orangeCardHeading: "UGC That Feels Real. CGI That Feels Magic.",
        orangeCardDesc:
            "Let your product speak through real people or through cinematic visuals. Either way, we make content that connects, converts, and scales your brand.",
        orangeCardButton: "Ready to Go Viral? Let’s Talk",

    },

    {
        path: "influencer-marketing",
        tag: "Influencer Marketing",
        heading: "Influencer Marketing That Feels Real",
        highlight: "And Performs",
        tagline: "People don’t trust ads. They trust people.",
        description: "That’s why we create influencer campaigns that don’t just 'collab' — they connect. At Winz Infotech, we build influencer strategies rooted in authenticity, creativity, and clear ROI so your brand becomes part of conversations, not interruptions.",
        image: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106512/Flyer_pv562w.jpg",

        featureText1: "Why",
        featureText2: "Influencer Marketing",
        featureText3: "Works in 2025",
        featureDesc: "",
        investmentBenefits: [
            {
                id: 1,
                title: "Trust > Targeting",
                description:
                    "Influencers already have your audience’s attention and trust. When they talk, people listen (and click).",
            },
            {
                id: 2,
                title: "Organic Reach Without Ads",
                description:
                    "Influencer posts cut through algorithm noise better than boosted content on platforms like Instagram, YouTube, and LinkedIn.",
            },
            {
                id: 3,
                title: "Storytelling That Converts",
                description:
                    "We align your brand values with influencer voices to turn followers into fans and buyers.",
            },
            {
                id: 4,
                title: "Performance + Awareness in One",
                description:
                    "Whether it's sales or visibility, campaigns drive clicks, signups, and brand recall together.",
            },
            {
                id: 5,
                title: "Scalable, Measurable, Repeatable",
                description:
                    "From nano to celebrity creators, we build repeatable funnels with performance metrics that matter.",
            },
        ],

        stepsHeading: "What",
        stepsHighlight: "We Offer",
        stepsDescription:
            "We help brands across industries turn influencer buzz into real business — launching, scaling, or festive pushing with the right voice at the right time.",
        steps: [
            {
                title: "Influencer Discovery & Vetting",
                description:
                    "We don’t just look at followers — we analyze relevance, engagement, brand fit, and audience quality.",
            },
            {
                title: "Campaign Strategy & Positioning",
                description:
                    "Creative campaigns built around trends and messaging that feel organic, not forced.",
            },
            {
                title: "Content Planning + Briefing",
                description:
                    "Each reel, post, or story supports a clear brand message with freedom for creator creativity.",
            },
            {
                title: "Execution + Tracking",
                description:
                    "From coordination and deadlines to rollout, we handle it all for smooth delivery.",
            },
            {
                title: "Performance Reporting",
                description:
                    "Know what worked, who converted, and where to scale — with transparent metrics across reach, CPM, and CPA.",
            },
        ],

        transparentHigh: "Who",
        transparentHeading: "Did We Help",
        transparentDesc1:
            "We help brands across industries turn influencer buzz into real business. Whether you're launching, scaling, or running a festive push, we match you with the right voice at the right time. ",
        transparentDesc2: "",
        transparentHighlight: "",

        whatHighlight: "What",
        whatHeading: "You Get",
        features: [
            "Custom Influencer Campaign Strategy",
            "Access to 5000+ Verified Creators",
            "Influencer Management & Negotiation",
            "Multi-Platform Campaign Rollouts (Insta, FB, Youtube, etc.)",
            "Content Usage Rights + Ad Whitelisting",
            "Monthly Campaign Reporting & Insights",
        ],

        orangeCardHeading: "Influence That Moves the Brand",
        orangeCardDesc:
            "Real creators. Real engagement. Real growth. Let’s turn scrolls into sales with influencers who speak your audience’s language.",
        orangeCardButton: "Let’s Influence, Strategically",
    },

    {
        path: "performance-marketing",
        tag: "Performance Marketing",
        heading: "Performance Marketing That’s Built for ROI,",
        highlight: "Not Just Reach",
        tagline: "We don’t just run ads. We build engines that convert.",
        description: "We turn ad spend into customers through data-backed strategies, funnel optimization, and relentless performance tweaks. If you're looking for growth you can measure — you're in the right place.",
        image: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106558/Brochure_02_Inner_pjp0a5.jpg",

        featureText1: "Why",
        featureText2: "Performance Marketing",
        featureText3: "Still Wins in 2025",
        featureDesc: "",
        investmentBenefits: [
            {
                id: 1,
                title: "Instant Visibility. Immediate Results.",
                description:
                    "With the right audience, message, and funnel, paid ads deliver traffic that converts from day one.",
            },
            {
                id: 2,
                title: "Every Rupee Is Accountable",
                description:
                    "Track every impression, click, lead, or sale. Our campaigns are built on transparency and measurable ROI.",
            },
            {
                id: 3,
                title: "Full-Funnel Strategy",
                description:
                    "From TOFU (cold audiences) to BOFU (ready-to-buy users), we plan campaigns that guide users through your funnel not just stop at views. ",
            },
            {
                id: 4,
                title: "Test, Learn, Scale",
                description:
                    "We test fast, learn faster, and double down on what’s working so you grow while your competitors guess.",
            },
            {
                id: 5,
                title: "Platform-Smart, Not Platform-Dependent",
                description:
                    "Facebook, Google, Instagram, YouTube, LinkedIn, we use the right mix for your business, not a one-size-fits-all playbook.",
            },
        ],

        stepsHeading: "What",
        stepsHighlight: "We Offer",
        stepsDescription:
            "From strategy to execution, our services are tailored to convert browsers into buyers, and budgets into business growth.",
        steps: [
            {
                title: "Meta Ads (Facebook + Instagram)",
                description:
                    "From dynamic creatives to retargeting flows, we turn scrollers into buyers.",
            },
            {
                title: "Google Ads (Search + YouTube)",
                description:
                    "Capture high-intent customers with smart targeting, compelling ad copy, and optimized landing pages.",
            },
            {
                title: "Conversion-Focused Funnel Strategy",
                description:
                    "Ad campaigns work when the full funnel works. We fix leaks and boost your ROAS with landing page tweaks, CTAs, and email flows.",
            },
            {
                title: "Performance Optimization & Scaling",
                description:
                    "We manage budgets, track KPIs, and constantly improve. No set-it-and-forget-it ads here. ",
            },
            {
                title: "Custom Reporting & Insights",
                description:
                    "Know exactly where your money is going and what you’re getting in return. Weekly insights, monthly breakdowns, zero guesswork.",
            },
        ],

        transparentHigh: "Who",
        transparentHeading: "Did We Help",
        transparentDesc1:
            "We’ve helped ",
        transparentDesc2: "brands turn ad budgets into business growth across industries. Whether you’re launching your first ad or scaling past ₹10L/month in spend, we know how to dial in profitable campaigns.",
        transparentHighlight: "150+",

        whatHighlight: "What",
        whatHeading: "You Get",
        features: [
            "Custom Ad Strategy + Platform Mix",
            "Ad Copy + Creative Direction",
            "Funnel Setup + Landing Page Audit",
            "Campaign Setup + Daily Optimization",
            "Budget & Audience Management",
            "Performance Tracking & Reporting",
        ],

        orangeCardHeading: "Performance. Not Promises.",
        orangeCardDesc:
            "If you're done wasting budget on campaigns that look good but don’t convert, let’s talk. At Winz Infotech, we make every rupee work for growth that shows up in your bank, not just your dashboard.",
        orangeCardButton: "Let’s Scale Smart",
    },
    
    {
        path: "lead-generation",
        tag: "Lead Generation",
        heading: "Lead Systems That Work While",
        highlight: "You Sleep",
        tagline: "You don’t need more followers, you need more buyers.",
        description: "At Winz Infotech, we don’t just chase vanity metrics; we build high-converting lead funnels that bring real inquiries, real bookings, and real business. We combine sharp strategy, compelling content, and targeted outreach to turn strangers into warm leads daily.",
        image: "https://res.cloudinary.com/dooejuv06/image/upload/v1755106355/Standee_03_basbjv.jpg",

        featureText1: "Why",
        featureText2: "Our Lead Gen",
        featureText3: "Works",
        featureDesc: "",
        investmentBenefits: [
            {
                id: 1,
                title: "Built for Your Industry",
                description:
                    "Every campaign is customized based on your niche, target audience, and sales cycle whether you’re a service business, coach, or D2C brand.",
            },
            {
                id: 2,
                title: "Multi-Channel Strategy",
                description:
                    "From Instagram DMs and WhatsApp flows to landing pages and paid ads, we use platforms your customers already live on.",
            },
            {
                id: 3,
                title: "Pre-Qualified Leads, Not Cold Traffic",
                description:
                    "We don’t dump you with unfit leads. We build filters, forms, and flows that ensure only serious prospects come through.",
            },
            {
                id: 4,
                title: "Consistent Daily Inquiries",
                description:
                    "Our systems run like clockwork, so your calendar never looks empty again.",
            },
            {
                id: 5,
                title: "Done-for-You Setup & Optimization",
                description:
                    "From lead magnets and ad creatives to CRM integration and nurturing, we handle everything, so you just focus on converting.",
            },
        ],

        stepsHeading: "Our Lead",
        stepsHighlight: "Generation Process",
        stepsDescription: "If your growth depends on qualified leads, we’re your plug.",
        steps: [
            {
                title: "Discovery & Targeting",
                description:
                    "We define your dream client, analyze market behavior, and study the competition.",
            },
            {
                title: "Offer Creation & Funnel Design",
                description:
                    "We craft irresistible offers and build a conversion-focused lead funnel optimized for clicks, conversions, and follow-ups.",
            },
            {
                title: "Campaign Launch",
                description:
                    "We deploy your lead-gen campaigns across high-performing channels like Meta, Google, LinkedIn, or Instagram.",
            },
            {
                title: "Optimization & Reporting",
                description:
                    "Weekly tweaks, daily monitoring, and ongoing A/B testing because scaling is not a one-time task.",
            },
        ],

        transparentHigh: "What",
        transparentHeading: "Did We Help",
        transparentDesc1: "If your growth depends on qualified leads,",
        transparentDesc2: "we’re your plug.",
        transparentHighlight: "",

        whatHighlight: "What",
        whatHeading: "You Get",
        features: [
            "High-Converting Ad Creatives",
            "Landing Page + Funnel Setup",
            "Lead Magnet Strategy (PDFs, Guides, Offers)",
            "CRM Integration (Google Sheets, WhatsApp, Email)",
            "Daily/Weekly Reporting",
            "Continuous Campaign Optimization",
        ],

        orangeCardHeading: "Get Leads on Autopilot While You Focus on What Matters Most.",
        orangeCardDesc:
            "We craft lead generation systems that work, powered by smart targeting, compelling creatives, and proven strategy. From attracting the right audience to turning interest into real conversations, we deliver high-quality leads so you can focus on closing, not chasing.",
        orangeCardButton: "Start Getting Daily Inquiries",
    },

    {
        path: "website-and-funnel-design",
        tag: "Website & Funnel Design",
        heading: "More Than Just a Website,",
        highlight: "It’s Your 24/7 Sales Engine.",
        tagline: "Your website isn’t just a brochure, it’s your hardest-working salesperson.",
        description: "At Winz Infotech, we design high-converting websites and funnels that don't just look stunning, they guide visitors, capture leads, and drive real sales. Whether you're selling services, products, or ideas, we build websites that move people to click, trust, and buy.",
        image: "https://res.cloudinary.com/dooejuv06/image/upload/v1755105949/Logo_Design_06_1_dt3l7i.jpg",

        featureText1: "Why",
        featureText2: "Funnel-Focused Website",
        featureText3: "Design?",
        featureDesc: "A smart website does more than look pretty. Here’s what ours are built to do:",
        investmentBenefits: [
            {
                id: 1,
                title: "Guide Visitors to Take Action",
                description:
                    "Every element from copy to CTA is crafted to move users from interest to inquiry to purchase.",
            },
            {
                id: 2,
                title: "Speed, Structure & Strategy",
                description:
                    "We build lightning-fast sites with a clear visual hierarchy and page flow so your users never bounce, only convert.",
            },
            {
                id: 3,
                title: "Mobile-First & Sales-Ready",
                description:
                    "Your audience is on the move. We design mobile-first experiences that keep them engaged and converting from any device.",
            },
            {
                id: 4,
                title: "Optimized for SEO + Paid Ads",
                description:
                    "Our sites are funnel-aligned but also SEO-friendly, ensuring visibility and performance whether you're ranking organically or running ads.",
            },
            {
                id: 5,
                title: "Integrated with Tools You Use",
                description:
                    "From CRM, payment gateways, email automation, to lead tracking, your site becomes a seamless part of your marketing ecosystem.",
            },
        ],

        stepsHeading: "Our Website & Funnel",
        stepsHighlight: "Design Process",
        stepsDescription: "",
        steps: [
            {
                title: "Strategy Session",
                description:
                    "We start with your goals, audience behavior, and product/service flow to map a smart funnel journey.",
            },
            {
                title: "Wireframe & Funnel Flow",
                description:
                    "We sketch out each step from landing page to thank-you page ensuring every click has a purpose.",
            },
            {
                title: "Design That Sells",
                description:
                    "We design a beautiful, responsive website infused with sales psychology and your brand essence.",
            },
            {
                title: "Development & Launch",
                description:
                    "Fast loading, secure, scalable. We build on platforms like WordPress, Webflow, Shopify, or custom-coded solutions.",
            },
            {
                title: "Optimize & Grow",
                description:
                    "We track real-time performance and iterate based on user data for even better results.",
            },
        ],

        transparentHigh: "What",
        transparentHeading: "We Do",
        transparentDesc1: "From early-stage founders to scaling brands.",
        transparentDesc2: "We’ve built revenue-driving websites.",
        transparentHighlight: "",

        whatHighlight: "What",
        whatHeading: "You Get",
        features: [
            "Conversion-Optimized Website",
            "Funnel Pages (Landing, Thank You, Booking, Checkout, etc.)",
            "Responsive Design (Mobile + Tablet + Desktop)",
            "Lead Forms, Payment & CRM Integrations",
            "SEO + Speed Optimization",
            "Post-Launch Support & Training",
        ],

        orangeCardHeading: "Your Funnel Starts Here",
        orangeCardDesc:
            "A good website tells your story. A great website makes people take action. Let’s build one that does both.",
        orangeCardButton: "Book a Consultation Now"
    },

    {
        path: "print-design",
        tag: "Print Design",
        heading: "Print Design That Leaves a",
        highlight: "Lasting Impression",
        tagline: "In a digital-first world, print isn’t dead boring design is.",
        description: "At Winz Infotech, we blend strategy with aesthetics to create print assets that stop people mid-scroll in real life. Whether it’s your brochure, packaging, or a billboard on the highway. we make every square inch count.",
        image: "https://res.cloudinary.com/dooejuv06/image/upload/v1755105247/09_edwypx.jpg",

        featureText1: "Why",
        featureText2: "Invest in Great",
        featureText3: "Print Design?",
        featureDesc: "Print builds trust. It’s tactile, permanent, and when done right unforgettable. Here's how our designs deliver value:",
        investmentBenefits: [
            {
                id: 1,
                title: "Tangible Impact",
                description:
                    "Print materials offer a real-world connection to your brand something physical that people can touch, keep, and remember.",
            },
            {
                id: 2,
                title: "Brand Consistency Offline",
                description:
                    "We ensure your brand looks just as sharp on paper as it does on screen seamless across all channels.",
            },
            {
                id: 3,
                title: "Sales Enablement Tools That Work",
                description:
                    "From pitch decks to product catalogs, our print designs help you close deals and open doors.",
            },
            {
                id: 4,
                title: "Stand Out in Events & Retail",
                description:
                    "Be the brand that gets remembered at expos, meetups, or store shelves not the one that gets tossed away.",
            },
            {
                id: 5,
                title: "Designed for Attention, Built for Recall",
                description:
                    "Every layout, typeface, and finish is chosen to evoke emotion, boost recall, and spark conversations.",
            },
        ],

        stepsHeading: "What",
        stepsHighlight: "We Design",
        stepsDescription: "We craft print assets that speak your brand’s language and sell your story:",
        steps: [
            {
                title: "Brochures & Company Profiles",
                description: "Tell your brand story with sleek, well-structured brochures and company profiles that leave a lasting impression during meetings, pitches, or events.",
            },
            {
                title: "Packaging & Labels",
                description: "Make your product shelf-ready with eye-catching packaging and labels that reflect your brand's essence and attract buyers instantly.",
            },
            {
                title: "Carry Bags, Tags & Merchandise",
                description: "Turn everyday items into brand ambassadors with beautifully designed bags, tags, and branded merchandise that customers love to carry.",
            },
            {
                title: "Flyers, Posters & Hoardings",
                description: "Promote offers, events, or campaigns with bold, clear, and visually striking designs that grab attention in crowded spaces.",
            },
            {
                title: "Menu Cards & Service Sheets",
                description: "Present your offerings in an appealing and easy-to-digest format that enhances customer experience and supports better decision-making.",
            },
            {
                title: "Catalogs & Pitch Decks",
                description: "Showcase your products or services with engaging layouts that combine visuals and information to drive sales and investor interest.",
            },
            {
                title: "Office Branding & Signage",
                description: "Turn your workspace into a brand experience with cohesive office design, directional signage, and motivational branding.",
            },
            {
                title: "Event Collateral (Standees, Banners, Invite Cards)",
                description: "Make your event presence unforgettable with print materials that are not only informative but also aligned with your visual identity.",
            },
        ],

        transparentHigh: "What",
        transparentHeading: "We Do",
        transparentDesc1: "We’ve designed for brands across industries",
        transparentDesc2: "From local stores to luxury startups, we create print that performs.",
        transparentHighlight: "375+",

        whatHighlight: "What",
        whatHeading: "You Get",
        features: [
            "100% Custom Print Design",
            "Print-Ready Files (CMYK, High-Resolution)",
            "Paper & Finishing Suggestions",
            "Typography + Visual Consistency",
            "Collaboration With Your Printer (If Needed)",
            "Fast Turnarounds + Revisions Included",
        ],

        orangeCardHeading: "Your Brand Deserves to Be Held Not Just Seen.",
        orangeCardDesc:
            "Want to build print materials that feel as premium as your product or service? Let’s make your brand impossible to ignore on shelves, in hands, and in minds.",
        orangeCardButton: "Craft My Brand’s Print Identity",

        footerCardHeading: "Big ideas? Stuck brand? Half-done website?",
        footerCardDesc:
            "Wherever You Are in Your Journey, We're Here to Understand, Strategize, and Deliver. Just honest conversations, sharp execution, and results that move the business. Let’s explore what’s possible together.",
        footerCardButton: "Speak to Experts"
    }
]

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
                                    const slug = service.title
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")    
                                        .replace(/\//g, "-");    
                                    navigate(`/services/${slug}`, {
                                        state: { services: services[index] }
                                    });
                                }}

                                className="text-[#F68D13] cursor-pointer hover:underline md:text-3xl text-2xl font-medium md:mb-4 mb-2"
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
                    className="mx-auto px-6 py-2 text-white bg-[#F68D13] hover:bg-[#e77b0c] rounded-full font-medium transition"
                >
                    See all
                </button>
            )}
        </div>
    );
};

export default ServiceCard;

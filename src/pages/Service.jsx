import { useEffect } from "react";
import OrangeCard from "../components/OrangeCard"
import ServiceCard from "../components/ServiceCard"
import SEO from "../components/SEO"

const Service = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const servicesStructuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Digital Marketing Services",
        "provider": {
            "@type": "Organization",
            "name": "Winz Infotech",
            "url": "https://winzinfotech.com"
        },
        "serviceType": "Digital Marketing",
        "description": "Comprehensive digital marketing, web development, branding, and design services",
        "offers": [
            {
                "@type": "Offer",
                "name": "Logo Design",
                "price": "14999",
                "priceCurrency": "INR"
            },
            {
                "@type": "Offer",
                "name": "Website Development",
                "price": "49999",
                "priceCurrency": "INR"
            },
            {
                "@type": "Offer",
                "name": "Social Media Management",
                "price": "29999",
                "priceCurrency": "INR"
            }
        ]
    };

    return (
        <div className="bg-gray-100 md:mt-85 sm:mt-65 mt-75">
            <SEO
                title="Our Services - Digital Marketing & Web Development | Winz Infotech"
                description="Explore Winz Infotech's comprehensive digital services: logo design, branding, web development, social media management, performance marketing, and more. Starting from ₹999."
                keywords="digital marketing services, web development services, logo design, branding services, social media management, performance marketing, graphic design, influencer marketing, lead generation"
                url="/services"
                image="/logoNew.png"
                structuredData={servicesStructuredData}
            />
            {/* Header Section */}
            <header className="fixed top-18 left-0 w-full -z-1 bg-white mt-10 lg:px-10 xl:px-16 px-6">
                <h1 className="xl:text-6xl lg:text-5xl lg:leading-16 md:text-4xl text-3xl font-medium">Our <span className="text-[#F68D13]">Services</span></h1>
                <p className="md:text-[17px] max-w-7xl text-sm md:mt-4 mt-3 font-normal md:leading-9 leading-6">
                    We deliver design, branding, and marketing solutions tailored to elevate your digital presence. Thoughtfully built. Creatively executed.We deliver design, branding, and marketing solutions tailored to elevate your digital presence.
                </p>
            </header>

            {/* Card + Box */}
            <div className="relative z-10 ">
                {/* Services Card */}
                <section className="max-w-[1500px] p-6 mx-auto mt-8">
                    <ServiceCard />
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
        </div>
    )
}

export default Service
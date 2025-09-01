import bgImage from "../img/bg1.png";
import mapimg from "../img/map.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useInView } from "react-intersection-observer";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import ContactUsFooter from "../components/ContactUsFooter";
import TextHover from "../components/Animations/TextHover";
import SEO from "../components/SEO";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        contactNo: "",
        email: "",
        businessName: "",
        budget: "",
        message: "",
    });

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_wjqzp4j",
                "template_5yqvdqn",
                formData,
                "4Lm6oNcJqGzZHJhXE"
            )
            .then(
                (result) => {
                    console.log("Email sent successfully:", result.text);
                    alert("Message sent successfully!");
                    setFormData({
                        name: "",
                        contactNo: "",
                        email: "",
                        businessName: "",
                        budget: "",
                        message: "",
                    });
                },
                (error) => {
                    console.log("Error sending email:", error.text);
                    alert("Failed to send message. Please try again.");
                }
            );
    };

    const contactStructuredData = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Winz Infotech",
        "description": "Get in touch with Winz Infotech for digital marketing, web development, and branding services. Let's build the next big thing together.",
        "mainEntity": {
            "@type": "Organization",
            "name": "Winz Infotech",
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "info@winzinfotech.com",
                "telephone": "+91-7203030730"
            }
        }
    };

    return (
        <>
            <SEO
                title="Contact Us - Let's Build Your Next Big Thing | Winz Infotech"
                description="Ready to transform your business? Contact Winz Infotech for expert digital marketing, web development, and branding services. Get a free consultation today."
                keywords="contact winz infotech, digital marketing consultation, web development quote, branding services contact, free consultation"
                url="/contact"
                image="/logoNew.png"
                structuredData={contactStructuredData}
            />

            {/* Main Flex Container */}
            <div className="min-h-screen text-black lg:px-10 xl:px-16 px-6 relative w-full mt-20 lg:pt-10 pt-5">
                <div className="flex flex-col md:flex-row gap-5 items-stretch min-h-[80vh]">
                    {/* Left Side */}
                    <div className="md:w-1/2 w-full bg-white flex flex-col md:min-h-[80vh]">
                        {/* Heading */}
                        <div>
                            <h1 className="xl:text-7xl px-5 lg:text-6xl sm:text-5xl text-4xl font-medium">
                                Let's Build
                            </h1>
                            <h2 className="xl:text-6xl px-5 pb-5 lg:text-5xl sm:text-4xl text-3xl font-medium text-[#F68D13]">
                                Something Big!
                            </h2>
                        </div>

                        {/* Contact Info */}
                        <div className="px-4 sm:px-6 pb-6 flex flex-col justify-center">
                            <h3 className="font-medium w-fit mb-4 bg-gray-200 text-gray-700 inline-block px-3 py-1 rounded text-xs sm:text-sm md:text-base">
                                Contact Info
                            </h3>
                            <div className="flex justify-center items-center">
                                <img src="/contact-us-image.png" alt="" className="lg:w-[300px] w-[200px] lg:h-[300px] h-[200px]" />
                            </div>

                            <div className="mt-6 space-y-6">
                                <div className="flex lg:flex-row md:flex-wrap sm:flex-row flex-col justify-between gap-4">
                                    {/* Email */}
                                    <a 
                                        href="mailto:info@winzinfotech.com" 
                                        className="flex items-center gap-3"
                                    >
                                        <FaEnvelope className="text-[#F68D13] md:text-2xl text-xl" />
                                        <div>
                                            <p className="font-bold mt-5 md:text-lg text-base text-black">Email</p>
                                            <p className="text-black hover:underline md:text-base text-sm hover:text-[#F68D13] transition-colors duration-300">info@winzinfotech.com</p>
                                        </div>
                                    </a>

                                    {/* Contact */}
                                    <a 
                                        href="tel:+917203030730" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3"
                                    >
                                        <FaPhoneAlt className="text-[#F68D13] md:text-2xl text-xl" />
                                        <div>
                                            <p className="font-bold lg:pt-10 sm:pt-5 pt-3 md:text-lg text-base text-black">Contact</p>
                                            <div className="flex flex-col sm:gap-2 md:text-base text-sm">
                                                <a href="tel:+917203030730" className="text-black hover:underline hover:text-[#F68D13] transition-colors duration-300">+917203030730</a>
                                                <a href="tel:+919998081838" className="text-black hover:underline hover:text-[#F68D13] transition-colors duration-300">+919998081838</a>
                                            </div>
                                        </div>
                                    </a>

                                    {/* WhatsApp */}
                                    <a 
                                        href="https://wa.me/917203030730" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3"
                                    >
                                        <FaWhatsapp className="text-[#F68D13] md:text-3xl text-2xl" />
                                        <div>
                                            <p className="font-bold sm:mt-5 mt-3 md:text-lg text-base text-black">WhatsApp</p>
                                            <p className="text-black hover:underline md:text-base text-sm hover:text-[#F68D13] transition-colors duration-300">+917203030730</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Form */}
                    <div className="lg:px-8 md:px-4 bg-white w-full md:w-1/2 min-h-[80vh] flex flex-col">
                        <h3 className="text-center text-[#F68D13] font-medium lg:mb-6 mb-4 text-xl sm:text-2xl md:text-base lg:text-xl xl:text-4xl">
                            Let's Build the Next Big Thing.
                        </h3>
                        {/* form */}
                        <form onSubmit={handleSubmit} className="xl:space-y-6 md:space-y-5 sm:space-y-6 space-y-4 p-6 bg-gray-100 flex-1">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full border-b border-gray-300 focus:outline-none focus:border-[#F68D13] py-2 text-sm "
                            />
                            <input
                                type="number"
                                name="contactNo"
                                placeholder="Contact No"
                                value={formData.contactNo}
                                onChange={handleInputChange}
                                className="w-full border-b border-gray-300 focus:outline-none focus:border-[#F68D13] py-2 text-sm "
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full border-b border-gray-300 focus:outline-none focus:border-[#F68D13] py-2 text-sm "
                            />
                            <input
                                type="text"
                                name="businessName"
                                placeholder="Business Name/Link"
                                value={formData.businessName}
                                onChange={handleInputChange}
                                className="w-full border-b border-gray-300 focus:outline-none focus:border-[#F68D13] py-2 text-sm "
                            />
                            <select
                                name="budget"
                                value={formData.budget}
                                onChange={handleInputChange}
                                className="w-full px-1 cursor-pointer border border-gray-300 focus:outline-none focus:border-[#F68D13] py-2 text-sm bg-white"
                            >
                                <option value="" disabled>Select Budget Range</option>
                                <option value="Under ₹5,000">Under ₹5,000</option>
                                <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
                                <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                                <option value="₹50,000 - ₹50,000">₹25,000 - ₹50,000</option>
                                <option value="Above ₹50,000">Above ₹50,000</option>
                            </select>
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={10}
                                className="w-full bg-white placeholder:text-gray-500 border p-2 border-gray-300 focus:outline-none focus:border-[#F68D13] py-2 text-sm resize-none"
                            />

                            <div className="flex justify-center">
                                <button type="submit" className="bg-[#F68D13] cursor-pointer text-white transition">
                                    <TextHover text="Build With Winz" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="lg:p-14 md:p-10 xl:p-20 p-6 bg-gray-100">
                <div className="relative bg-gray-100 w-full h-[350px] md:h-[420px] lg:h-[500px] xl:h-[600px] rounded-lg overflow-hidden shadow-md">
                    {/* Label */}
                    <div className="absolute top-0 left-3 sm:left-4 z-10 bg-gray-300 text-black text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 sm:py-2 rounded shadow-sm">
                        Office Address
                    </div>

                    {/* Marker */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full z-20">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#F68D13"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="white"
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 drop-shadow-md"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 2.25c-4.556 0-8.25 3.694-8.25 8.25 0 6.07 8.25 11.25 8.25 11.25s8.25-5.18 8.25-11.25c0-4.556-3.694-8.25-8.25-8.25zM12 12.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5z"
                            />
                        </svg>
                    </div>

                    {/* Map Image Clickable */}
                    <a
                        href="https://maps.app.goo.gl/s7CXUCPHhoPNXR3v7?g_st=aw"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={mapimg}
                            alt="Location Map"
                            className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
                        />
                    </a>

                    {/* Address Box */}
                    <div className="absolute bottom-0 left-0 bg-gray-100 shadow-lg p-3 sm:p-4 w-60 sm:w-72 shadow-orange-300 z-10">
                        <h3 className="text-xs sm:text-sm font-medium mb-2 text-gray-800">
                            Address
                        </h3>
                        <hr className="border-t-2 border-gray-500 w-6 sm:w-8 mb-2" />
                        <p 
                            onClick={() => window.open("https://maps.app.goo.gl/s7CXUCPHhoPNXR3v7?g_st=aw", "_blank")} 
                            className="md:text-[17px] text-xs sm:text-sm hover:underline text-gray-700 leading-relaxed font-normal cursor-pointer"
                        >
                            306, Shivam Infinity,<br />
                            Opp. S.T. Workshop Dharampur Road,<br />
                            Abrama, Valsad, Gujarat – 396001.
                        </p>
                    </div>
                </div>
            </div>
            <ContactUsFooter />
        </>
    );
};

export default Contact;

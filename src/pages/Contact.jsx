// import bgImage from "../img/bg1.png";
import mapimg from "../img/map.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useInView } from "react-intersection-observer";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
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
    const [loading, setLoading] = useState(false);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            
            const templateParams = {
                title: "New Contact Message",
                name: formData.name,
                email: formData.email,
                contactNo: formData.contactNo,
                businessName: formData.businessName,
                budget: formData.budget,
                message: formData.message,
            };

            await emailjs.send(
                "service_iu7004n",
                "template_8s7wqat",
                templateParams,
                "lMZcrZk-HUycW4d-z"
            );

            alert("Message sent successfully!");
            setFormData({
                name: "",
                contactNo: "",
                email: "",
                businessName: "",
                budget: "",
                message: "",
            });
        } catch (err) {
            console.error(err);
            alert("Failed to send message.");
        } finally {
            setLoading(false);
        }
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
                url="/contactus"
                image="/logoNew.png"
                structuredData={contactStructuredData}
            />

            {/* Main Contact Section with Orange Background */}
            <div className="relative w-full mt-20 overflow-hidden bg-white">
                {/* Orange Background with Clean Triangular Cuts */}
                <div className="relative px-4 sm:px-6 lg:px-20 xl:px-28 py-10 md:py-14 lg:py-16 overflow-hidden">
                    
                    {/* Orange Decorative Cut - Top Left Side */}
                    <div className="absolute left-0 lg:left-40 top-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[800px] lg:h-[400px] -ml-20 md:-ml-32 -mt-10 z-0 pointer-events-none">
                        <svg viewBox="0 0 500 400" className="w-full h-full" preserveAspectRatio="xMinYMin slice">
                            <path 
                                d="M 0 0 L 500 0 L 200 400 L 0 400 Z" 
                                fill="#F68D13" 
                                opacity="0.15"
                            />
                        </svg>
                    </div>
                    
                    {/* Orange Decorative Cut - Right Side */}
                    <div className="absolute right-0 top-0 w-[300px] h-[400px] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[700px] -mr-20 md:-mr-32 z-0 pointer-events-none">
                        <svg viewBox="0 0 500 600" className="w-full h-full" preserveAspectRatio="xMaxYMin slice">
                            <path 
                                d="M 150 0 L 500 0 L 500 600 L 0 450 Z" 
                                fill="#F68D13" 
                                opacity="0.15"
                            />
                        </svg>
                    </div>
                    
                    {/* Orange Decorative Cut - Bottom Left Side */}
                    <div className="absolute left-0 lg:left-50 bottom-0 w-[300px] h-[300px] md:w-[400px] md:h-[350px] lg:w-[900px] lg:h-[400px] -ml-20 md:-ml-32 -mb-10 z-0 pointer-events-none">
                        <svg viewBox="0 0 500 400" className="w-full h-full" preserveAspectRatio="xMinYMax slice">
                            <path 
                                d="M 0 0 L 300 400 L 0 400 Z" 
                                fill="#F68D13" 
                                opacity="0.15"
                            />
                        </svg>
                    </div>
                    
                    <div className="relative z-10 max-w-7xl mx-auto">
                        {/* Image and Form Section - Attached Together */}
                        <div className="grid lg:grid-cols-2 gap-0 items-stretch">
                            {/* Left Side - Location Card & Image */}
                            <div className="relative order-2 lg:order-1 flex items-center">
                                <div className="relative flex items-center justify-center lg:justify-start w-full h-full">
                                    {/* Background Office Image */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8 }}
                                        className="relative w-full h-full flex items-center"
                                    >
                                        <div className="lg:mt-47.5 w-full lg:w-[60%] h-[350px] sm:h-[450px] lg:ml-65 lg:h-[650px] overflow-hidden shadow-2xl">
                                            <img 
                                                src="/demo.jpg" 
                                                alt="Office" 
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Combined Contact, Email & WhatsApp Card - Single Card on Left */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        className="absolute left-auto right-4 sm:left-8 sm:right-auto lg:left-12 top-8 lg:mt-70 sm:top-16 bg-white shadow-2xl p-3 sm:p-6 w-[180px] sm:w-[300px] hover:shadow-[0_15px_50px_rgba(0,0,0,0.2)] transition-all duration-300 space-y-3 sm:space-y-6 rounded-none"
                                    >
                                        {/* Contact Section */}
                                        <div>
                                            <div className="flex items-center gap-1.5 sm:gap-3 mb-1.5 sm:mb-3">
                                                <div className="bg-[#F68D13] p-1.5 sm:p-2.5 rounded-full transition-transform duration-300 hover:scale-110">
                                                    <FaPhoneAlt className="w-2.5 h-2.5 sm:w-5 sm:h-5 text-white" />
                                                </div>
                                                <h3 className="text-[9px] sm:text-xl md:text-2xl font-medium text-gray-800">Contact</h3>
                                            </div>
                                            <div className="space-y-0.5 sm:space-y-1 text-gray-600 text-[8px] sm:text-base md:text-base ml-6 sm:ml-12">
                                                <a href="tel:+917203030730" className="block hover:text-[#F68D13] transition-all duration-300 hover:translate-x-1">
                                                    +917203030730
                                                </a>
                                                <a href="tel:+919998081838" className="block hover:text-[#F68D13] transition-all duration-300 hover:translate-x-1">
                                                    +919998081838
                                                </a>
                                            </div>
                                        </div>

                                        <hr className="border-gray-200" />

                                        {/* Email Section */}
                                        <div>
                                            <div className="flex items-center gap-1.5 sm:gap-3 mb-1.5 sm:mb-3">
                                                <div className="bg-[#F68D13] p-1.5 sm:p-2.5 rounded-full transition-transform duration-300 hover:scale-110">
                                                    <FaEnvelope className="w-2.5 h-2.5 sm:w-5 sm:h-5 text-white" />
                                                </div>
                                                <h3 className="text-[9px] sm:text-xl md:text-2xl font-medium text-gray-800">Email</h3>
                                            </div>
                                            <div className="text-gray-600 text-[8px] sm:text-base md:text-base ml-6 sm:ml-12">
                                                <a 
                                                    href="mailto:info@winzinfotech.com" 
                                                    className="hover:text-[#F68D13] transition-all duration-300 hover:translate-x-1 break-all inline-block"
                                                >
                                                    info@winzinfotech.com
                                                </a>
                                            </div>
                                        </div>

                                        <hr className="border-gray-200" />

                                        {/* WhatsApp Section */}
                                        <div>
                                            <div className="flex items-center gap-1.5 sm:gap-3 mb-1.5 sm:mb-3">
                                                <div className="bg-[#F68D13] p-1.5 sm:p-2.5 rounded-full transition-transform duration-300 hover:scale-110">
                                                    <FaWhatsapp className="w-2.5 h-2.5 sm:w-5 sm:h-5 text-white" />
                                                </div>
                                                <h3 className="text-[9px] sm:text-xl md:text-2xl font-medium text-gray-800">WhatsApp</h3>
                                            </div>
                                            <div className="text-gray-600 text-[8px] sm:text-base md:text-base ml-6 sm:ml-12">
                                                <a 
                                                    href="https://wa.me/917203030730" 
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-[#F68D13] transition-all duration-300 hover:translate-x-1 inline-block"
                                                >
                                                    +917203030730
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Right Side - Heading & Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="order-1 lg:order-2 flex flex-col"
                            >
                                {/* Heading - Let's Build Something Big! */}
                                <div className="mb-6 -mt-8 lg:mb-8 px-6 sm:px-6 lg:px-10 pt-6 sm:pt-8 lg:pt-10">
                                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-tight text-black">
                                        Let's Build
                                    </h1>
                                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-tight text-[#F68D13]">
                                        Something Big!
                                    </h2>
                                </div>

                                <div className="bg-gray-50 shadow-xl p-6 sm:p-8 lg:p-10 flex-1 flex flex-col">
                                    {/* Contact Form */}
                                    <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                                        {/* Name */}
                                        <div>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full bg-white border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#F68D13] focus:ring-1 focus:ring-[#F68D13] transition-all"
                                            />
                                        </div>

                                        {/* Contact No */}
                                        <div>
                                            <input
                                                type="tel"
                                                name="contactNo"
                                                placeholder="Contact No"
                                                value={formData.contactNo}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full bg-white border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#F68D13] focus:ring-1 focus:ring-[#F68D13] transition-all [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full bg-white border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#F68D13] focus:ring-1 focus:ring-[#F68D13] transition-all"
                                            />
                                        </div>

                                        {/* Business Name/Link */}
                                        <div>
                                            <input
                                                type="text"
                                                name="businessName"
                                                placeholder="Business Name/Link"
                                                value={formData.businessName}
                                                onChange={handleInputChange}
                                                className="w-full bg-white border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#F68D13] focus:ring-1 focus:ring-[#F68D13] transition-all"
                                            />
                                        </div>

                                        {/* Budget Range */}
                                        <div>
                                            <select
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleInputChange}
                                                className="w-full bg-white border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-500 focus:outline-none focus:border-[#F68D13] focus:ring-1 focus:ring-[#F68D13] transition-all cursor-pointer"
                                            >
                                                <option value="" disabled>Select Budget Range</option>
                                                <option value="Upto INR 50,000">Upto INR 50,000</option>
                                                <option value="INR 50,000 - INR 2,00,000">INR 50,000 - INR 2,00,000</option>
                                                <option value="INR 2,00,000 - INR 5,00,000">INR 2,00,000 - INR 5,00,000</option>
                                                <option value="INR 5,00,000">INR 5,00,000+</option>
                                            </select>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <textarea
                                                name="message"
                                                placeholder="Message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                rows={6}
                                                required
                                                className="w-full bg-white border border-gray-300 px-4 py-3 text-sm md:text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#F68D13] focus:ring-1 focus:ring-[#F68D13] transition-all resize-y"
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full bg-[#F68D13] text-white font-bold py-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                        >
                                            {loading ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                                                    Sending...
                                                </span>
                                            ) : (
                                                <TextHover text="Build With Winz" />
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Loading Overlay */}
                {loading && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
            </div>

            {/* Map Section */}
            <div className="px-8 lg:px-20 xl:px-28 py-10 md:py-14 lg:py-16 xl:py-20 bg-gray-100">
                <div className="relative bg-gray-100 w-full h-[350px] md:h-[420px] lg:h-[500px] xl:h-[600px] rounded-lg overflow-hidden shadow-md">
                    {/* Interactive Google Map */}
                     <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.8629012471874!2d72.9396459!3d20.5936557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c3b71faff0a7%3A0x4f24bbd2a3a60412!2sWinz%20Infotech%20%7C%20Creative%20Digital%20Agency!5e0!3m2!1sen!2sin!4v1765532685906!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute top-0 left-0 w-full h-full"
                        title="Office Location Map"
                    ></iframe>
                </div>
            </div>
            <ContactUsFooter />
        </>
    );
};

export default Contact;

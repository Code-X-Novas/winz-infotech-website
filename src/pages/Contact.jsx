import bgImage from "../img/bg1.png";
import mapimg from "../img/map.png";
import ContactUsFooter from "../components/ContactUsFooter";
import TextHover from "../components/Animations/TextHover";
import { useEffect, useState } from "react";
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        contactNo: '',
        email: '',
        businessName: '',
        budget: '',
        message: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <>
            <div className="min-h-screen bg-white text-black lg:px-10 xl:px-16 px-6 relative w-full mt-20 lg:py-10 py-5">
                {/* Main Flex Container */}
                <div className="flex flex-col md:flex-row gap-10 lg:gap-14 items-stretch min-h-[80vh]">
                    {/* Left Side */}
                    <div className="space-y-4 h-full basis-[55%]">
                        <h1 className="xl:text-6xl lg:text-5xl sm:text-4xl text-3xl font-medium">
                            Let’s Build
                        </h1>
                        <h2 className="xl:text-7xl lg:text-6xl sm:text-5xl text-3xl font-medium text-[#F68D13]">
                            Something Big!
                        </h2>

                        <div
                            className="bg-gray-50 px-4 sm:px-6 pb-6 h-full"
                            style={{
                                backgroundImage: `url(${bgImage})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <h3 className="font-medium mb-4 bg-gray-200 text-gray-700 inline-block px-3 py-1 rounded text-xs sm:text-sm md:text-base">
                                Contact Info
                            </h3>

                            <div className="space-y-10 sm:space-y-14 md:space-y-16 flex flex-col h-full">
                                {/* Email */}
                                <div className="flex justify-between gap-4 sm:gap-6">
                                    <div className="flex flex-col gap-1 sm:gap-2 lg:text-lg text-sm">
                                        <p className="text-[#F68D13] font-medium">Email</p>
                                        <span className="text-[#F68D13] font-bold">—</span>
                                    </div>
                                    <p className="text-right break-words md:text-[17px] text-sm font-normal md:leading-9 leading-6">
                                        Info@winzinfotech.com
                                    </p>
                                </div>

                                {/* Contact Number */}
                                <div className="flex justify-between gap-4 sm:gap-6">
                                    <div className="flex flex-col gap-1 sm:gap-2 lg:text-lg text-sm">
                                        <p className="text-[#F68D13] font-medium">Contact Number</p>
                                        <span className="text-[#F68D13] font-bold">—</span>
                                    </div>
                                    <div className="text-right space-y-1 text-nowrap md:text-[17px] text-sm font-normal md:leading-9 leading-6">
                                        <p>+917203030730</p>
                                        <p>+919998081838</p>
                                    </div>
                                </div>

                                {/* WhatsApp Number */}
                                <div className="flex justify-between gap-4 sm:gap-6">
                                    <div className="flex flex-col gap-1 sm:gap-2 lg:text-lg text-sm">
                                        <p className="text-[#F68D13] font-medium">WhatsApp Number</p>
                                        <span className="text-[#F68D13] font-bold">—</span>
                                    </div>
                                    <p className="text-right text-nowrap md:text-[17px] text-sm font-normal md:leading-9 leading-6">
                                        +917203030730
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Form */}
                    <div className="lg:p-8 md:p-4 p-6 h-full bg-gray-100 basis-[40%]">
                        <h3 className="text-center text-[#F68D13] font-medium lg:mb-6 mb-4 text-lg sm:text-2xl md:text-base lg:text-xl xl:text-3xl">
                            Let’s Build the Next Big Thing.
                        </h3>
                        {/* form */}
                        <form onSubmit={handleSubmit} className="xl:space-y-6 md:space-y-5 sm:space-y-6 space-y-4 p-6 bg-white">
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
                                rows={3}
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

                {/* Map Section */}
                <div className="relative w-full h-[350px] md:h-[420px] lg:h-[500px] rounded-lg overflow-hidden shadow-md mt-8 sm:mt-10">
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

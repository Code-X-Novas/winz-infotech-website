import { FaInstagram, FaFacebookF, FaLinkedinIn, FaBehance, FaYoutube, FaPhoneAlt, } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import TextHover from "./Animations/TextHover";
import { useNavigate } from "react-router-dom";

const Footer = ({ className = "" }) => {

    const navigate = useNavigate();

    return (
        <footer className={`bg-white text-gray-800  ${className}`}>
            {/* Top content */}
            <div className="max-w-screen mx-auto px-4 md:px-10 xl:px-16 lg:py-12 pb-8">
                <div className="flex flex-col lg:flex-row xl:gap-10 lg:gap-6 md:gap-12 justify-between">
                    {/* Left: Logo & Links */}
                    <div className="flex flex-col gap-10">
                        {/* top content */}
                        <div className="flex flex-col gap-6 lg:flex-row lg:gap-20 items-center">
                            {/* Logo + Description */}
                            <div className="lg:w-1/2 text-center mt-8 lg:mt-0 lg:text-left">
                                <img
                                    src="./logoNew.png"
                                    alt="Logo"
                                    className="md:h-16 h-14 w-auto mx-auto lg:mx-0"
                                />
                                <p className="text-sm lg:mt-10 mt-5 text-gray-600">
                                    A creative agency that blends design with performance. From
                                    branding to influencer campaigns — we execute ideas that move.
                                </p>
                            </div>

                            {/* Quick Links & Landing Pages */}
                            <div className="flex lg:w-auto w-full justify-evenly flex-row gap-6 lg:gap-12 text-sm text-gray-700 text-center lg:text-left lg:mt-8">
                                {/* Quick Links */}
                                <div className="space-y-3 mb-6 md:mb-0">
                                    <h3 className="font-bold min-w-[100px] text-[#FC8A10]">
                                        QUICK LINKS
                                    </h3>
                                    <ul className="space-y-1 text-gray-700">
                                        <li>
                                            <button onClick={() => navigate("/")} className="hover:text-[#FC8A10] cursor-pointer">
                                                Home
                                            </button>
                                        </li>
                                        <li>
                                            <button onClick={() => navigate("/services")} className="hover:text-[#FC8A10] cursor-pointer">
                                                Services
                                            </button>
                                        </li>
                                        <li>
                                            <button onClick={() => navigate("/portfolio")} className="hover:text-[#FC8A10] cursor-pointer">
                                                Portfolio 
                                            </button>
                                        </li>
                                        <li>
                                            <button onClick={() => navigate("/case-study")} className="hover:text-[#FC8A10] cursor-pointer">
                                                Case Study
                                            </button>
                                        </li>
                                        <li>
                                            <button onClick={() => navigate("/blogs")} className="hover:text-[#FC8A10] cursor-pointer">
                                                Blogs
                                            </button>
                                        </li>
                                        <li>
                                            <button onClick={() => navigate("/about")} className="hover:text-[#FC8A10] cursor-pointer">
                                                About Us
                                            </button>
                                        </li>
                                        <li>
                                            <button onClick={() => navigate("/career")} className="hover:text-[#FC8A10] cursor-pointer">
                                                Career
                                            </button>
                                        </li>
                                    </ul>
                                </div>

                                {/* Landing Pages */}
                                <div className="space-y-3">
                                    <h3 className="font-bold text-[#FC8A10]">
                                        LANDING PAGES
                                    </h3>
                                    <ul className="space-y-1 text-gray-700">
                                        <li><a href="https://hook-neon.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FC8A10]">Doctors & Medical Professionals</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Socials + Contact Info */}
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-1">
                            {/* Social Icons */}
                            <div className="flex gap-3 justify-center">
                                {[
                                    {
                                        icon: FaInstagram,
                                        link: "https://www.instagram.com/winzinfotechofficial/",
                                    },
                                    {
                                        icon: FaFacebookF,
                                        link: "https://www.facebook.com/winzinfotechofficial/",
                                    },
                                    {
                                        icon: FaLinkedinIn,
                                        link: "https://www.linkedin.com/company/winzinfotechofficial/",
                                    },
                                    {
                                        icon: FaBehance,
                                        link: "https://www.behance.net/winzinfotechofficial",
                                    },
                                    {
                                        icon: FaYoutube,
                                        link: "https://www.youtube.com/@WinzInfotech",
                                    },
                                ].map(({ icon: Icon, link }, idx) => (
                                    <a
                                        key={idx}
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-white border border-gray-300 rounded-full text-gray-800 transform transition duration-200 hover:scale-90 cursor-pointer"
                                        style={{
                                            transition: "all 0.3s",
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.color = "#FC8A10";
                                            e.currentTarget.style.borderColor = "#FC8A10";
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.color = "";
                                            e.currentTarget.style.borderColor = "#D1D5DB";
                                        }}
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>

                            {/* Email + Phones */}
                            <div className="flex flex-col md:mb-0 mb-6 sm:flex-row gap-6 lg:gap-10 text-base md:text-sm text-gray-700 text-center lg:text-left">
                                {/* Email */}
                                <a
                                    href="mailto:Info@winzinfotech.com"
                                    className="flex items-center justify-center md:justify-start gap-2 underline hover:no-underline transform transition duration-200 cursor-pointer"
                                >
                                    <MdEmail className="size-5 text-[#FC8A10]" />
                                    <span className="text-nowrap hover:text-[#FC8A10] ">
                                        Info@winzinfotech.com
                                    </span>
                                </a>

                                {/* Phone Numbers */}
                                <div className="flex flex-col items-center md:items-start space-y-2 lg:mb-6">
                                    <a
                                        href="tel:+917203030730"
                                        className="flex items-center gap-2 underline hover:no-underline transform transition duration-200 cursor-pointer"
                                    >
                                        <FaPhoneAlt className="size-5 text-[#FC8A10]" />
                                        <span className="text-nowrap hover:text-[#FC8A10] ">
                                            +917203030730
                                        </span>
                                    </a>
                                    <a
                                        href="tel:+919998081838"
                                        className="flex items-center gap-2 underline hover:no-underline transform transition duration-200 cursor-pointer"
                                    >
                                        <FaPhoneAlt className="size-5 text-[#FC8A10]" />
                                        <span className="text-nowrap hover:text-[#FC8A10] ">
                                            +919998081838
                                        </span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="w-full lg:max-w-md bg-gray-200 p-6 rounded">
                        <h3 className="font-bold mb-1" style={{ color: "#FC8A10" }}>
                            CONTACT US
                        </h3>
                        <p className="text-xl font-medium mb-4 text-gray-400">
                            Seeking personalized support? <br />
                            <span className="text-black font-semibold">
                                Request a call from our team
                            </span>
                        </p>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full mb-3 p-2 border border-gray-300 rounded text-sm focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="w-full mb-4 p-2 border border-gray-300 rounded text-sm focus:outline-none"
                        />
                        <button className="bg-[#F68D13] cursor-pointer text-white transition">
                            <TextHover text="Sent a request" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Strip */}
            <div className="w-full justify-end flex sm:p-4 lg:px-8 p-2 gap-2 sm:flex-row flex-col bg-black text-center text-sm text-gray-400">
                <p className="sm:absolute lg:left-[40%] md:left-10 sm:left-5 ">© Winz Infotech {new Date().getFullYear()} - All Rights Reserved</p>
                <p className="flex gap-x-5 sm:justify-end justify-center">
                    <p onClick={() => navigate("/privacy-policy")} className="hover:text-[#F68D13] hover:underline">Privacy Policy</p> |{" "}
                    <p onClick={() => navigate("/term-&-conditions")} className="hover:text-[#F68D13] hover:underline">Terms & Service</p>
                </p>
            </div>
        </footer>
    );
};

export default Footer;

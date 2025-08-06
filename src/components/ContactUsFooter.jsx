import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaBehance, FaYoutube, FaPhoneAlt, } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import imglogo from "../img/logo.png";
const ContactUsFooter = () => {
    return (
        <footer>
            <div className="flex flex-col gap-10 px-4 lg:px-10 xl:px-28 lg:py-12 pb-8 text-gray-800 bg-white">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between xl:gap-20 gap-12">
                    {/* Logo + Description */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <img
                            src={imglogo}
                            alt="Logo"
                            className="h-46 w-auto mx-auto lg:mx-0"
                        />
                        <p className="text-sm text-gray-600">
                            A creative agency that blends design with performance. From
                            branding to influencer campaigns — we execute ideas that move.
                        </p>
                    </div>

                    <div className="flex lg:w-auto w-full justify-evenly flex-row gap-6 lg:gap-24 text-sm text-gray-700 text-center lg:text-left lg:mt-8">
                        {/* Center: Quick Links */}
                        <div className="flex-1 md:min-w-[200px] text-center lg:text-left lg:mt-12">
                            <h3 className="font-bold text-[#FC8A10] mb-4">
                                QUICK LINKS
                            </h3>
                            <ul className="grid sm:grid-cols-1 lg:grid-cols-2 gap-y-2 text-sm md:text-base text-gray-700">
                                <li>
                                    <Link to="/" className="hover:text-[#FC8A10]">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:text-[#FC8A10]">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/portfolio" className="hover:text-[#FC8A10]">
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/career" className="hover:text-[#FC8A10]">
                                        Career
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services" className="hover:text-[#FC8A10]">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blogs" className="hover:text-[#FC8A10]">
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Right: Landing Pages */}
                        <div className="flex-1 min-w-[150px] text-center lg:text-left lg:mt-12">
                            <h3 className="font-bold text-[#FC8A10] mb-4">
                                LANDING PAGES
                            </h3>
                            <ul className="space-y-1 text-sm md:text-base text-gray-700">
                                <li className="hover:text-[#FC8A10] cursor-pointer">Hook</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row lg:items-center lg:justify-between md:gap-8 gap-6 ">
                    {/* Social Icons - LEFT */}
                    <div className="flex items-center justify-center md:gap-4 sm:gap-3 gap-4">
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
                                className="md:p-2 sm:p-1 p-2 bg-white border border-gray-300 rounded-full text-gray-800 
                                hover:text-[#FC8A10] hover:border-[#FC8A10] 
                                transform transition-all duration-200 ease-in-out hover:scale-90"
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>

                    {/* Contact Info - RIGHT */}
                    <div className="flex flex-col lg:text-base text-xs sm:flex-row items-center gap-4 md:gap-8 text-center sm:text-left">
                        <a
                            href="mailto:Info@winzinfotech.com"
                            className="flex items-center gap-2 underline hover:no-underline cursor-pointer transition-transform hover:scale-90"
                        >
                            <MdEmail />
                            <span>Info@winzinfotech.com</span>
                        </a>
                        <a
                            href="tel:+917203030730"
                            className="flex items-center gap-2 underline hover:no-underline cursor-pointer transition-transform hover:scale-90"
                        >
                            <FaPhoneAlt />
                            <span>+917203030730</span>
                        </a>
                        <a
                            href="https://wa.me/917203030730"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 underline hover:no-underline cursor-pointer transition-transform hover:scale-90"
                        >
                            <FaPhoneAlt />
                            <span>+919998081838</span>
                        </a>
                    </div>
                </div>

            </div>

            {/* Copyright */}
            <div className="w-full justify-end flex sm:p-4 lg:px-8 p-2 gap-2 sm:flex-row flex-col bg-black text-center text-sm text-gray-400">
                <p className="sm:absolute lg:left-[40%] left-5 ">© Winz Infotech {new Date().getFullYear()} - All Rights Reserved</p>
                <p className="flex gap-x-5 sm:justify-end justify-center">
                    <a href="/privacy-policy" className="hover:text-[#F68D13] hover:underline">Privacy Policy</a> |{" "}
                    <a href="/term-&-conditions" className="hover:text-[#F68D13] hover:underline">Terms & Service</a>
                </p>
            </div>
        </footer>
    );
};

export default ContactUsFooter;

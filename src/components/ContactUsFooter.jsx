import { useNavigate } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaBehance, FaYoutube, FaPhoneAlt, } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import imglogo from "../img/logo.png";
const ContactUsFooter = () => {

    const navigate = useNavigate();

    return (
        <footer>
            <div className="flex flex-col gap-10 px-8 lg:px-20 xl:px-28 lg:pb-12 lg:pt-0 pb-8 text-gray-800 bg-white">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between xl:gap-20 gap-12">
                    {/* Logo + Description */}
                    <div className="lg:w-[35%] text-center lg:text-left">
                        <img
                            src={imglogo}
                            alt="Logo"
                            className="h-46 w-auto mx-auto lg:mx-0"
                        />
                        <p className="text-sm lg:text-base text-gray-600">
                            A creative agency that blends design with performance. From
                            branding to influencer campaigns — we execute ideas that move.
                        </p>
                    </div>

                    <div className="flex lg:w-auto w-full justify-evenly flex-row gap-6 lg:gap-16 xl:gap-20 text-sm text-gray-700 text-center lg:text-left lg:mt-8">

                        {/* Center: Our Expertise */}
                        <div className="flex-1 md:min-w-[200px] text-center lg:text-left lg:mt-12">
                            <h3 className="font-bold text-[#FC8A10] mb-4">
                                OUR EXPERTISE
                            </h3>
                            <ul className="flex flex-col gap-y-2 text-sm md:text-base text-gray-700">
                                <li className="hover:text-[#FC8A10] cursor-pointer">
                                    Branding
                                </li>
                                <li className="hover:text-[#FC8A10] cursor-pointer">
                                    Lead Generation
                                </li>
                                <li className="hover:text-[#FC8A10] cursor-pointer">
                                    Perfomance Marketing
                                </li>
                                <li className="hover:text-[#FC8A10] cursor-pointer">
                                    Social Media Management
                                </li>
                            </ul>
                        </div>

                        {/* Right: Growth Vertical */}
                        <div className="flex-1 min-w-[150px] text-center lg:text-left lg:mt-12">
                            <h3 className="font-bold text-[#FC8A10] mb-4">
                                GROWTH VERTICAL
                            </h3>
                            <ul className="space-y-1 text-sm md:text-base text-gray-700">
                                <li onClick={() => navigate("/medicalprofession")} className="hover:text-[#FC8A10] cursor-pointer">Medical Professionals</li>
                                <li className="hover:text-[#FC8A10] cursor-pointer">Real Estate</li>
                                <li className="hover:text-[#FC8A10] cursor-pointer">D2C Brands</li>
                                <li className="hover:text-[#FC8A10] cursor-pointer">Spas & Salons</li>
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
                            className="flex items-center gap-2 underline hover:no-underline cursor-pointer transition-transform"
                        >
                            <MdEmail className="text-[#FC8A10]" size={20}/>
                            <span className="hover:text-[#FC8A10]">Info@winzinfotech.com</span>
                        </a>
                        <a
                            href="tel:+917203030730"
                            className="flex items-center gap-2 underline hover:no-underline cursor-pointer transition-transform"
                        >
                            <FaPhoneAlt className="text-[#FC8A10]" size={20}/>
                            <span className="hover:text-[#FC8A10]">+917203030730</span>
                        </a>
                        <a
                            href="https://wa.me/917203030730"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 underline hover:no-underline cursor-pointer transition-transform"
                        >
                            <FaPhoneAlt className="text-[#FC8A10]" size={20}/>
                            <span className="hover:text-[#FC8A10]">+919998081838</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="w-full flex sm:p-4 px-8 lg:px-20 xl:px-28 p-2 gap-2 sm:flex-row flex-col bg-black text-sm text-gray-400 items-center justify-between">
                <p className="text-left">© Winz Infotech {new Date().getFullYear()} - All Rights Reserved</p>
                <p className="flex gap-x-5 sm:justify-end justify-center">
                    <span onClick={() => navigate("/privacy-policy")} className="hover:text-[#F68D13] cursor-pointer hover:underline">Privacy Policy</span> |{" "}
                    <span onClick={() => navigate("/term-&-conditions")} className="hover:text-[#F68D13] cursor-pointer hover:underline">Terms & Service</span>
                </p>
            </div>
        </footer>
    );
};

export default ContactUsFooter;

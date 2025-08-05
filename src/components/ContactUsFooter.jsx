import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaBehance,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import imglogo from "../img/logo.png";

const ContactUsFooter = () => {
  return (
    <footer>
      <div className="flex flex-col gap-10 px-6 md:px-12 lg:px-28 py-10 text-gray-800  bg-gray-50">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 flex-wrap">
          {/* Left: Logo + Description */}
          <div className="flex-1 min-w-[250px] text-center lg:text-left space-y-4">
            <img
              src={imglogo}
              alt="Logo"
              className="h-28 w-auto mx-auto lg:mx-0"
            />
            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
              A creative agency that blends design with performance. From
              branding to influencer campaigns — we execute ideas that move.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="flex-1 min-w-[200px] text-center lg:text-left lg:mt-12 ">
            <h3 className="font-bold text-orange-500 mb-4 lg:mb-10">QUICK LINKS</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-y-2 text-sm md:text-base text-gray-700">
              <li className="hover:text-orange-500 cursor-pointer">Home</li>
              <li className="hover:text-orange-500 cursor-pointer">About Us</li>
              <li className="hover:text-orange-500 cursor-pointer">Portfolio</li>
              <li className="hover:text-orange-500 cursor-pointer">Career</li>
              <li className="hover:text-orange-500 cursor-pointer">Services</li>
              <li className="hover:text-orange-500 cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Right: Landing Pages */}
          <div className="flex-1 min-w-[150px] text-center lg:text-left lg:mt-12">
            <h3 className="font-bold text-orange-500 mb-4 lg:mb-10">LANDING PAGES</h3>
            <ul className="space-y-1 text-sm md:text-base text-gray-700">
              <li className="hover:text-orange-500 cursor-pointer">Hook</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 flex-wrap">
          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-4">
            {[FaInstagram, FaFacebookF, FaLinkedinIn, FaBehance, FaYoutube].map(
              (Icon, idx) => (
                <div
                  key={idx}
                  className="p-2 bg-white border border-gray-300 rounded-full text-gray-800 
                    hover:text-orange-500 hover:border-orange-500 
                    transform transition-all duration-200 ease-in-out hover:scale-90 cursor-pointer"
                >
                  <Icon className="w-4 h-4" />
                </div>
              )
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-end gap-4 sm:gap-8 text-center sm:text-left">
            <div className="flex items-center gap-2 underline hover:no-underline cursor-pointer transition-transform hover:scale-90">
              <MdEmail />
              <span>contact@lift.agency</span>
            </div>
            <div className="flex items-center gap-2 underline hover:no-underline cursor-pointer transition-transform hover:scale-90">
              <FaPhoneAlt />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center gap-2 underline hover:no-underline cursor-pointer transition-transform hover:scale-90">
              <FaPhoneAlt />
              <span>(123) 456-7890</span>
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full py-4 bg-black text-center text-xs md:text-sm text-gray-400">
        © NameBrand {new Date().getFullYear()} - All Rights Reserved
      </div>
    </footer>
  );
};

export default ContactUsFooter;

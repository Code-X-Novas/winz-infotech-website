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

const Footer = ({ className = "" }) => {
  return (
    <footer className={`bg-gray-50 text-gray-800  ${className}`}>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-16 lg:px-28 py-12">
          <div className="flex flex-col lg:flex-row gap-20 justify-between">
            {/* Left: Logo & Links */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:justify-between items-center lg:gap-20">
                {/* Logo + Description */}
                <div className="lg:w-1/2 text-center lg:text-left">
                  <img
                    src={imglogo}
                    alt="Logo"
                    className="h-32 w-auto mx-auto lg:mx-0"
                  />
                  <p className="text-sm text-gray-600">
                    A creative agency that blends design with performance. From
                    branding to influencer campaigns — we execute ideas that move.
                  </p>
                </div>

                {/* Quick Links & Landing Pages */}
                <div className="flex flex-col md:flex-row gap-6 lg:gap-24 text-sm text-gray-700 text-center lg:text-left lg:mt-8">
                  {/* Quick Links */}
                  <div className="space-y-3 mb-6 md:mb-0">
                    <h3 className="font-bold" style={{ color: "#FC8A10" }}>QUICK LINKS</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>Home</li>
                      <li>Portfolio</li>
                      <li>Services</li>
                      <li>About Us</li>
                      <li>Career</li>
                      <li>Blog</li>
                    </ul>
                  </div>

                  {/* Landing Pages */}
                  <div className="space-y-3">
                    <h3 className="font-bold" style={{ color: "#FC8A10" }}>LANDING PAGES</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>Hook</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Socials + Contact Info */}
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-1">
                {/* Social Icons */}
                <div className="flex gap-3 justify-center">
                  {[FaInstagram, FaFacebookF, FaLinkedinIn, FaBehance, FaYoutube].map(
                    (Icon, idx) => (
                      <div
                        key={idx}
                        className="p-2 bg-white border border-gray-300 rounded-full text-gray-800 transform transition duration-200 hover:scale-90 cursor-pointer"
                        style={{
                          transition: "all 0.3s",
                        }}
                        onMouseOver={e => {
                          e.currentTarget.style.color = "#FC8A10";
                          e.currentTarget.style.borderColor = "#FC8A10";
                        }}
                        onMouseOut={e => {
                          e.currentTarget.style.color = "";
                          e.currentTarget.style.borderColor = "#D1D5DB";
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    )
                  )}
                </div>

                {/* Email + Phones */}
                <div className="flex flex-col md:flex-row gap-6 lg:gap-10 text-sm text-gray-700 text-center lg:text-left">
                  {/* Email */}
                  <div
                    className="flex items-center justify-center md:justify-start gap-2 underline hover:no-underline transform transition duration-200 hover:scale-90 cursor-pointer"
                  >
                    <MdEmail />
                    <span className="transition duration-200 hover:scale-90">contact@lift.agency</span>
                  </div>

                  {/* Phone Numbers */}
                  <div className="flex flex-col items-center md:items-start space-y-2 lg:mb-6">
                    <div className="flex items-center gap-2 underline hover:no-underline transform transition duration-200 hover:scale-90 cursor-pointer">
                      <FaPhoneAlt />
                      <span className="text-nowrap transition duration-200 hover:scale-90">(123) 456-7890</span>
                    </div>
                    <div className="flex items-center gap-2 underline hover:no-underline transform transition duration-200 hover:scale-90 cursor-pointer">
                      <FaPhoneAlt />
                      <span className="text-nowrap transition duration-200 hover:scale-90">(123) 456-7890</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="w-full lg:max-w-sm bg-gray-200 p-6 rounded">
              <h3 className="font-bold mb-1" style={{ color: "#FC8A10" }}>CONTACT US</h3>
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
              <button
                className="text-white px-4 py-2 rounded w-full transition"
                style={{ backgroundColor: "#FC8A10" }}
                onMouseOver={e => (e.currentTarget.style.backgroundColor = "#e4770a")}
                onMouseOut={e => (e.currentTarget.style.backgroundColor = "#FC8A10")}
              >
                Send a request
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="w-full py-4 bg-black text-center text-sm text-gray-400">
          © NameBrand {new Date().getFullYear()} - All Rights Reserved
        </div>
      </footer>
   
  );
};

export default Footer;
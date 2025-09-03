import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // optional: install with `npm i lucide-react`
import TextHover from "./Animations/TextHover";

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [menuOpen, setMenuOpen] = useState(false);

    const isActive = (path) =>
        currentPath === path
            ? "text-[#F68D13]"
            : "text-black hover:text-[#F68D13] transition";

    const menuItems = [
        { path: "/services", label: "Services" },
        { path: "/portfolio", label: "Portfolio" },
        { path: "/case-study", label: "Case Study" },
        { path: "/blogs", label: "Blogs" },
        { path: "/about", label: "About us" },
        { path: "/career", label: "Career" },
    ];

    return (
        <nav className="w-full fixed z-50 px-6 md:px-16 bg-white ">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center py-5">
                    <img src="/logoNew.png" alt="Logo" className="lg:w-30 w-24 h-auto" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center lg:space-x-8 space-x-4 text-xs lg:text-base font-medium">
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={isActive(item.path)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link to="/contact">
                        <button className="bg-[#F68D13] cursor-pointer text-white transition">
                            <TextHover text="Contact us" />
                        </button>
                    </Link>
                </div>

                {/* Mobile Hamburger Icon */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-black"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden mt-4 flex flex-col space-y-4 bg-white/90 p-4 rounded-md shadow-md text-sm font-medium">
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setMenuOpen(false)}
                            className={isActive(item.path)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>
                        <button className="bg-[#F68D13] cursor-pointer text-white transition w-full text-left">
                            <TextHover text="Contact us" />
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
